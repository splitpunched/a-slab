var manager = {}

manager.getItem = function(string) {
	return items.filter(function(item) { return item.name == string })[0]
}

manager.getLocation = function(string) {
	return locations.filter(function(loc) { return loc.name == string })[0]
}