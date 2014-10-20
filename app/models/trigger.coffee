Lively.Models["trigger"] =
	dataPath: "chatboxes/{{chatbox}}/triggers"
	fields:
		chatbox: "belongs_to"
		active: "boolean"
		delay: "integer"
		include: "string"
		exclude: "string"
		message:
			body: "string"