Lively.Controllers["/admin/settings/introducers"] =
	init: ->
		Lively.find "introducer", { chatbox: Lively.Glob["chatbox"] }