Lively.Models["message"] =
	dataPath: "visitors/{{chatbox}}/{{visitor}}/messages"
	fields:
		chatbox: "belongs_to"
		visitor: "belongs_to"
		body: "string"