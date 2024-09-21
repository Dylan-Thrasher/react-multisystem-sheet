import React from "react";
import styles from './Persona.module.css'

export const Persona = () => {
    return (
        <section>
            {/* Left Side Player, Right Side Persona */}
            {/* Player name, Character name, Arcana */}
            {/* Player stats will be Expression, Knowledge, Athletics, Willpower, Proficiency */}
            <table class="table">
                            <tr>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Mod</th>
                            </tr>
                            <tr>
                                <td>Expression</td>
                                <td>
                                    {/* <!-- When changed, updates the value of related Modifier --> */}
                                    <input name="Expression" type="number" value="10" id="expressionScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="expressionMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Knowledge</td>
                                <td>
                                    <input name="Knowledge" type="number" value="10" id="knowledgeScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="knowledgeMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Athletics</td>
                                <td>
                                    <input name="Athletics" type="number" value="10" id="athleticScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="athleticMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Willpower</td>
                                <td>
                                    <input name="Willpower" type="number" value="10" id="willpowerScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="willpowerMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Proficiency</td>
                                <td>
                                    <input name="Proficiency" type="number" value="10" id="proficiencyScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="proficiencyMod"/>
                                </td>
                            </tr>
                        </table>
            {/* Persona stats will be Strength, Magic, Defense, Vitality, Agility */}
            <table class="table">
                            <tr>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Mod</th>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td>
                                    {/* <!-- When changed, updates the value of related Modifier --> */}
                                    <input name="Strength" type="number" value="10" id="strengthScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="strengthMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Magic</td>
                                <td>
                                    <input name="Magic" type="number" value="10" id="magicScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="magicMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>
                                    <input name="Defense" type="number" value="10" id="defenseScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="defenseMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Agility</td>
                                <td>
                                    <input name="Agility" type="number" value="10" id="agilityScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="agilityMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Vitality</td>
                                <td>
                                    <input name="Vitality" type="number" value="10" id="vitalityScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="vitalityMod"/>
                                </td>
                            </tr>
                        </table>
            {/* Insert for Accessing Tarot images and their descriptions. */}
            {/* List of social links and ranks up to 10 */}
            {/* Text box for saving various benefits. */}
            <textarea name="PlayerNotes" id="playerNotes"></textarea>
        </section>
    )
}