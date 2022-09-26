import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
	const randomColor = getRandomColor();
	const [color, setColor] = useState(randomColor);
	const [childrenColor, setChildrenColor] = useState("#FFF");

	function handleChangeColor(newChildColor) {
		const newRandomColor = getRandomColor();
		setColor(newRandomColor);
		setChildrenColor(newChildColor);
	}

	return (
		<div className="parent" style={{ backgroundColor: color }}>
			<Child changeColor={childrenColor} onChangeColor={handleChangeColor} />
			<Child changeColor={childrenColor} onChangeColor={handleChangeColor} />
		</div>
	);
}

export default Parent;
