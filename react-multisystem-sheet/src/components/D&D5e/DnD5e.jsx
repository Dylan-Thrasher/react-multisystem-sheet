import React from "react";
import styles from './DnD5e.module.css'

export const DnD5e = () => {
    return (
    <div class="container">
        <form id="charSheet" name="characterSheet">
            <div class="row">
                <div class="col-4 text-center d-flex row align-content-around">
                    <section id="nameTagHere">
                        <h2>Player</h2>
                        <input name="PlayerName" id="playerSelect" onchange="LoadPlayer()" list="players" />
                        <datalist id="players"></datalist>
                        <h2>Character</h2>
                        <input name="CharacterName" id="characterSelect" onchange="LoadCharacter()" list="characters" />
                        <datalist id="characters"></datalist>
                        <h2>Level</h2>
                        <!-- level determines proficiency bonus through onchange -->
                        <input name="Level" type="number" id="playerLevel" min="1" max="20" value="1"
                            onchange="SetProficiencyBonus()">
                        <h2>Notes</h2>
                        <!-- <input id="playerNotes" name="PlayerNotes" type="text"> -->
                        <textarea name="PlayerNotes" id="playerNotes"></textarea>
                    </section>
                    <section>
                        <h2>Ability Scores</h2>
                        <br>
                        <table class="table">
                            <tr>
                                <th>Ability</th>
                                <th>Score</th>
                                <th>Mod</th>
                            </tr>
                            <tr>
                                <td>Strength</td>
                                <td>
                                    <!-- When changed, updates the value of related Modifier -->
                                    <input name="STR" type="number" value="10" id="strScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="strMod">
                                </td>
                            </tr>
                            <tr>
                                <td>Dexterity</td>
                                <td>
                                    <input name="DEX" type="number" value="10" id="dexScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="dexMod">
                                </td>
                            </tr>
                            <tr>
                                <td>Constitution</td>
                                <td>
                                    <input name="CON" type="number" value="10" id="conScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="conMod">
                                </td>
                            </tr>
                            <tr>
                                <td>Intelligence</td>
                                <td>
                                    <input name="INT" type="number" value="10" id="intScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="intMod">
                                </td>
                            </tr>
                            <tr>
                                <td>Wisdom</td>
                                <td>
                                    <input name="WIS" type="number" value="10" id="wisScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="wisMod">
                                </td>
                            </tr>
                            <tr>
                                <td>Charisma</td>
                                <td>
                                    <input name="CHA" type="number" value="10" id="chaScore"
                                        onchange="UpdateModifiers()">
                                </td>
                                <td>
                                    <input type="number" value="0" id="chaMod">
                                </td>
                            </tr>
                        </table>
                        <div class="text-center">
                            <div class="btn btn-success" onclick="SaveData()">Save Data</div>
                        </div>
                        <br>
                        <div class="text-center">
                            <div class="btn btn-info" onclick="LoadCharacter()">Load Data</div>
                        </div>
                    </section>
                </div>

                <div class="col-4 text-center d-flex row align-content-around justify-content-center mx-2">

                    <section id="heartHere" class="align-items-center">
                        <div class="center-me">
                            <h2>Hit Points</h2>
                            <span>HP: </span>
                            <input name="HP" class="stat" type="number" id="currentHP"> /
                            <input name="MaxHP" class="stat" type="number" id="maxHP">
                        </div>

                        <br>

                        <div class="center-me">
                            <span class="btn btn-danger" onclick="TakeDamage()">Damage</span>
                            <input type="number" class="stat" id="modHP" min="0" />
                            <span class="btn btn-success" onclick="HealHP()">Heal</span>
                        </div>

                        <br>

                        <div class="center-me">
                            <span>Hit Dice:</span>
                            <input name="HitDice" type="number" class="stat" id="hitDice" /> / <span
                                class="dice">d</span>
                            <select name="HitDie" id="hitDie">
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                                <option value="20">20</option>
                            </select>

                            <br><br>

                            <div class="btn btn-info" onclick="ShortRest()" id="shortRestBtn">Short Rest</div>
                            <div class="btn btn-success" onclick="LongRest()" id="longRestBtn">Long Rest</div>
                        </div>
                    </section>

                    <br>
                    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#diceRoller">
                        Roll Dice
                    </button>

                     <div class="modal fade" id="diceRoller" data-bs-backdrop="static" data-bs-keyboard="false" 
                        tabindex="-1" aria-labelledby="diceRollerLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Dice Roller</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div> -->
                                <div class="modal-body">
                                    <div class="container">
                                        <h1>Dice Roller</h1>
                                        <div class="controls">
                                            <span>Select Dice To Add:</span>
                                            <select id="dice-type">
                                                <option value="4">d4</option>
                                                <option value="6">d6</option>
                                                <option value="8">d8</option>
                                                <option value="10">d10</option>
                                                <option value="12">d12</option>
                                                <option value="20">d20</option>
                                                <option value="100">d100</option>
                                            </select>
                                            <br>
                                            <label for="modifier"> + Modifier:</label>
                                            <input type="number" id="modifier" value="0">
                                            <br>
                                            <button class="btn-success" id="add-dice">Add Dice</button>
                                            <button class="btn-danger" id="reset-dice">Reset Dice</button>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <div id="dice-list"></div>
                                        <div id="results"></div>
                                        <div id="total"></div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <!-- <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button> -->
                                    <button type="button" id="roll-dice" class="btn btn-primary">Roll</button>
                                </div>
                            <!-- </div>
                        </div>
                    </div> -->
                    <br>

                    <section id="shieldHere" class="justify-content-center">
                        <h2>Armor</h2>
                        <h6>Equipped Armor</h6>
                        <select name="Armor" id="equippedArmor" onchange="UpdateAC()">
                            <option value="unarmored">None</option>
                            <optgroup id="lightArmor" value="Light Armor" label="Light Armor">
                                <option value="padded">Padded</option>
                                <option value="leather">Leather</option>
                                <option value="studded">Studded Leather</option>
                            </optgroup>
                            <optgroup id="mediumArmor" value="Medium Armor" label="Medium Armor">
                                <option value="hide">Hide</option>
                                <option value="chain">Chain Shirt</option>
                                <option value="scale">Scale Mail</option>
                                <option value="breastplate">Breastplate</option>
                            </optgroup>
                            <optgroup id="heavyArmor" value="Heavy Armor" label="Heavy Armor">
                                <option value="ringmail">Ring Mail</option>
                                <option id="chainmailArmor" value="chainmail">Chain Mail</option>
                                <option id="splintArmor" value="splint">Splint</option>
                                <option id="plateArmor" value="plate">Plate</option>
                            </optgroup>
                        </select>

                        <br/><br/>
                        <h6>Equipped Shield:</h6>
                        <select name="Shield" id="equippedShield" onchange="UpdateAC()">
                            <option value="none">None</option>
                            <option value="shield">Shield</option>
                        </select>
                        <br><br>

                        <h6>AC:</h6>
                        <input type="number" id="armorClass" placeholder="0">
                    </section>
                </div>

                <div class="col-4 text-center d-flex row align-content-around" id="rightBox">
                    <section>
                    <h2>Proficiency Bonus</h2>

                    <br>

                    <input type="number" id="profBonus" value="2">
                    </section>
                    

                    <!-- <h2>Skills</h2> -->

                    <table class="table">
                        <thead>
                            <th scope="col">Proficient?</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Roll</th>
                        </thead>
                        <tr>
                            <td>
                                <input name="Acrobatics" type="checkbox" id="acroProf" onchange="SetSkills()">
                            </td>
                            <td>Acrobatics:</td>
                            <td>
                                <input type="number" id="acroScore">
                            </td>
                            <td>
                                <button class="roll-button" data-score-id="acroScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="AnimalHandling" type="checkbox" id="animProf" onchange="SetSkills()"></td>
                            <td>Animal Handling:</td>
                            <td><input type="number" id="animScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="animScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Arcana" type="checkbox" id="arcaProf" onchange="SetSkills()"></td>
                            <td>Arcana:</td>
                            <td><input type="number" id="arcaScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="arcaScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Athletics" type="checkbox" id="athlProf" onchange="SetSkills()"></td>
                            <td>Athetics:</td>
                            <td><input type="number" id="athlScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="athlScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Deception" type="checkbox" id="decProf" onchange="SetSkills()"></td>
                            <td>Deception:</td>
                            <td><input type="number" id="decScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="decScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="History" type="checkbox" id="hisProf" onchange="SetSkills()"></td>
                            <td>History:</td>
                            <td><input type="number" id="hisScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="hisScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Insight" type="checkbox" id="insProf" onchange="SetSkills()"></td>
                            <td>Insight:</td>
                            <td><input type="number" id="insScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="insScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Intimidation" type="checkbox" id="intiProf" onchange="SetSkills()"></td>
                            <td>Intimidation:</td>
                            <td><input type="number" id="intiScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="intiScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Investigation" type="checkbox" id="invProf" onchange="SetSkills()"></td>
                            <td>Investigation:</td>
                            <td><input type="number" id="invScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="invScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Medicine" type="checkbox" id="medProf" onchange="SetSkills()"></td>
                            <td>Medicine:</td>
                            <td><input type="number" id="medScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="medScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Nature" type="checkbox" id="natProf" onchange="SetSkills()"></td>
                            <td>Nature:</td>
                            <td><input type="number" id="natScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="natScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Perception" type="checkbox" id="percProf" onchange="SetSkills()"></td>
                            <td>Perception:</td>
                            <td><input type="number" id="percScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="percScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Performance" type="checkbox" id="perfProf" onchange="SetSkills()"></td>
                            <td>Performance:</td>
                            <td><input type="number" id="perfScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="perfScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Persuasion" type="checkbox" id="persProf" onchange="SetSkills()"></td>
                            <td>Persuasion:</td>
                            <td><input type="number" id="persScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="persScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Religion" type="checkbox" id="relProf" onchange="SetSkills()"></td>
                            <td>Religion:</td>
                            <td><input type="number" id="relScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="relScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="SleightOfHand" type="checkbox" id="sleiProf" onchange="SetSkills()"></td>
                            <td>Sleight of Hand:</td>
                            <td><input type="number" id="sleiScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="sleiScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Stealth" type="checkbox" id="steProf" onchange="SetSkills()"></td>
                            <td>Stealth:</td>
                            <td><input type="number" id="steScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="steScore">Roll</button>
                            </td>
                        </tr>
                        <tr>
                            <td><input name="Survival" type="checkbox" id="survProf" onchange="SetSkills()"></td>
                            <td>Survival:</td>
                            <td><input type="number" id="survScore"></td>
                            <td>
                                <button class="roll-button" data-score-id="survScore">Roll</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>
    </div>
    )
}