import React from "react";
import styles from './Persona.module.css'

export const Persona = () => {
    return (
        <section>
            {/* Left Side Player, Right Side Persona */}
            {/* Player name, Character name, Arcana */}
            {/* Player stats will be Charm, Academics, Athletics, Courage, Notice */}
            <table class="table">
                            <tr>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Mod</th>
                            </tr>
                            <tr>
                                <td>Charm</td>
                                <td>
                                    {/* <!-- When changed, updates the value of related Modifier --> */}
                                    <input name="Charm" type="number" value="10" id="charmScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="charmMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Academics</td>
                                <td>
                                    <input name="Academics" type="number" value="10" id="academicScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="academicMod"/>
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
                                <td>Courage</td>
                                <td>
                                    <input name="Courage" type="number" value="10" id="courageScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="courageMod"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Sense</td>
                                <td>
                                    <input name="Sense" type="number" value="10" id="senseScore"
                                        onchange="UpdateModifiers()"/>
                                </td>
                                <td>
                                    <input type="number" value="0" id="senseMod"/>
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
        </section>
    )
}