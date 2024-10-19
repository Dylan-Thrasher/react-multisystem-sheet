import React from "react";
import styles from './Persona.module.css'

export const Persona = () => {
    return (
        <section>
            {/* Descriptions of stats*/}
            <h3>Stats</h3>
            <h4>Persona Stats</h4>
            <ul>
            <li>Strength: Determines the damage of Physical attacks.</li>
            <li>Magic: Determines the result of Magic spells for damage and healing.</li>
            <li>Defense: Determines the amount of Damage Reduction. 3 damage per point</li>
            <li>Vitality: Increases health by 20 per point.</li>
            <li>Agility: Determines your order in combat, along with dodge chance.
                When an opponent rolls your Agility or lower when making an attack, you dodge.
            </li>
            </ul>
            <h4>Human Stats</h4>
            <ul>
                <li>Expression: Having your intent show through your face and body language in a believable manner. 
                    This also allows you to read the expressions of others accurately if successful.</li>
                <li>Knowledge: Your character’s collection of information on a wide variety of subjects. 
                    From book smarts to street smarts, if it requires specific information, it falls under this.</li>
                <li>Athletics: How well you can use and control your body, along with general health. 
                    If a fight breaks out in the real world, this will be used similarly to Strength for the Persona.</li>
                <li>Willpower: The ability to press on towards a goal and resist opposition/distraction. 
                    This can be helpful in resisting certain mental-based magic as well.</li>
                <li>Proficiency: The level of ability that a player has in applications that require specific trained skills. 
                    This can range from things like picking a lock to auto-repair.</li>
            </ul>
            {/* Possibility of Persona Forms being a perk such as flying, vehicle, humanoid */}
            <p>Forms can provide different perks for your Persona. The perk changes based on which form you select.
                <ul>
                    <li>Humanoid: Capable of helping with interacting with the environment on your behalf as another person.</li>
                    <li>Beast: Able to move through the environment in a manner similarly to their animal. Often can be ridden.</li>
                    <li>Vehicle: Can be used to transport people across long distances rapidly.</li>
                </ul>
            </p>
            {/* Resist vs Weakness for elements*/}
            <h4>Weaknesses and Resistances</h4>
            <p>Weaknesses and Resistances are a specific damage type that has a different effect on a target than usual.
                If a target is hit with a damage type they are weak to, it will do 1.5x damage. 
                If a target is hit with a damage type they are Resistant to, the damage will be reduced by half.
            </p>
            {/* Charts for Dice used */}
            {/* Equipment */}
            {/* Explanation of Critical Hits and misses */}
            <h4>Critical Hits</h4>
            <p>When attacking, roll a d20. On a physical attack, if the d20 lands on 20, you score a critical hit. This multiplies the damage by 1.5 times and knocks the target down.
                If the result is not higher than the target's Agility score, the attack misses.
            </p>
            {/* Status Effect Descriptions */}
            {/* All Out Attacks */}
            <h4>All Out Attacks</h4>
            <p>The All Out Attack can be used when all opponents are downed due to being hit by their weaknesses or critical hits.
                The total of the All Out Attack is the total of every participant's weapon. Players who are downed cannot participate in an All Out Attack.
                An All Out Attack completely ignores Defense and Resistances. 
            </p>
            {/* Explanation of status effect removing spells vs healing use */}
            {/* Social link descriptions */}
            <h4>Social Links</h4>
            <p>Upon getting close to key characters, including other party members, you'll unlock social links.
                When you reach important stages in your interpersonal relationships, this is represented by Social Link ranks.
                You can gain various benefits from ranks in social links. NPC social links can provide access to new items or features.
                When you increase ranks with other PCs, it can give you new abilities in battle.
            </p>
            {/* Level up planning: Stat points and Skill points */}
            {/* Combat round example */}
            {/* Combat explanation outside of Shadow World */}
            {/* Achievements and Rumors */}
        </section>
    )
}