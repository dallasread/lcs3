Lively.Models["visitor"] =
	dataPath: "visitors/{{chatbox}}"
	fields:
		chatbox: "belongs_to"
		messages: "embedded"
		online: "boolean"
		data: "object"