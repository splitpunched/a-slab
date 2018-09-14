var flags = {
	shuffleNPCItems: true,
	shuffleFetchItems: false,
	earlyBridge: true,
	expMultiplier: 2.4,
}

var logic = { 
	'shuffleNPCItems': function() {
		var npcList = [ 'king', 'sara', 'bikke', 'sarda', 'sage', 'shop', 'robot' ]
		var itemList = [ 'bridge', 'lute', 'ship', 'rod', 'canoe', 'bottle', 'cube' ]
		for (i = 0; i > npcList.length; i++) { 
			locations[npcList[i]].linked = false;
			items[itemList[i]].linked = false;
		}
	},
	'earlyBridge': function() {
		items.bridge.locked = true;
		items.bridge.linked = false;
	}
}