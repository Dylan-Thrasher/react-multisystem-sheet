import React from "react";
import styles from './MotW.module.css'

export const MotW = () => {
    return (
        <section>
            <h2>Stats</h2>
            <table>
                <tr>
                    <th>Ability</th>
                    <th>Modifier</th>
                </tr>
                <tr>
                 <td>Charm</td>
                 {/* insert modal for Manipulate Someone */}
                 {/* Manipulate Someone requires you to give what you want them to do and why they should */}
                 <td><input type="number" id="charmMod" max="3"/></td>   
                </tr>
                <tr>
                    <td>Cool</td>
                    {/* insert modal for Act Under Pressure and Help Out */}
                    {/* Act Under Pressure is a reactionary roll, typically requested by Keeper */}
                    {/* Help Out is used to increase another player's roll by +1 */}
                    <td><input type="number" name="coolMod" id="coolMod" max="3"/></td>
                </tr>
                <tr>
                    <td>Sharp</td>
                    {/* insert modal for Investigate a Mystery and Read a Bad Situation*/}
                    {/* Investigate a Mystery is used to investigate when not in danger */}
                    {/* Read a Bad Situation is quick investigation in a dangerous situation */}
                    <td><input type="number" name="sharpMod" id="sharpMod" max="3"/></td>
                </tr>
                <tr>
                    <td>Tough</td>
                    {/* insert modal for Kick Some Ass and Protect Someone */}
                    {/* Kick Some Ass is a roll for fighting, resulting in both opponents trading their damage */}
                    {/* Protect Someone is used for taking damage that was intended for another */}
                    <td><input type="number" name="toughMod" id="toughMod" max="3" /></td>
                </tr>
                <tr>
                    <td>Weird</td>
                    {/* insert modal for Weird moves */}
                    <td><input type="number" name="weirdMod" id="weirdMod" max="3" /></td>
                </tr>
            </table>
        </section>
    )
}