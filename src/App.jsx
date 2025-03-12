import TerminalPortfolio from "./components/TerminalPortfolio";
import Matrix from "./components/Matrix";

export default function App() {
	return (
		<div className="container">
			<h1 className="header">HASHIM.TERMINAL</h1>
			<Matrix />
			<TerminalPortfolio />
		</div>
	);
}
