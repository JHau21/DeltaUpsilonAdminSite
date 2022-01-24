exports.handler = function (context, event, callback) {
	// The pre-initialized Twilio Client is available from the `context` object
	const twilioClient = context.getTwilioClient();

	// Query parameters or values sent in a POST body can be accessed from `event`
	const from = event.From;
	const to = event.To;
	const body = event.Body;

	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Access-Control-Allow-Headers": "Content-Type",
	};

	twilioClient.messages
		.create({ body, to, from })
		.then((message) => {
			const resp = new Twilio.Response();
			resp.setBody({ success: true, message: message });
			resp.setHeaders(headers);
			callback(null, resp);
		})
		.catch((error) => {
			const resp = new Twilio.Response();
			resp.setBody({ success: false, message: error });
			resp.setHeaders(headers);
			callback(null, resp);
		});
};
