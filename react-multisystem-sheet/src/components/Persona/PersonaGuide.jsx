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
            {/* Possibility of Persona Forms being a perk such as flying, vehicle, humanoid */}
            {/* Resist vs Weakness for elements*/}
            {/* Charts for Dice used */}
            {/* Explanation of Critical Hit */}
            {/* Status Effect Descriptions */}
            {/* Explanation of status effect removing spells vs healing use */}
            {/* Social link descriptions */}
            {/* Level up planning */}
            {/* Combat round example */}
        </section>
    )
}