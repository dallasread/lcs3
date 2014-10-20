Lively.Models["introducer"] =
	dataPath: "chatboxes/{{chatbox}}/introducers"
	fields:
		chatbox: "belongs_to"
		label: "string"
		type: "string"
		required: "boolean"
		validator: "string"