Lively.Controllers["/admin/settings/introducers"] =
	before: ->
		Lively.find "introducer", { chatbox: Lively.Vars.chatbox_key }
	
	actions:
		create: ->
			Lively.create "introducer",
				name: ""
				permalink: ""
				required: false
				type: "text"
				validator: ""
				ordinal: if "introducers" of Lively.Vars then Object.keys(Lively.Vars.introducers).length - 2 else 0
			, ->
				$(Lively.Config.container).find(".introducers tbody tr:visible:last input:visible, .introducers tbody tr:visible:last textarea:visible").first().focus()