Lively.Models["message"] =
	dataPath: "messages/{{chatbox}}/{{visitor}}"
	fields:
		chatbox: "belongs_to"
		visitor: "belongs_to"
		body: "string"