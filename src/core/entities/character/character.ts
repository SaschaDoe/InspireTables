import {Entity} from "../entity";
import {Culture} from "../culture/culture";
import {Attributes} from "./attribute";
import {BigFive} from "./bigFive";
import {Voice} from "./voice";
import type {Illness} from "../status/illness";

export class Character extends Entity {
    name = "";
    race = "";
    culture: Culture = new Culture();
    gender: string = "";
    illnesses: Illness[] = [];
    byname: string = "";
    attributes: Attributes = new Attributes();
    //talents: Talent[] = [];
    age = "";
    alignment = "";
    advantage = "";
    device = "";
    curse = "";
    disadvantage = "";
    motivation = "";
    nobility = "";
    profession = "";
    bigFive = new BigFive();
    weight = "";
    height = "";
    secret = "";
    quote = "";
    voice = new Voice();
    recognition =  "";
    rpgDevice: string[] = [];
}