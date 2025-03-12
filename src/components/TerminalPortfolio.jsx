import React from "react";
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

const TerminalPortfolio = () => {
	const commands = {
		whoami: "I am Hashim Mohamed, a Full-Stack Developer.",
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
		skills: (
			<span>
				🚀 Technical Skills: - Java, Python, JavaScript - React.js, Next.js,
				Tailwind CSS - Express.js, Node.js, Spring Boot - MySQL, PostgreSQL,
				Firebase - Docker, AI/ML (Learning)<br></br>
				<br></br> 🛠️ Soft Skills: - Communication, Collaboration - Critical
				Thinking, Problem-Solving
			</span>
		),
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
		help: "Available commands: whoami, projects, contact",
	};

	return (
		<div className="terminal-container">
			<div className="terminal">
				<TerminalWrapper>
					<ReactTerminal
						className="react-terminal"
						showControlBar={false}
						prompt="hashim@portfolio:~$"
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
