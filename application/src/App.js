import { useEffect } from "react";
import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";
import { recipients } from "./messaging/mailingList.js";

function App() {
	const testMessage = async () => {
		let phoneNumbers = [];

		recipients.map(({ phoneNumber }) =>
			phoneNumbers.push("+1" + phoneNumber)
		);

		// recipients.map(({ phoneNumber }) =>
		// 	phoneNumbers.push("+1" + phoneNumber)
		// );

		console.log(phoneNumbers);

		const messageBody = `NoReply: Important Information from Chapter 03/15/22
		\n                                                \n
		New Members: Sign Due Agreements / Fill out Bio. Cards 
		\n                                                \n
		Events this Week: Archery March 18th @ 6:30pm @ Empty Quiver
		\n                                                \n
		Later Events: Movie Night March 25th or 26th / A Precious Child March 31st / Hazing Talk Aprill 7th.
		`;
		let failedSend = [];

		let response;

		phoneNumbers.map(async (number) => {
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

	useEffect(() => {
		console.log(recipients);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p
					onClick={() => {
						testMessage();
					}}
				>
					Edit <code>src/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
