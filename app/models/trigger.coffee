Lively.Models["trigger"] =
	dataPath: "triggers/{{chatbox}}"
	fields:
		chatbox: "belongs_to"
		active: "boolean"
		delay: "integer"
		include: "string"
		exclude: "string"
		message:
			body: "string"