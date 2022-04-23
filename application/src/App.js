import { useEffect } from "react";
// import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";
import { recipients } from "./messaging/mailingList.js";

function App() {
	const testMessage = async () => {
		let phoneNumbers = [];

		recipients.map(({ phoneNumber }) =>
			phoneNumbers.push("+1" + phoneNumber)
		);

		const messageBody = `NoReply: Hi! Please let Jack know if you will be attending Chapter on Monday by 7pm tomorrow. Jack's Number: (303) 859-4840`;

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
					Click here to send message.
				</p>
			</header>
		</div>
	);
}

export default App;
