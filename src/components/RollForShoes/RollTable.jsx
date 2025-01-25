function RollTable() {
    const [rows, setRows] = useState([]); // Dynamic rows for user input

    const addRow = () => {
        setRows([...rows, { skill: '', level: '' }]);
    };

    const updateRow = (index, key, value) => {
        const updatedRows = [...rows];
        updatedRows[index][key] = value;
        setRows(updatedRows);
    };

    const rollDice = (level) => {
        const diceCount = parseInt(level, 10);
        if (isNaN(diceCount) || diceCount <= 0) {
            alert('Please enter a valid number for level.');
            return;
        }
        const rolls = Array.from({ length: diceCount }, () => Math.floor(Math.random() * 6) + 1);
        alert(`Rolled: ${rolls.join(', ')}`);
    };
}

export default RollTable;