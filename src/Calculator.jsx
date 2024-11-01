import { useRef } from "react";

function Calculator() {
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const resultRef = useRef(null);

    const handleAction2 = (event) => {
        const operation = event.target.value; // Get the selected operation
        const n1 = parseFloat(num1Ref.current.value);
        const n2 = parseFloat(num2Ref.current.value);

        // Clear the result initially
        resultRef.current.value = "";

        // Define operations in an object
        const operations = {
            addition: () => n1 + n2,
            subtraction: () => n1 - n2,
            multiplication: () => n1 * n2,
            division: () => (n2 !== 0 ? n1 / n2 : "Cannot divide by zero")
        };

        // Perform the selected operation
        if (operation in operations) {
            resultRef.current.value = operations[operation]();
        }
    };

    return (
        <div>
            <h1>Calculations</h1>
            <label>Number 1:</label>
            <input type="number" ref={num1Ref} required /> &nbsp;

            <label>Number 2:</label>
            <input type="number" ref={num2Ref} required /> &nbsp;

            
            <select onChange={handleAction2}>
                <option value="">--Select an operation--</option>
                <option value="addition">Addition</option>
                <option value="subtraction">Subtraction</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
            </select><br />
         <label><b>Calculate :</b></label>
            <input type="text" ref={resultRef}  placeholder="result" readOnly /><br />
        </div>
    );
}

export default Calculator;