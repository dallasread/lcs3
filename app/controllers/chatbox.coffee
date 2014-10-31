Lively.Controllers["/chatbox"] =
	after: ->
		$(Lively.Config.container).find(".introducer input:visible:first").trigger "focus"

	actions:
		visitorSignInViaEmail: (form) ->
			alert "sign in via email"
				
		visitorSignInViaFacebook: (form) ->
			alert "sign in via facebook"