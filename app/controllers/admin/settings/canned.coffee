Lively.Controllers["/admin/settings/canned"] =
	before: ->
		Lively.find "canned", { chatbox: Lively.Vars.chatbox_key }

	actions:
		create: ->
			Lively.create "canned",
				hash: ""
				message:
					body: ""
			, ->
				$(Lively.Config.container).find(".canned tbody tr:visible:last input:visible, .canned tbody tr:visible:last textarea:visible").first().focus()