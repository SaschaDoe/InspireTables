#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use std::fs;

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
        .invoke_handler(tauri::generate_handler![load_file, save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

use std::path::Path;

#[tauri::command]
fn save_file(path: String, contents: String) -> Result<(), String> {
    // Ensure the directory exists
    if let Some(parent) = Path::new(&path).parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    fs::write(path, contents).map_err(|e| e.to_string())
}

#[tauri::command]
fn load_file(path: String) -> Result<String, String> {
    match fs::read_to_string(&path) {
        Ok(contents) => Ok(contents),
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {
            // If the file doesn't exist, return an empty string
            Ok(String::new())
        }
        Err(e) => Err(e.to_string()),
    }
}