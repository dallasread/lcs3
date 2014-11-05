Lively.fn.isSignedIn = ->
	"me" of Lively.Vars

Lively.fn.isAdmin = ->
	Lively.fn.isSignedIn() && Lively.Vars.me._key of Lively.Vars.settings.admins

Lively.fn.isAgent = ->
	Lively.fn.isSignedIn() && "agents" of Lively.Vars && Lively.Vars.me._key of Lively.Vars.agents

Lively.fn.isOnlineAgent = ->
	Lively.fn.isAgent() && Lively.Vars.agents[Lively.Vars.me._key].online

Lively.Controllers["/application"] =
	before: ->
		$("body").removeClass "lcs-fixed"
		Lively.find "agent", { chatbox: Lively.Vars.chatbox_key }
		Lively.find "chatbox", { key: Lively.Vars.chatbox_key }, "settings"
		Lively.find "trigger", { chatbox: Lively.Vars.chatbox_key }
		Lively.find "introducer", { chatbox: Lively.Vars.chatbox_key }
	
	after: ->
		unless "name" of Lively.Vars.settings
			Lively.fetchPath "/install" if Lively.currentPath.indexOf("/install") == -1

	actions:
		saveAttrs: (form) ->
			form.trigger "saveAttrs"
		
		signOut: ->
			message = "Are you sure you want to sign out?"
			message = "This will automatically mark you as offline. #{message}" if Lively.fn.isAgent() && Lively.fn.isOnlineAgent()
			
			if confirm message
				signout = ->
					delete Lively.Vars.me
					Lively.signOut ->
						Lively.fetchPath "/chatbox/register"
			
				if Lively.fn.isAgent()
					Lively.update "/agents/#{Lively.Vars.me._key}/online", false, ->
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
		
		createMessage: (form) ->
			data = form.serializeObject()
			data._chatbox = Lively.Vars.chatbox_key
			if Lively.fn.isAgent()
				data.from_agent = true
				data.agent = Lively.Vars.me._key
				data._visitor = Lively.Vars.visitor._key
			else
				data._visitor = Lively.Vars.me._key
			Lively.create "message", data
			form[0].reset()
			form.find("textarea:visible:first").trigger "focus"