import {Table} from "../../table";

const technologicalInnovationThemeStatements = [
    "the future is already here — it's just not evenly distributed",
    "any sufficiently advanced technology is indistinguishable from magic",
    "innovation is the unrelenting drive to break the status quo and develop anew where few have dared to go",
    "the advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life",
    "it has become appallingly obvious that our technology has exceeded our humanity",
    "we are stuck with technology when what we really want is just stuff that works",
    "the human spirit must prevail over technology",
    "it's not a faith in technology. it's faith in people",
    "the greatest achievement of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction",
    "we've arranged a civilization in which most crucial elements profoundly depend on science and technology",
    "once a new technology rolls over you, if you're not part of the steamroller, you're part of the road",
    "the art challenges the technology, and the technology inspires the art",
    "humanity is acquiring all the right technology for all the wrong reasons",
    "the real problem is not whether machines think but whether men do",
    "we are stuck with technology when what we really want is just stuff that works",
    "if we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner",
    "the production of too many useful things results in too many useless people",
    "technology is a useful servant but a dangerous master",
    "it's supposed to be automatic, but actually you have to push this button",
    "machines take me by surprise with great frequency",
    "the real danger is not that computers will begin to think like men, but that men will begin to think like computers",
    "our technology forces us to live mythically",
    "we become what we behold. we shape our tools, and thereafter our tools shape us",
    "the most important and urgent problems of the technology of today are no longer the satisfactions of the primary needs or of archetypal wishes, but the reparation of the evils and damages by technology of yesterday",
    "the great myth of our times is that technology is communication",
    "the system of nature, of which man is a part, tends to be self-balancing, self-adjusting, self-cleansing. not so with technology",
    "the real problem of humanity is the following: we have paleolithic emotions; medieval institutions; and god-like technology",
    "we are becoming the servants in thought, as in action, of the machine we have created to serve us",
    "the number one benefit of information technology is that it empowers people to do what they want to do. it lets people be creative. it lets people be productive",
    "the first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency",
    "the saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom",
    "technology is nothing. what's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them",
    "the scientist discovers a new type of material or energy and the engineer discovers a new use for it",
    "all of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness",
    "technology is just a tool. in terms of getting the kids working together and motivating them, the teacher is the most important",
    "the computer was born to solve problems that did not exist before",
    "i think that novels that leave out technology misrepresent life as badly as victorians misrepresented life by leaving out sex",
    "the human spirit must prevail over technology",
    "electronic calculators can solve problems which the man who made them cannot solve; but no government-subsidized commission of engineers and physicists could create a worm",
    "just because something doesn't do what you planned it to do doesn't mean it's useless"
];

export const TechnologicalInnovationThemeStatementTableName = "Technological Innovation theme statement";

export class TechnologicalInnovationThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = TechnologicalInnovationThemeStatementTableName;
        this.addEntriesFromList(technologicalInnovationThemeStatements);
    }
}