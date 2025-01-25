import React, {useState} from "react";
import styles from './RollForShoes.module.css'
import RollTable from "./RollTable";


    export const RollForShoes = () => {
        return (
            <section className={styles.rollRules}>
                <a href="https://rollforshoes.com/">Roll for Shoes official page</a>
                <ol>
                    <li>Say what you do and roll a number of D6s, determined by the level of relevant skill you have.</li>
                    <li>If the sum of your roll is higher than an opposing roll, the thing you wanted to happen, happens.</li>
                    <li>At start, you have only one skill: Do Anything 1.</li>
                    <li>If you roll all 6s, you get a new skill specific to the action, one level higher than the one you used.</li>
                    <li>For every roll you fail, you get 1 XP.</li>
                    <li>XP can be used to change a die into a 6 for advancement purposes only.</li>
                </ol>

                {/* Create skills section */}
                {/* Do Anything 1 */}
                <table>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                            <th>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Do Anything</td>
                            <td>1</td>
                            <td><button id="shoesRoll" onClick={() => rollDice(1)}>Roll</button></td>
                        </tr>
                        {/* Dynamic rows */}
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={row.skill}
                                        onChange={(e) => updateRow(index, 'skill', e.target.value)}
                                        placeholder="Enter skill"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={row.level}
                                        onChange={(e) => updateRow(index, 'level', e.target.value)}
                                        placeholder="Enter level"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => rollDice(row.level)}>Roll</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Create skill and level */}
                {/* Create button to add additional roll. */}
                {/* Roll button that shows the result of the number of d6s matching the skill level */}
            </section>
        )
}
export default RollForShoes;