import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const testMessage = () => {
		const token = "deltaupsilonsms-3011-dev.twil.io/sms-token";
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p onClick={() => console.log("Hello World!")}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
