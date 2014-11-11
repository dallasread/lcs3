Lively.Controllers["/admin/settings/introducers"] =
	before: ->
		Lively.find "introducer", { chatbox: Lively.Vars.chatbox_key }
	
	after: ->
		$(".introducers tbody").sortable
			handle: ".handle"
			axis: "y"
			items: "tr"
			start: (e, ui) ->
				ui.placeholder.height ui.item.height()
			update: ->
				$(".introducers tr[data-rdr-bind-model]").each (index) ->
					Lively.setPriority $(this).attr("data-rdr-bind-model"), index
	
	actions:
		create: ->
			Lively.create "introducer",
				name: ""
				permalink: ""
				required: false
				type: "text"
				validator: "presence"
				priority: if "introducers" of Lively.Vars then Object.keys(Lively.Vars.introducers).length - 2 else 0
			, ->
				$(Lively.Config.container).find(".introducers tbody tr:visible:last input:visible, .introducers tbody tr:visible:last textarea:visible").first().focus()