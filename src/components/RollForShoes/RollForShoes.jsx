import React from "react";
import styles from './RollForShoes.module.css'

export const RollForShoes = () => {
    return (
        <section>
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
                    <td><button id="shoesRoll">Roll</button></td>
                </tr>
                </tbody>
            </table>
            {/* Create skill and level */}
            {/* Create button to add additional roll. */}
            {/* Roll button that shows the result of the number of d6s matching the skill level */}
        </section>
    )
}