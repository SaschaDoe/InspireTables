import {Table} from "../../table";

const mentorshipThemeStatements = [
    "true wisdom lies not in knowing all the answers, but in knowing how to ask the right questions",
    "the greatest gift one can give is to ignite the spark of curiosity in another",
    "in teaching others, we often discover new depths within ourselves",
    "guidance is not about creating a carbon copy, but nurturing unique potential",
    "the most profound lessons are often taught through example, not words",
    "to light a path for others is to illuminate our own journey",
    "in sharing knowledge, we create a legacy that outlives us",
    "true growth happens when experience meets open-mindedness",
    "the best teachers are also lifelong students",
    "empowering others to find their own solutions is the highest form of leadership",
    "wisdom shared is wisdom multiplied",
    "in nurturing the potential of others, we often unlock our own hidden capabilities",
    "the art of guidance lies in knowing when to lead and when to step aside",
    "true learning is a two-way street, benefiting both the guide and the guided",
    "the most valuable lessons often come from those who've walked the path before us",
    "tell me and i forget, teach me and i may remember, involve me and i learn",
    "the delicate balance of mentoring someone is not creating them in your own image, but giving them the opportunity to create themselves",
    "if i have seen further, it is by standing on the shoulders of giants",
    "in learning you will teach, and in teaching you will learn",
    "the mind is not a vessel to be filled, but a fire to be kindled",
    "i am not a teacher, but an awakener",
    "education is not the filling of a pail, but the lighting of a fire",
    "the mediocre teacher tells. the good teacher explains. the superior teacher demonstrates. the great teacher inspires",
    "the best teacher is not the one who knows most but the one who is most capable of reducing knowledge to that simple compound of the obvious and wonderful",
    "i never teach my pupils, i only attempt to provide the conditions in which they can learn",
    "the function of education is to teach one to think intensively and to think critically. intelligence plus character - that is the goal of true education",
    "the art of teaching is the art of assisting discovery",
    "a teacher affects eternity; he can never tell where his influence stops",
    "one looks back with appreciation to the brilliant teachers, but with gratitude to those who touched our human feelings",
    "the task of the modern educator is not to cut down jungles, but to irrigate deserts",
    "you cannot teach a man anything; you can only help him find it within himself",
    "the whole art of teaching is only the art of awakening the natural curiosity of young minds for the purpose of satisfying it afterwards",
    "the secret in education lies in respecting the student",
    "it is the supreme art of the teacher to awaken joy in creative expression and knowledge",
    "the authority of those who teach is often an obstacle to those who want to learn",
    "true teachers are those who use themselves as bridges over which they invite their students to cross; then, having facilitated their crossing, joyfully collapse, encouraging them to create their own",
    "the greatest sign of success for a teacher is to be able to say, 'the children are now working as if i did not exist'",
    "a good teacher can inspire hope, ignite the imagination, and instill a love of learning",
    "the influence of a good teacher can never be erased",
    "the dream begins with a teacher who believes in you, who tugs and pushes and leads you to the next plateau, sometimes poking you with a sharp stick called 'truth'"
];

export const MentorshipThemeStatementTableName = "Mentorship theme statement";

export class MentorshipThemeStatementTable extends Table {
    constructor() {
        super();
        this.title = MentorshipThemeStatementTableName;
        this.addEntriesFromList(mentorshipThemeStatements);
    }
}