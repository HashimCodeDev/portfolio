import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TerminalContextProvider } from "react-terminal";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TerminalContextProvider>
			<App />
		</TerminalContextProvider>
	</React.StrictMode>
);
