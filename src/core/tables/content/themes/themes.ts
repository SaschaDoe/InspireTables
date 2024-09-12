import {MagicTheme} from "./magicTheme";
import {DestinyTheme} from "./destinyTheme";
import type {Theme} from "./theme";
import {AfterlifeTheme} from "./afterlifeTheme";
import {AgonyTheme} from "./agonyTheme";
import {ApocalypseTheme} from "./apocalypseTheme";
import {AttractionTheme} from "./attractionTheme";
import {BalanceTheme} from "./balanceTheme";
import {BereavementTheme} from "./bereavementTheme";
import {CatAndMouseTheme} from "./catAndMouseTheme";
import {ChangeTheme} from "./changeTheme";
import {ComingOfAgeTheme} from "./comingOfAgeTheme";
import {CorruptionTheme} from "./corruptionTheme";
import {CultureClashesTheme} from "./cultureClashTheme";

export const allThemes: Theme[] = [
    new AfterlifeTheme(),
    new AgonyTheme(),
    new ApocalypseTheme(),
    new AttractionTheme(),
    new BalanceTheme(),
    new BereavementTheme(),
    new CatAndMouseTheme(),
    new ChangeTheme(),
    new ComingOfAgeTheme(),
    new CorruptionTheme(),
    new CultureClashesTheme(),
    new MagicTheme(),
    new DestinyTheme(),
];

// Helper function to get all theme names
export function getAllThemeNames(): string[] {
    return allThemes.map(theme => theme.name);
}

// Helper function to get a theme by name
export function getThemeByName(name: string): Theme | undefined {
    return allThemes.find(theme => theme.name.toLowerCase() === name.toLowerCase());
}

// Helper function to add a new theme
export function addTheme(theme: Theme): void {
    allThemes.push(theme);
}