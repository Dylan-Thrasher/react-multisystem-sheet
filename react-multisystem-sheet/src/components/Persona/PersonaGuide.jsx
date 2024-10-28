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
            <h4>Dice Progression</h4>
            <p>This system uses the Step Dice style of dice progression. With each point placed in a stat that affects damage, you use the dice below. </p>
            {/* Equipment */}
            <h4>Equipment</h4>
            <p>Your character has 3 equipment slots
                <ul>
                    <li>Weapon: This is the base damage and type your character does without using their Persona.</li>
                    <li>Outfit: This provides a variety of effects, typically a stat boost.</li>
                    <li>Accessory: This can typically provide abilities that can range from general stat boost to very specific circumstances like auto-revive with 1 HP.</li>
                </ul>
            </p>
            {/* Explanation of Critical Hits and misses */}
            <h4>Critical Hits</h4>
            <p>When attacking, roll a d20. On a physical attack, if the d20 lands on 20, you score a critical hit. This multiplies the damage by 1.5 times and knocks the target down.
                If the result is not higher than the target's Agility score, the attack misses.
            </p>
            {/* Status Effect Descriptions */}
            <h4>Status Effects</h4>
            <ul>
                <li>Freeze: Unable to move, physical resistance is now neutral, physical attacks against frozen target auto-crit. Freeze breaks upon being attacked.</li>
                <li>Burn: Lose 10% of max HP every turn.</li>
                <li>Shock: Unable to move.</li>
                <li>Panic: Roll 1d4, results determine what you do. 1- Attack an ally, 2- Move to another position, 3- Do nothing, 4- Take turn as normal</li>
                <li>Sleep: Cannot act, defense goes down. Being attacked wakes target.</li>
                <li>Silence: Players cannot use their Persona, Shadows cannot use Spells.</li>
                <li>Poison: Attack halved after damage results are determined, loses 1/6 HP per turn.</li>
            </ul>
            {/* All Out Attacks */}
            <h4>All Out Attacks</h4>
            <p>The All Out Attack can be used when all opponents are downed due to being hit by their weaknesses or critical hits.
                The total of the All Out Attack is the total of every participant's weapon. Players who are downed cannot participate in an All Out Attack.
                An All Out Attack completely ignores Defense and Resistances. 
            </p>
            {/* Explanation of status effect removing spells vs healing use */}
            <h4>Healing and Curing</h4>
            <p>Healing spells provide a health recovery based on the tier of spell and magic dice. The recovery can only go as high as up to full.
                Status Effect cure spells can cure status effects if the related spell is used. Depending on the skill, it may be for one or multiple targets.
            </p>
            {/* Social link descriptions */}
            <h4>Social Links</h4>
            <p>Upon getting close to key characters, including other party members, you'll unlock social links.
                When you reach important stages in your interpersonal relationships, this is represented by Social Link ranks.
                You can gain various benefits from ranks in social links. NPC social links can provide access to new items or features.
                When you increase ranks with other PCs, it can give you new abilities in battle.
            </p>
            {/* Level up planning: Stat points and Skill points */}
            {/* Combat round example */}
            <h4>Combat Round Example</h4>
            <p>Jack is fighting an Ice Shadow. His Persona, Prometheus, has the lowest tier fire spell Agi. Jack is up first and decides to hit the Shadow with Agi, rolling a d20. 
                The Shadow’s Agility is 2, while Jack rolled a 3, so Jack’s attack hits. 
                Jack has a Magic stat of 3, so he rolls a d4 and d6 and takes the higher result to add to the spell’s base damage. 
                He rolls a 3 and a 5, taking the higher 5 and adding it to the spell’s 10 base damage for a 15 total. 
                The opponent is weak to fire, increasing the damage by x1.5 (rounded up) for a total of 23 damage. 
                The frost shadow has 1 in Defense, reducing the damage taken to 20. Since the Shadow only had a 1 in Vitality, making its HP 20, the Shadow is defeated! 
            </p>
            {/* Combat explanation outside of Shadow World */}
            <h4>Human world combat</h4>
            <p>In the human world, your Persona cannot be summoned and you do not have the benefits of its aura protecting you.
                Due to this, your HP is dropped to 1/4 of its value (5 HP per point in Vitality instead of 20) and none of the Persona skills or resistances can be used.
                Athletics is used instead of Strength as well in this state. 
            </p>
            {/* Achievements and Rumors */}
            <h4>Achievements and Rumors</h4>
            <p>Players can end up with achievements and rumors based on the actions of the players or their characters.
                These can provide various small in-game benefits such as a bonus in specific circumstances, based on the achievement.
            </p>
        </section>
    )
}