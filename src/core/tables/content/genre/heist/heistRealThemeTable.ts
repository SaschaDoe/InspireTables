import {Table} from "../../../table";

export const heistRealThemes = [
    "in the perfect crime, the greatest theft is often of one's own moral certainty",
    "the heist's intricate plan is but a metaphor for life's delicate balance of chance and choice",
    "behind every locked vault lies the question of what truly holds value in our society",
    "in assembling the perfect crew, we often collect fragments of our own fractured psyche",
    "the greatest security system is not technology, but the unpredictability of human nature",
    "in the high-stakes game of the heist, the ultimate prize is the thrill of defying fate",
    "the perfect getaway is not from the scene of the crime, but from the prisons of our own making",
    "in the world of the heist, loyalty is a currency more valuable than any stolen treasure",
    "the most intricate part of any heist is navigating the labyrinth of human relationships",
    "in breaching impenetrable fortresses, we often confront the walls we've built around ourselves",
    "the mastermind's greatest feat is not outsmarting security, but orchestrating human nature",
    "in the heist's aftermath, the true test is not evading justice, but facing one's own conscience",
    "the allure of the impossible score reflects society's obsession with shortcutting success",
    "in the heist crew's diversity, we see a microcosm of society's potential for collaboration",
    "the perfect alibi is often a fantastical reimagining of the life we wish we had lived",
    "in the tension of the heist, we confront the thin line between criminal genius and madness",
    "the meticulous heist plan is but an illusion of control in a chaotic universe",
    "in bypassing alarms, the thief must silence the loudest siren: their own moral compass",
    "the greatest sleight of hand in any heist is the misdirection of one's own ethical boundaries",
    "in the adrenaline of the score, we glimpse the intoxicating freedom from societal constraints",
    "the heist's ticking clock echoes the relentless march of time in our own lives",
    "in cracking the unbreakable safe, we confront our own locked-away potential and fears",
    "the thrill of the perfect crime reflects humanity's deep-seated desire to transcend limitations",
    "in the heist's role-playing, we don masks that often reveal more than they conceal",
    "the insider's betrayal in a heist mirrors the self-sabotage in our personal pursuits",
    "in the aftermath of the score, the true test is not escaping capture, but escaping one's past",
    "the heist crew's synchronicity demonstrates the power of unity in diversity",
    "in outwitting the system, the heist exposes the flaws in society's notion of justice and fairness",
    "the perfect heist is a rebellion against a world that seems rigged against the common person",
    "in the high-wire act of the heist, we balance precariously between freedom and accountability"
]

export const HeistRealThemesTableName = "Heist Real Themes"

export class HeistRealThemeTable extends Table{
    constructor() {
        super();
        this.title = HeistRealThemesTableName;
        this.addEntriesFromList(heistRealThemes);
    }
}