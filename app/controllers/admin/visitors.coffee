Lively.Controllers["/admin/visitors"] =
	init: ->
		Lively.find "visitor", { chatbox: Lively.Glob["chatbox"] }