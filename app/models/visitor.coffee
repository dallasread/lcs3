Lively.Models["visitor"] =
	dataPath: "visitors/{{chatbox}}"
	fields:
		chatbox: "belongs_to"
		messages: "has_many"
		online: "boolean"
		data: "object"