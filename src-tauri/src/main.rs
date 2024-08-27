#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;
use std::path::Path;
use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            #[cfg(debug_assertions)] // Only include this code on debug builds
            {
                window.open_devtools();
                window.close_devtools();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_exe_dir,
            load_file,
            save_file,
            create_directory,
            load_all_files_in,
            does_directory_exist,
            log_to_console,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_exe_dir() -> Result<String, String> {
    let result = std::env::current_exe()
        .map(|path| path.parent().unwrap().to_string_lossy().into_owned())
        .map_err(|e| e.to_string());

    match &result {
        Ok(dir) => println!("Executable directory: {}", dir),
        Err(e) => println!("Error getting executable directory: {}", e),
    }

    result
}

#[tauri::command]
fn log_to_console(message: String) {
  println!("{}", message);
}

#[tauri::command]
fn load_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| e.to_string())
}

#[tauri::command]
fn does_directory_exist(path: String) -> Result<bool, String> {
    let path = Path::new(&path);
    Ok(path.is_dir())
}

#[tauri::command]
fn save_file(path: String, contents: String) -> Result<(), String> {
    let path = Path::new(&path);

    // Create the directory if it doesn't exist
    if let Some(parent) = path.parent() {
        if !parent.exists() {
            fs::create_dir_all(parent).map_err(|e| format!("Failed to create directory: {}", e))?;
            println!("Directory created: {:?}", parent);
        }
    }

    // Write the contents to the file, creating it if it doesn't exist
    match fs::write(path, &contents) {
        Ok(_) => {
            println!("File saved successfully: {:?}", path);
            Ok(())
        },
        Err(e) => Err(format!("Failed to save file: {}", e))
    }
}

#[tauri::command]
fn create_directory(path: String) -> Result<(), String> {
    fs::create_dir_all(path).map_err(|e| e.to_string())
}

#[tauri::command]
fn load_all_files_in(_app_handle: tauri::AppHandle, path: String) -> Result<Vec<String>, String> {
    let path = Path::new(&path);

    // Try to create the directory if it doesn't exist
    if !path.exists() {
        match fs::create_dir_all(path) {
            Ok(_) => println!("Directory created: {:?}", path),
            Err(e) => println!("Error creating directory: {}", e),
        }
    }

    let mut file_paths = Vec::new();

    match fs::read_dir(path) {
        Ok(entries) => {
            for entry in entries {
                match entry {
                    Ok(entry) => {
                        if entry.file_type().map(|ft| ft.is_file()).unwrap_or(false) {
                            if let Some(file_path) = entry.path().to_str() {
                                file_paths.push(file_path.to_string());
                            }
                        }
                    }
                    Err(e) => println!("Error reading directory entry: {}", e),
                }
            }
            Ok(file_paths)
        }
        Err(e) => {
            println!("Error reading directory: {}", e);
            Ok(Vec::new()) // Return an empty vector if there's an error
        }
    }
}