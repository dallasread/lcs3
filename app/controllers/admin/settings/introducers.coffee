Lively.Controllers["/admin/settings/introducers"] =
	init: ->
		Lively.find "introducer", { chatbox: Lively.Glob["chatbox"] }
	
	actions:
		create: ->
			Lively.create "introducer",
				name: ""
				label: ""
				required: false
				type: "text"
				validator: ""
				ordinal: if "introducers" of Lively.Vars then Object.keys(Lively.Vars.introducers).length else 0