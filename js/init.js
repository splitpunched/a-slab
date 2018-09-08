var itemList = items.filter(function(item) {
	return (!item.prev)
})

var locationList = locations.filter(function(place) {
	var nope = [ 'marsh', 'marshLocked', 'earth', 'volcano', 'iceCave', 'shrine', 'sky' ]
	return nope.indexOf(place.name) == -1
})

function initialize(flags) {
	tracker.bridge.tracked = true;
	logic.shuffleNPCItems()
	logic.earlyBridge()
}