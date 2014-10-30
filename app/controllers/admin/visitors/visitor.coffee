Lively.Controllers["/admin/visitors/visitor"] =
	init: ->
		Lively.find "visitor",
			chatbox: Lively.Glob["chatbox"]
			id: Lively.Params["visitor_id"]