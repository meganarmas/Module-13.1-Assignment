import React from "react";

function filterNumbers(numbers: number[]): number []{
    return numbers.filter(num => num % 2 === 0);
}
    const EvenNumbersList: React.FC = () => {
        const nums = [4, 8, 15, 16, 23, 42];
        const evenNumbers = filterNumbers(nums);

        return(
            <div>
                <p>Even Numbers:</p>
                    {evenNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </div>
        );
    };

export default EvenNumbersList