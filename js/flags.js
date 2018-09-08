var flags = {
	shuffleNPCItems: true,
	shuffleFetchItems: false,
	earlyBridge: true,
}

var logic = { 
	'shuffleNPCItems': function() {
		var npcList = [ 'king', 'sara', 'bikke', 'sarda', 'sage', 'shop', 'robot' ]
		var itemList = [ 'bridge', 'lute', 'ship', 'rod', 'canoe', 'bottle', 'cube' ]
		for (i = 0; i > npcList.length; i++) { 
			manager.getLocation(npcList[i]).linked = false;
			manager.getItem(itemList[i]).linked = false;
		}
	},
	'earlyBridge': function() {
		var bridge = manager.getItem('bridge')
		bridge.locked = true;
		bridge.linked = false;
	}
}