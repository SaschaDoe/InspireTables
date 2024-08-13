import { Table } from "../../table";

export const cureAvailability = [
    "universally accessible and affordable",
    "widely available over-the-counter",
    "common household remedy",
    "easily obtainable with a standard prescription",
    "available at most general healthcare facilities",
    "can be created at home with common ingredients",
    "widely available but often in short supply",
    "available in most urban areas",
    "common in developed regions, rare elsewhere",
    "requires a referral to a specialist",
    "available only through licensed pharmacies",
    "needs to be ordered in advance",
    "available but requires extensive travel to obtain",
    "only covered by specific insurance plans",
    "widely available but extremely expensive",
    "seasonal availability",
    "only available through clinical trials",
    "restricted to certain age groups or demographics",
    "requires membership in a specific organization",
    "only available through a specific religious or cultural practice",
    "can only be administered by specially trained individuals",
    "available only during certain seasons or moon phases",
    "requires special government clearance",
    "only manufactured in one specific country",
    "rationed due to limited supply",
    "restricted by law, requires special permission",
    "only available through the black market",
    "requires rare natural resources to produce",
    "only available to military personnel",
    "limited production due to complex manufacturing process",
    "restricted to participants of a secret medical program",
    "only accessible through high-level political connections",
    "available only through a secret organization",
    "requires a rare ingredient that's difficult to obtain",
    "limited to a few specialized facilities worldwide",
    "only one dose produced per year",
    "requires travel to a specific, remote location",
    "guarded by an ancient order of healers",
    "extremely rare, only found in one specific location",
    "mythical cure, existence unconfirmed"
];

export class CureAvailabilityTable extends Table {
    constructor() {
        super();
        this.title = "Cure Availability";
        this.withEntriesFromList(cureAvailability);
    }
}