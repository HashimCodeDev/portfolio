import React, { useEffect, useRef } from "react";

const Matrix = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		// Set up the canvas dimensions
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Setting up the letters for the Matrix effect
		const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");

		const fontSize = 10;
		const columns = Math.floor(canvas.width / fontSize); // Ensure it's an integer
		const drops = Array(columns).fill(1); // Initialize drops array with valid length

		// Function to draw the Matrix effect
		const draw = () => {
			ctx.fillStyle = "rgba(0, 0, 0, .1)";
			ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas

			for (let i = 0; i < drops.length; i++) {
				const text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = "#42a5f5"; // Matrix green
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				drops[i]++;

				// Reset drop when it reaches the bottom of the canvas
				if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
					drops[i] = 0;
				}
			}
		};

		// Set interval to animate the effect
		const intervalId = setInterval(draw, 33);

		// Cleanup the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, []);

	return <canvas ref={canvasRef} />;
};

export default Matrix;
