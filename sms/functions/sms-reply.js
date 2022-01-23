exports.handler = function (context, event, callback) {
	// The pre-initialized Twilio Client is available from the `context` object
	const twilioClient = context.getTwilioClient();

	// Query parameters or values sent in a POST body can be accessed from `event`
	const from = event.From || "+16075245881";
	const to = event.To || "+13038594840";
	const body = event.Body || "Hello, World!";

	// Use `messages.create` to generate a message. Be sure to chain with `then`
	// and `catch` to properly handle the promise and call `callback` _after_ the
	// message is sent successfully!

	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Access-Control-Allow-Headers": "Content-Type",
	};

	const resp = new Twilio.Response();

	twilioClient.messages
		.create({ body, to, from })
		.then((message) => {
			resp.setBody({ status: 200, message });
			resp.setHeaders(headers);
			callback(null, resp);
		})
		.catch((error) => {
			resp.setBody({ status: 404 });
			resp.setHeaders(headers);
			callback(error, resp);
		});

	callback(null, resp);
};
