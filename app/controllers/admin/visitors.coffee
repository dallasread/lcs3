Lively.Controllers["/admin/visitors"] =
	before: ->
		Lively.find "visitor", { chatbox: Lively.Glob["chatbox"] }