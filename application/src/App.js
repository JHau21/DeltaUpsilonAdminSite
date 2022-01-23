import { useEffect } from "react";
import { SyncClient } from "twilio-sync";
import logo from "./logo.svg";
import "./App.css";

function App() {
	// If I ever want to try out sync, I can try it out here.
	// const tokenUrl = "http://deltaupsilonsms-3011-dev.twil.io/sms-token";
	// const testMessage = async () => {
	// 	const fetchToken = await fetch(tokenUrl);

	// 	const { token } = await fetchToken.json();
	// 	await new SyncClient(token);
	// };
	// const sendMessageUrl = "http://deltaupsilonsms-3011-dev.twil.io/sms-reply";

	// const triggerFunc = () => {
	// 	timerFunc();
	// };

	// const timerFunc = () => {
	// 	setTimeout(async () => {
	// 		const sendMessage = await fetch(sendMessageUrl);
	// 		await sendMessage.json();
	// 	}, 100000);
	// 	triggerFunc();
	// };

	// const messageTest = async () => {
	// 	const sendMessage = await fetch(sendMessageUrl);
	// 	const response = await sendMessage.json();
	// 	console.log(response);
	// };

	// useEffect(() => {
	// 	triggerFunc();
	// }, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p
					onClick={() => {
						// messageTest();
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
