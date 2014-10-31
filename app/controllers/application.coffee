Lively.fn.isSignIn = ->
	"me" of Lively.Vars

Lively.fn.isAdmin = ->
	Lively.fn.isSignIn() && Lively.Vars.me.key of Lively.Vars.settings.admins

Lively.fn.isAgent = ->
	Lively.fn.isSignIn() && Lively.Vars.me.key of Lively.Vars.agents

Lively.fn.isOnlineAgent = ->
	Lively.fn.isAgent() && Lively.Vars.agents[Lively.Vars.me.key].online

Lively.Controllers["/application"] =
	before: ->
		$("body").removeClass "lcs-fixed"
		Lively.find "chatbox", { key: Lively.Vars.chatbox_key }, "settings"
		Lively.find "agent", { chatbox: Lively.Vars.chatbox_key }
		Lively.find "trigger", { chatbox: Lively.Vars.chatbox_key }
		Lively.find "introducer", { chatbox: Lively.Vars.chatbox_key }
	
	after: ->
		if "name" of Lively.Vars.settings
			if !Lively.fn.isAgent() && Lively.currentPath.indexOf("/admin") != -1
				Lively.fetchPath "/chatbox"
			else if Lively.fn.isAgent() && Lively.currentPath.indexOf("/chatbox") != -1
				Lively.fetchPath "/admin"
		else
			if Lively.currentPath.indexOf("/install") == -1
				Lively.fetchPath "/install"

	actions:
		saveAttrs: (form) ->
			form.trigger "saveAttrs"
		
		signOut: ->
			message = "Are you sure you want to sign out?"
			message = "This will automatically mark you as offline. #{message}" if Lively.fn.isAgent() && Lively.fn.isOnlineAgent()
			
			if confirm message
				signout = ->
					Lively.signOut ->
						Lively.fetchPath "/chatbox"
			
				if Lively.fn.isAgent()
					Lively.update "/agents/#{Lively.Vars.me.key}/online", false, ->
						signout()
				else
					signout()
		
		signIn: (form) ->
			Lively.signInUser form.serializeObject(), (error, authData) ->
				if error
					alert "Email or Password was invalid."
				else
					if Lively.fn.isAgent()
						Lively.fetchPath "/admin"
					else
						Lively.fetchPath "/chatbox"