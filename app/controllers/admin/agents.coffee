Lively.Controllers["/admin/agents"] =
	init: ->
		Lively.find "agent", { chatbox: Lively.Glob["chatbox"] }