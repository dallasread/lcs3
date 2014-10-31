Lively.Controllers["/admin/visitors/visitor"] =
	before: ->
		Lively.find "visitor",
			chatbox: Lively.Glob["chatbox"]
			key: Lively.Params["visitor_id"]
	
	after: ->
		Lively.delete "visitors/#{Lively.Params["visitor_id"]}/has_unread"
	
	actions:
		createMessage: (form) ->
			data = form.serializeObject()
			data._chatbox = Lively.Glob["chatbox"]
			data._visitor = Lively.Vars.visitor._key
			Lively.create "message", data