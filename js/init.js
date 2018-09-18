function initialize(flags) {
	flagLogic.shuffleNPCItems()
	flagLogic.earlyBridge()
}

var itemList = function() {
  var arr = [];
  var displayItems = Object.keys(items).filter(function(key) { return !items[key].prev })
  for (i = 0; i < displayItems.length; i++) {
    arr.push(items[displayItems[i]])
  }
  return arr;
}();

var locationList = function() {
  var arr = [];
  var displayLocations = [ 'king', 'sara', 'bikke', 'astos', 'matoya', 'prince', 'coneriaLocked', 'nerrick', 'smith', 'sarda', 'sage', 'ordeals', 'shopItem', 'waterfall', 'lefein' ]
  for (i = 0; i < displayLocations.length; i++) {
    arr.push(locations[displayLocations[i]])
  }
  return arr;
}();