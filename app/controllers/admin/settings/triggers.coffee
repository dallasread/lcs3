Lively.Controllers["/admin/settings/triggers"] =
	init: ->
		Lively.find "trigger", { chatbox: Lively.Glob["chatbox"] }