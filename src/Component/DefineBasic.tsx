import React from "react";

interface DefineNumbers {
    a: number;
    b: number;
}

const TypeScriptFunctions: React.FC<DefineNumbers> = ({ a, b }) => {
    const add = a + b;
    const greeting: string = "Hi Typescript! This is my first time using it!";
    const numberList: number [] = [5, 10, 15];

    console.log("Numbers:", numberList);

    return(
        <div>
        <p>{`${a} + ${b} is: ${add}.`}</p>
        <p>{greeting}</p>
        <p>Number List: {numberList.join(", ")}</p>
        </div>
    );
};

export default TypeScriptFunctions;