import { useEffect } from "react";
import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const testMessage = async () => {
		const messagingList = [
			"+13038594840",
			"+13039101892",
			"+17143312909",
			"+13039197221",
			"+17135400389",
			"+13035068995",
			"+17207676808",
			"+17203186244",
		];
		const messageBody =
			"NoReply: Hi! This is an automessaging bot set up by Jack to remind you guys of important fraternity events, more on this at Chapter. Please text Jack and let him know if you will be attending Chapter! Jack's Number: (303) 859-4840";
		let failedSend = [];

		let response;

		messagingList.map(async (number) => {
			const sendUrl = `https://deltaupsilonsms-3011-dev.twil.io/sms-send-notification?To=${number}&From=+17206371593&Body=${messageBody}`;
			response = await fetch(sendUrl);

			const { success, message } = await response.json();

			if (!success) {
				failedSend.push({ number, message });
			}
		});

		if (failedSend.length > 0) {
			// Text myself about failure?
			console.log(
				"Not sure what to do yet, but eventually it would be good to notify myself of failure"
			);
		}
	};

	// const sendMessageUrl =
	// 	"https://deltaupsilonsms-3011-dev.twil.io/sms-reply?To=+13038594840&From=+16075245881&Body=Jack, I Am Wathcing You";

	// const messageTest = async () => {
	// 	const sendMessage = await fetch(sendMessageUrl, {
	// 		mode: "no-cors",
	// 		method: "post",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Access-Control-Allow-Origin": "http://localhost:3000",
	// 			"Access-Control-Allow-Headers": "Content-Type",
	// 			"Access-Control-Allow-Methods": "POST",
	// 		},
	// 	});

	// 	const { status } = await sendMessage.json();
	// };

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
