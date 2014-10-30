Lively.Controllers["/admin/visitors/visitor"] =
	before: ->
		Lively.find "visitor",
			chatbox: Lively.Glob["chatbox"]
			id: Lively.Params["visitor_id"]
	
	after: ->
		Lively.delete "visitors/#{Lively.Params["visitor_id"]}/has_unread"