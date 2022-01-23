import { useEffect } from "react";
import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const tokenUrl =
		"http://deltaupsilonsms-3011-dev.twil.io/sms-token?To=+13038594840&From=+16075245881&Body=Jack, I Am Wathcing You";
	const testMessage = async () => {
		const fetchToken = await fetch(tokenUrl);

		const { token, status } = await fetchToken.json();
		console.log(token, status);
		await new SyncClient(token);
	};

	const sendMessageUrl =
		"https://deltaupsilonsms-3011-dev.twil.io/sms-reply?To=+13038594840&From=+16075245881&Body=Jack, I Am Wathcing You";

	const messageTest = async () => {
		const sendMessage = await fetch(sendMessageUrl, {
			mode: "no-cors",
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "http://localhost:3000",
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-Methods": "POST",
			},
		});

		const { status } = await sendMessage.json();
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p
					onClick={() => {
						// messageTest();
						testMessage();
						console.log("Hello!");
					}}
				>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
