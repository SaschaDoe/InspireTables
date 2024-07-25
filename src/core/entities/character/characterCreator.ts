import {Creator} from "../creator";
import {Character} from "./character";
import {GenderTable} from "../../tables/other/GenderTable";
import {IllnessCreator} from "../status/illnessCreator";
import {characterStore} from "../persist/stores";

export class CharacterCreator extends Creator {

    hasIllness: boolean = false;

        create(){
            let character = new Character();
            character.gender = new GenderTable().withDice(this.dice).roll().combinedString;
            this.setIllness(character);

            return [character, ...character.illnesses];
        }

    private setIllness(character: Character) {
        if (!this.hasIllness) {
            this.hasIllness = this.dice.getRandom() > 0.9;
        }
        if (this.hasIllness) {
            character.illnesses.push(new IllnessCreator().create()[0]);
        }
    }

    async persist(character : Character ): Promise < void > {
            console.log("persist: ", character);
            try {
                await characterStore.saveEntity(character);
                console.log(`Character with id ${character.id} saved successfully.`);
            } catch(error) {
                console.error(`Failed to save character with id ${character.id}:`, error);
                throw error;
            }
        }

        /*
        character.race = new RaceTable().withDice(this.dice).roll().combinedString;
        character.age = new AgeTable().withDice(this.dice).roll().combinedString;
        let hasNewCulture = this.dice.random() > 0.9;
        if(hasNewCulture){
            character.culture = new CultureCreator().withDice(this.dice).createWithPersistence();
        }else{
            character.culture = new CultureCreator().withDice(this.dice).chooseExisting();
        }
        character.culture = new CultureCreator().withDice(this.dice).create();
        character.alignment = new AlignmentTable().withDice(this.dice).roll().combinedString;
        character.device = new CharacterAsDeviceTable().withDice(this.dice).roll().combinedString;

        this.addRpgDevice(character);

        let hasCurse = this.dice.random() > 0.9;
        if(hasCurse){
            character.curse = new CurseTable().withDice(this.dice).roll().combinedString;
        }
        let hasDisadvantage = this.dice.random() > 0.5;
        if(hasDisadvantage){
            character.disadvantage = new DisadvantageTable().withDice(this.dice).roll().combinedString;
        }
        character.motivation = new MotivationTable().withDice(this.dice).roll().combinedString;
        character.nobility = new NobilityTable().withDice(this.dice).roll().combinedString;
        let hasAdvantage = this.dice.random() > 0.5;
        if(hasAdvantage){
            character.advantage = new AdvantageTable().withDice(this.dice).roll().combinedString;
        }
        let nameTable = CultureToNameList[character.culture.derivations[0]];
        let genderedNameTable;
        if(character.gender === "female"){
            genderedNameTable = nameTable[0];
        }else{
            genderedNameTable = nameTable[1];
        }

        character.name = genderedNameTable.withDice(this.dice).roll().combinedString;
        let hasByname = this.dice.random() > 0.5;
        if(hasByname){
            character.byname = new BynameTable().withDice(this.dice).roll().combinedString;
        }
        if(this.isAlliteration){
            let namesWithNumberOfSameStartingLetters = [];
            for(let i = 0; i < 100; i++) {
                let numberOfSameStartingLetters = StartingLetterCounter.Count(character);
                namesWithNumberOfSameStartingLetters.push({name: character.name, byName: character.byname, numberOfSameStartingLetters: numberOfSameStartingLetters});
                character.name = genderedNameTable.withDice(this.dice).roll().combinedString;
                if(hasByname){
                    character.byname = new BynameTable().withDice(this.dice).roll().combinedString;
                }
            }
            console.log("name list: ", namesWithNumberOfSameStartingLetters);
            let max = namesWithNumberOfSameStartingLetters.reduce((prev, current) => {
                return (prev.numberOfSameStartingLetters > current.numberOfSameStartingLetters) ? prev : current
            })
            console.log("max: ", max)

            character.name = max.name;
            if(hasByname){
                character.byname = max.byName;
            }
        }
        character.weight = new SizeTable().withDice(this.dice).roll().combinedString;
        character.height = new SizeTable().withDice(this.dice).roll().combinedString;
        character.secret = new CharacterSecretTable().withDice(this.dice).roll().combinedString;
        character.quote = new CharacterQuoteTable().withDice(this.dice).roll().combinedString;
        character.recognition = new CharacterRecognitionTable().withDice(this.dice).roll().combinedString;
        this.setBigFive(character);
        this.setAttributes(character);
        this.setTalents(character);
        this.setVoice(character);

        console.log(character);
        return character;
    }

    private setTalents(character: Character) {
        let isMagicalUser = this.dice.random() > 0.8;
        if(isMagicalUser){
            character.profession = new MagicalProfessionTable().withDice(this.dice).roll().combinedString;
        }else{
            character.profession = new ProfaneProfessionTable().withDice(this.dice).roll().combinedString;
        }
        this.dice.withSides(3);
        let numberOfTalents = this.dice.roll();
        for (let i = 0; i < numberOfTalents; i++) {
            character.talents.push(new TalentCreator().create(!isMagicalUser));
        }
        console.log(character);
    }

    private setAttributes(character: Character) {
        this.dice.withSides(6);
        character.attributes.willpower = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.strength = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.constitution = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.dexterity = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.agility = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.intelligence = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.charisma = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.attributes.intuition = this.dice.roll() + this.dice.roll() + this.dice.roll();
    }

    withAlliteration() {
        this.isAlliteration = true;
        return this;
    }


    private setBigFive(character: Character) {
        this.dice.withSides(6);
        character.bigFive.conscientiousness = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.bigFive.agreeableness = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.bigFive.neuroticism = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.bigFive.openness = this.dice.roll() + this.dice.roll() + this.dice.roll();
        character.bigFive.extraversion = this.dice.roll() + this.dice.roll() + this.dice.roll();
    }

    createWithPersistence(){
        let character = this.create();
        characterStore.update(characters => {
            characters.push(character);
            return characters;
        })
        return character;
    }

    private setVoice(character: Character) {
        character.voice.tonality = new TonalityTable().withDice(this.dice).roll().combinedString;
        character.voice.speed = new SpeedTable().withDice(this.dice).roll().combinedString;
        character.voice.volume = new VolumeTable().withDice(this.dice).roll().combinedString;
        character.voice.smokiness = new VoiceSmokinessTable().withDice(this.dice).roll().combinedString;
        character.voice.articulation = new ArticulationTable().withDice(this.dice).roll().combinedString;
        character.voice.nonVerbalQuirks = new NonverbalQuirksTable().withDice(this.dice).roll().combinedString;
        character.voice.verbalQuirks = new VerbalQuirksTable().withDice(this.dice).roll().combinedString;
    }

    private addRpgDevice(character: Character) {
        let numberOfRpgDevices = this.dice.withSides(6).roll();
        const addedDevices = new Set();

        for (let i = 0; i < numberOfRpgDevices; i++) {
            // Create a new device
            const newDevice = new CharacterRpgDeviceTable().withDice(this.dice).roll().combinedString;

            // Check if the device is not already in the set
            if (!addedDevices.has(newDevice)) {
                // Add the device to the set and to the character's rpgDevice array
                addedDevices.add(newDevice);
                character.rpgDevice.push(newDevice);
            }
        }
        */


}