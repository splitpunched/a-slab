var flags = {
	shuffleNPCItems: true,
	shuffleFetchItems: false,
	earlyBridge: true,
	expMultiplier: 2.4,
}

var flagLogic = {}

flagLogic.shuffleNPCItems = function() {
    var itemList = ['bridge', 'lute', 'ship', 'rod', 'canoe', 'bottle', 'cube']
    for (i = 0; i > itemList.length; i++) {
        items[itemList[i]].linked = false;
        items[itemList[i]].requirements = false;
    }
}

flagLogic.earlyBridge =  function() {
    tracker.bridge.tracked = true;
	items.bridge.locked = true;
	items.bridge.linked = false;
}

var placementLogic = {}

placementLogic.something = function () {
    return false;
}