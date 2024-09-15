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
                 <td><input type="number" id="charmMod" max="3"/></td>   
                </tr>
                <tr>
                    <td>Cool</td>
                    {/* insert modal for Act Under Pressure and Help Out */}
                    <td><input type="number" name="coolMod" id="coolMod" max="3"/></td>
                </tr>
                <tr>
                    <td>Sharp</td>
                    {/* insert modal for Investigate a Mystery and Read a Bad Situation*/}
                    <td><input type="number" name="sharpMod" id="sharpMod" max="3"/></td>
                </tr>
                <tr>
                    <td>Tough</td>
                    {/* insert modal for Kick Some Ass */}
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