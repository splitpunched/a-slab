var tracker = {}

for (i = 0; i < Object.keys(orbs).length; i++) {
  var obj = Object.keys(orbs)[i]
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}

for (i = 0; i < Object.keys(items).length; i++) {
	var obj = Object.keys(items)[i]
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}

for (i = 0; i < Object.keys(locations).length; i++) {
	var obj = Object.keys(locations)[i]
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}
