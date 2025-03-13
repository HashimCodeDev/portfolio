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
		skills: (
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
		help: (
			<span>
				Available commands:
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
