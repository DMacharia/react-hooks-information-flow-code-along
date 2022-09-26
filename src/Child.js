import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, changeColor }) {
	function handleClick() {
		const newColor = getRandomColor();
		onChangeColor(newColor);
	}
	return (
		<div
			onClick={handleClick}
			className="child"
			style={{ backgroundColor: changeColor }}
		/>
	);
}

export default Child;
