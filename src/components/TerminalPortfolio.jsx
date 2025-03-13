import React, { useState } from "react";
import { ReactTerminal } from "react-terminal";
import styled from "styled-components";
import "./TerminalPortfolio.css";

const TerminalWrapper = styled.div`
	height: 400px;
	overflow: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const projects = [
	{ name: "MisFit", url: "https://github.com/HashimCodeDev/MisFit" },
	{ name: "FYV - Find Your Vibe", url: "https://github.com/HashimCodeDev/FYV" },
	{ name: "Space Wars", url: "https://github.com/HashimCodeDev/Space-Wars" },
	{ name: "Blood Recon", url: "https://github.com/HashimCodeDev/Blood_recon" },
	{
		name: "Will You Marry Me?",
		url: "https://github.com/HashimCodeDev/Will-You-Marry-Me",
	},
	{ name: "Shinobu", url: "https://github.com/HashimCodeDev/Shinobu" },
	{ name: "Snake Game", url: "https://github.com/HashimCodeDev/SnakeGame" },
];

const linkStyle = {
	color: "cyan",
	textDecoration: "none",
	marginRight: "10px", // Adds spacing between links
};

const directories = ["Skills", "Projects"];

const Projects = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				gap: "10px",
			}}
		>
			{projects.map((project, index) => (
				<a
					key={index}
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					style={linkStyle}
				>
					{project.name}
				</a>
			))}
		</div>
	);
};

const Skills = () => {
	return (
		<span>
			🚀 Technical Skills:
			<br />
			- Java, Python, JavaScript
			<br />
			- React.js, Next.js, Tailwind CSS
			<br />
			- Express.js, Node.js, Spring Boot
			<br />
			- MySQL, PostgreSQL, Firebase
			<br />
			- Docker, AI/ML (Learning)
			<br />
			<br />
			🛠️ Soft Skills:
			<br />
			- Communication, Collaboration
			<br />
			- Critical Thinking, Problem-Solving
			<br />
		</span>
	);
};

const TerminalPortfolio = () => {
	//let promptMessage = "hashim@portfolio:~$";
	const [promptMessage, setPromptMessage] = useState("hashim@portfolio:~$");
	const commands = {
		whoami: (
			<span>
				👋 Hey! I'm Hashim Mohamed T.A.
				<br />
				🚀 Full-Stack Developer | Ethical Hacking Enthusiast
				<br />
				📍 B.Tech CSE Student @ Model Engineering College, Thrikkakara
				<br />
				🎯 Backend-Focused | Loves AI/ML & Problem Solving
			</span>
		),
		contact: (
			<span>
				Check out my LinkTree:{" "}
				<a
					href="https://bento.me/hashimmohamedta"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "cyan", textDecoration: "none" }}
				>
					Connect With Me
				</a>
			</span>
		),
		skills: <Skills />,
		projects: (
			<span>
				These are my projects:{" "}
				<a
					href="https://github.com/HashimCodeDev?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "cyan", textDecoration: "none" }}
				>
					Projects
				</a>
			</span>
		),
		help: (
			<span>
				Available commands:
				<br />
				- ls → List all files and directories
				<br />
				- whoami → Know about me
				<br />
				- contact → Connect with me
				<br />
				- projects → See my GitHub
				<br />
				- skills → Check my skills
				<br />
				- clear → Clear terminal
				<br />
			</span>
		),
		cd: (directory) => {
			if (directory === ".." && promptMessage === "hashim@portfolio:~$") {
				setPromptMessage(promptMessage);
			} else if (
				directory === ".." &&
				promptMessage !== "hashim@portfolio:~$"
			) {
				for (let i = promptMessage.length; i >= 0; i--) {
					if (promptMessage[i] === "/") {
						if (promptMessage[i - 1] === "~") {
							setPromptMessage((prev) => prev + "$");
						}
						break;
					}
					setPromptMessage((prev) => prev.slice(0, -1));
				}
			} else {
				if (directory in directories) {
					setPromptMessage((prev) => prev.slice(0, -1) + "/" + directory);
				} else {
					return <span>No Such Directory!</span>;
				}
			}
		},
		ls: (directory) => {
			switch (directory) {
				case "Projects":
					return <Projects />;
				case "":
					switch (promptMessage) {
						case "hashim@portfolio:~/Projects":
							return <Projects />;
						default:
							return (
								<>
									<span style={{ color: "cyan" }}>Projects </span>
									<a
										href="/resume.pdf"
										target="_blank"
										rel="noopener noreferrer"
										style={{ color: "red", textDecoration: "none" }}
									>
										Resume.pdf
									</a>
								</>
							);
					}
				default:
					return <span>No Such Directory!</span>;
			}
		},
	};

	return (
		<div className="terminal-container">
			<div className="terminal">
				<TerminalWrapper>
					<ReactTerminal
						className="react-terminal"
						showControlBar={false}
						prompt={promptMessage}
						welcomeMessage={
							<>
								<span>
									Hello! Welcome to my portfolio terminal.<br></br>
									<br></br>
									Type 'help' to see available commands.
									<br></br>
								</span>
							</>
						}
						commands={commands}
						theme="material-dark"
					/>
				</TerminalWrapper>
			</div>
		</div>
	);
};

export default TerminalPortfolio;
