import React from "react";

const colorList: string[] = ["pink", "lilac", "sage green", "black", "red"];

const ColorList: React.FC = () => {
    console.log("Favorite colors:", colorList);
    return (
        <p>Colors: {colorList.join(", ")}</p>
    );
};

export default ColorList;