Lively.Controllers["/install"] =
	before: ->
		$("body").addClass "lcs-fixed"
		
	actions:
		createChatbox: (form) ->
			$(Lively.Config.container).find(".isnt_loading").hide()
			$(Lively.Config.container).find(".is_loading").fadeIn()
			
			user =
				email: form.find("[name='email']").val()
				password: form.find("[name='password']").val()

			data =
				key: form.find("[name='key']").val()
				name: Lively.capitalize location.host
				include: "*"
				exclude: ""
				login:
					facebook: true
			
			Lively.createUserAndSignIn user, (error, authData) ->
				if error
					$(Lively.Config.container).find(".is_loading").hide()
					$(Lively.Config.container).find(".isnt_loading").fadeIn()
					alert "Email or Password was invalid."
				else
					Lively.create "chatbox", data, ->
						Lively.update "/settings/admins/#{Lively.Vars.me.key}", true
						Lively.create "agent",
							key: Lively.Vars.me.key
							name: Lively.capitalize(user.email).split("@")[0]
							email: user.email
							_chatbox: Lively.Vars.chatbox_key
						Lively.fetchPath "/admin"