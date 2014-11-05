Lively.fn.Validators = (regex) ->
	switch regex
		when "email"
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		when "presence"
			/[^()]/
		else
			new RegExp regex
		
Lively.Controllers["/chatbox"] =
	after: ->
		Lively.fetchPath "/chatbox/register" if !Lively.fn.isSignedIn() && Lively.currentPath == "/chatbox/index"
		Lively.fetchPath "/admin" if Lively.fn.isAgent()
		$(Lively.Config.container).find("input:visible, textarea:visible").first().trigger "focus"

	actions:
		visitorRegisterViaEmail: (form) ->
			validators = form.find("[data-validator]").length
			passed = 0
			errors = []
			
			form.find("[data-validator]").each ->
				name = Lively.capitalize $(this).attr("name")
				field = $(this).closest(".field")
				field_error = field.find(".field_error")
				label = field.find(".moving_label")
				regex = $(this).attr("data-validator")
				validator = Lively.fn.Validators regex
				val = $.trim $(this).val()

				if regex.length && validator.toString().length
					valid = validator.test val
					field_error.remove()
						
					if valid
						label.fadeIn()
						passed += 1
					else
						label.hide()
						$("<p class='field_error'>#{name} is invalid.</p>").appendTo field
			
			if passed == validators
				data = form.serializeObject()
				form.addClass "loading"
				
				Lively.createUserAndSignIn data, (error, authData) ->
					if error
						$(Lively.Config.container).find(".is_loading").hide()
						$(Lively.Config.container).find(".isnt_loading").fadeIn()
						Lively.Warn "Auth", error
						form.removeClass "loading"
						alert "Email or Password was invalid."
					else
						visitor = {}
						visitor.data = data
						visitor.key = Lively.Vars.me._key
						visitor.online = true
						visitor._chatbox = Lively.Vars.chatbox_key
						Lively.create "visitor", visitor
						form.removeClass "loading"
						Lively.fetchPath "/chatbox"
				
		visitorRegisterViaFacebook: (form) ->
			console.log "FB Signin"