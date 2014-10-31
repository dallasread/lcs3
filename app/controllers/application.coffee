Lively.fn.isAdmin = ->
	Lively.Vars.currentUserKey of Lively.Vars.settings.admins

Lively.Controllers["/application"] =
	before: ->
		$("body").removeClass "lcs-fixed"
		Lively.find "chatbox", { key: Lively.Vars.chatbox_key }, "settings"
	
	after: ->
		if "name" of Lively.Vars.settings
			if !Lively.fn.isAdmin() && Lively.currentPath.indexOf("/admin") != -1
				Lively.fetchPath "/chatbox"
			else if Lively.fn.isAdmin() && Lively.currentPath.indexOf("/chatbox") != -1
				Lively.fetchPath "/admin"
		else
			if Lively.currentPath.indexOf("/install") == -1
				Lively.fetchPath "/install"

	actions:
		saveAttrs: (form) ->
			form.trigger "saveAttrs"
		
		signOut: ->
			message = "Are you sure you want to sign out?"
			message = "This will automatically mark you as offline. #{message}" if Lively.fn.isAdmin()
			
			if confirm message
				signout = ->
					Lively.signOut ->
						Lively.fetchPath "/chatbox"
			
				if Lively.fn.isAdmin()
					Lively.update "/agents/#{Lively.Vars.currentUserKey}/online", false, ->
						signout()
				else
					signout()
		
		signIn: (form) ->
			Lively.signInUser form.serializeObject(), (error, authData) ->
				if error
					alert "Email or Password was invalid."
				else
					if Lively.fn.isAdmin()
						Lively.fetchPath "/admin"
					else
						Lively.fetchPath "/chatbox"