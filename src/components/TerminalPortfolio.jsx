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
		projects: "Check out my GitHub: https://github.com/hashim-javaDev",
		help: "Available commands: whoami, projects, help",
	};

	return (
		<div className="terminal-container">
			<div className="terminal">
				<TerminalWrapper>
					<ReactTerminal
						className="react-terminal"
						showControlBar={false}
						prompt="hashim@portfolio:~$"
						commands={commands}
						// themes={{
						// 	"my-custom-theme": {
						// 		themeBGColor: "#272B36",
						// 		themeToolbarColor: "#DBDBDB",
						// 		themeColor: "#FFFEFC",
						// 		themePromptColor: "#a917a8",
						// 	},
						// }}
						theme="material-dark"
					/>
				</TerminalWrapper>
			</div>
		</div>
	);
};

export default TerminalPortfolio;
