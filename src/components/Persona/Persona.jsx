import React, { useState } from "react";
import styles from './Persona.module.css'

export const Persona = () => {

// Function to determine dice type based on score
const getDiceType = (score) => {
    if (score <= 2) return "D4";
    if (score <= 4) return "D6";
    if (score <= 6) return "D8";
    if (score <= 8) return "D10";
    return "D12";
};

// State to store player and persona stats
const [playerStats, setPlayerStats] = useState({
    Expression: 1,
    Knowledge: 1,
    Athletics: 1,
    Willpower: 1,
    Proficiency: 1,
});

const [personaStats, setPersonaStats] = useState({
    Strength: 1,
    Magic: 1,
    Defense: 1,
    Agility: 1,
    Vitality: 1,
});

// Handle changes to input fields and update the appropriate state
const handleStatChange = (statType, ability, value) => {
    const score = Math.max(1, Math.min(10, parseInt(value, 10) || 1)); // Clamping values between 1 and 10
    if (statType === "player") {
        setPlayerStats((prev) => ({
            ...prev,
            [ability]: score,
        }));
    } else if (statType === "persona") {
        setPersonaStats((prev) => ({
            ...prev,
            [ability]: score,
        }));
    }
};

// Helper to render a table for stats
const renderStatTable = (statType, stats) => (
    <table className="table">
        <thead>
            <tr>
                <th>Ability</th>
                <th>Score</th>
                <th>Dice</th>
                <th>Roll</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(stats).map((ability) => (
                <tr key={ability}>
                    <td>{ability}</td>
                    <td>
                        <input
                            name={ability}
                            type="number"
                            value={stats[ability]}
                            min="1"
                            max="10"
                            onChange={(e) =>
                                handleStatChange(statType, ability, e.target.value)
                            }
                        />
                    </td>
                    <td>{getDiceType(stats[ability])}</td>
                    <td>
                        <button onClick={() => alert(`Rolling a ${getDiceType(stats[ability])}`)}>
                            Roll
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);


    return (
        <section className="personaSheet">
            {/* Left Side Player, Right Side Persona */}
            {/* Player name, Character name, Arcana */}
            {/* Player stats will be Expression, Knowledge, Athletics, Willpower, Proficiency */}
            <form id="personaCharacterSheet">
            <h2>Player</h2>
            <input name="personaPlayer" type="text" list="personaPlayers"/>
            <datalist id="personaPlayers"></datalist>
            <h2>Character</h2>
            <input name="personaCharacter" type="text" list="personaCharacters"/>
            <datalist id="Characters"></datalist>
            <section id="characterThird">
            <h2>Player Stats</h2>
            <input type="text" name="playerName" />
            <label htmlFor="playerName">Player Name:</label>
            {/* Input for character level */}
            {/* Renders table for player stats, to test. */}
            {/* {renderStatTable("player", playerStats)} */}

            <table class="table">
                            <tr>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Dice</th>
                            </tr>
                            <tr>
                                <td>Expression</td>
                                <td>
                                    {/* <!-- When changed, updates the value of related Modifier --> */}
                                    <input name="Expression" type="number" value="1" min="1" max="10" id="expressionScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                {/* Show dice that would be used. */}
                                </td>
                            </tr>
                            <tr>
                                <td>Knowledge</td>
                                <td>
                                    <input name="Knowledge" type="number" value="1" min="1" max="10" id="knowledgeScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Athletics</td>
                                <td>
                                    <input name="Athletics" type="number" value="1" min="1" max="10" id="athleticScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Willpower</td>
                                <td>
                                    <input name="Willpower" type="number" value="1" min="1" max="10" id="willpowerScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Proficiency</td>
                                <td>
                                    <input name="Proficiency" type="number" value="1" min="1" max="10" id="proficiencyScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                        </table>
            {/* Persona stats will be Strength, Magic, Defense, Vitality, Agility */}
            <h2>Persona Stats</h2>
            <input type="text" name="personaName" />
            <label htmlFor="personaName">Persona Name</label>
            {/* Input for Persona Level */}
            {/* Renders stats for Persona, to test */}
            {/* {renderStatTable("persona", personaStats)} */}
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
                                    <input name="Strength" type="number" value="1" min="1" max="10" id="strengthScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                    <button>Roll</button>
                                    {/* Show dice that would be used. */}
                                </td>
                            </tr>
                            <tr>
                                <td>Magic</td>
                                <td>
                                    <input name="Magic" type="number" value="1" min="1" max="10" id="magicScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>
                                    <input name="Defense" type="number" value="1" min="1" max="10" id="defenseScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Agility</td>
                                <td>
                                    <input name="Agility" type="number" value="1" min="1" max="10" id="agilityScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Vitality</td>
                                <td>
                                    <input name="Vitality" type="number" value="1" min="1" max="10" id="vitalityScore"
                                        onchange="UpdateDice()"/>
                                </td>
                                <td>
                                <button>Roll</button>
                                </td>
                            </tr>
                        </table>
                        {/* Text Area labeled for Light spells */}
                        {/* Text area for Medium spells */}
                        {/* Text area for Heavy spells */}
                        {/* Text area for Severe spells */}
                        </section>
            {/* Insert API for Accessing Tarot images and their descriptions. */}
            {/* API potential choices: tarotapi.dev Horostori in rapidAPI https://github.com/krates98/tarotcardapi https://github.com/ekelen/tarot-api */}
            <section id="tarotThird">
            <h2>Tarot Deck</h2>
            {/* Tarot card image */}
            {/* Tarot name and description */}
            {/* Search bar to autofill with the available cards */}
            {/* Buttons for navigating between cards and randomizer button */}
            <button>←</button> <button>Random</button> <button>→</button>
            </section>
            {/* List of social links and ranks up to 10 */}
            <section id="socialThird">
            <h2>Social Links</h2>
            <form class="arcana checklist">
                <input type="number" name="fool" id="fool" value="0" min="0" max="10"/>
                <label htmlFor="fool">The Fool</label>
                <input type="number" name="magician" id="magician" value="0" min="0" max="10"/>
                <label htmlFor="magician">The Magician</label>
                <input type="number" name="highPriestess" id="highPriestess" value="0" min="0" max="10"/>
                <label htmlFor="highPriestess">The High Priestess</label>
                <input type="number" name="empress" id="empress" value="0" min="0" max="10"/>
                <label htmlFor="empress">The Empress</label>
                <input type="number" name="emperor" id="emperor" value="0" min="0" max="10"/>
                <label htmlFor="emperor">The Emperor</label>
                <input type="number" name="hierophant" id="hierophant" value="0" min="0" max="10"/>
                <label htmlFor="hierophant">The Hierophant</label>
                <input type="number" name="lovers" id="lovers" value="0" min="0" max="10"/>
                <label htmlFor="lovers">The Lovers</label>
                <input type="number" name="chariot" id="chariot" value="0" min="0" max="10"/>
                <label htmlFor="chariot">The Chariot</label>
                <input type="number" name="justice" id="justice" value="0" min="0" max="10"/>
                <label htmlFor="justice">The Justice</label>
                <input type="number" name="hermit" id="hermit" value="0" min="0" max="10"/>
                <label htmlFor="hermit">The Hermit</label>
                <input type="number" name="fortune" id="fortune" value="0" min="0" max="10"/>
                <label htmlFor="fortune">The Wheel of Fortune</label>
                <input type="number" name="strength" id="strength" value="0" min="0" max="10"/>
                <label htmlFor="strength">The Strength</label>
                <input type="number" name="hangedMan" id="hangedMan" value="0" min="0" max="10"/>
                <label htmlFor="hangedMan">The Hanged Man</label>
                <input type="number" name="death" id="death" value="0" min="0" max="10"/>
                <label htmlFor="death">The Death</label>
                <input type="number" name="temperance" id="temperance" value="0" min="0" max="10"/>
                <label htmlFor="temperance">The Temperance</label>
                <input type="number" name="tower" id="tower" value="0" min="0" max="10"/>
                <label htmlFor="tower">The Tower</label>
                <input type="number" name="star" id="star" value="0" min="0" max="10"/>
                <label htmlFor="star">The Star</label>
                <input type="number" name="moon" id="moon" value="0" min="0" max="10"/>
                <label htmlFor="moon">The Moon</label>
                <input type="number" name="sun" id="sun" value="0" min="0" max="10"/>
                <label htmlFor="sun">The Sun</label>
                <input type="number" name="judgement" id="judgement" value="0" min="0" max="10"/>
                <label htmlFor="judgement">The Judgement</label>
                <input type="number" name="world" id="world" value="0" min="0" max="10"/>
                <label htmlFor="world">The World</label>
            </form>
            {/* Text box for saving various benefits. */}
            <textarea name="PlayerNotes" id="playerNotes" placeholder="Enter notes here"></textarea>
            </section>
            </form>
        </section>
    )
}