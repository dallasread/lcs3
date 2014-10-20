Lively.Controllers["/admin/settings/triggers"] =
	init: ->
		Lively.find "trigger", { chatbox: Lively.glob["chatbox"] }