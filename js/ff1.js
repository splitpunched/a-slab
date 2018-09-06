var tracker = {}

var orbs = []

orbs.push({
	id: 0,
	name: "earthOrb",
	label: "Earth",
	img: 'icons/earthOrb.png',
})

orbs.push({
	id: 1,
	name: "fireOrb",
	label: "Fire",
	img: 'icons/fireOrb.png',
})

orbs.push({
	id: 2,
	name: "waterOrb",
	label: "Water",
	img: 'icons/waterOrb.png',
})

orbs.push({
	id: 3,
	name: "airOrb",
	label: "Air",
	img: 'icons/airOrb.png',
})

for (i = 0; i < orbs.length; i++) {
	var obj = orbs[i].name;
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}

var items = []

items.push({
	id: 0,
	name: "bridge",
	label: "Bridge",
	img: 'icons/bridge.png',
	keyItem: true,
})

items.push({
	id: 1,
	name: "lute",
	label: "Lute",
	img: 'icons/lute.png',
	keyItem: true,
})

items.push({
	id: 2,
	name: "ship",
	label: "Ship",
	img: 'icons/ship.png',
	keyItem: true,
})

items.push({
	id: 3,
	name: "crown",
	label: "Crown",
	img: 'icons/crown.png',
	next: 'crystal',
	keyItem: true,
})

items.push({
	id: 4,
	name: "crystal",
	label: "Crystal",
	img: 'icons/crystal.png',
	prev: 'crown',
	next: 'herb',
	keyItem: true,
})

items.push({
	id: 5,
	name: "herb",
	label: "Herb",
	img: 'icons/herb.png',
	prev: 'crystal',
	next: 'key',
	keyItem: true,
})

items.push({
	id: 6,
	name: "key",
	label: "Key",
	img: 'icons/key.png',
	prev: 'herb',
	keyItem: true,
})

items.push({
	id: 7,
	name: "tnt",
	label: "TNT",
	img: 'icons/tnt.png',
	next: 'canal',
	keyItem: true,
})

items.push({
	id: 8,
	name: "canal",
	label: "Canal",
	img: 'icons/canal.png',
	prev: 'tnt',
	keyItem: true,
})

items.push({
	id: 9,
	name: "ruby",
	label: "Ruby",
	img: 'icons/ruby.png',
	consumable: true,
	keyItem: true,
	usedImg: 'icons/titan.png',
})

items.push({
	id: 10,
	name: "rod",
	label: "Rod",
	img: 'icons/rod.png',
	keyItem: true,
})

items.push({
	id: 11,
	name: "canoe",
	label: "Canoe",
	img: 'icons/canoe.png',
	keyItem: true,
})

items.push({
	id: 12,
	name: "floater",
	label: "Floater",
	img: 'icons/floater.png',
	next: 'airship',
	keyItem: true,
})

items.push({
	id: 13,
	name: "airship",
	label: "Airship",
	img: 'icons/airship.png',
	prev: 'floater',
	keyItem: true,
})

items.push({
	id: 14,
	name: "tail",
	label: "Tail",
	img: 'icons/tail.png',
	usedImg: 'icons/class.png',
	consumable: true,
	keyItem: true,
})

items.push({
	id: 15,
	name: "bottle",
	label: "Bottle",
	img: 'icons/bottle.png',
	usedImg: 'icons/bottle-empty.png',
	consumable: true,
	next: 'oxyale',
	keyItem: true,
})

items.push({
	id: 16,
	name: "oxyale",
	label: "Oxyale",
	img: 'icons/oxyale.png',
	prev: 'bottle',
	keyItem: true,
})

items.push({
	id: 17,
	name: "slab",
	label: "Slab",
	img: 'icons/slab.png',
	consumable: true,
	usedImg: 'icons/slab-unne.png',
	next: 'chime',
	keyItem: true,
})

items.push({
	id: 18,
	name: "cube",
	label: "Cube",
	img: 'icons/cube.png',
	keyItem: true,
})

items.push({
	id: 19,
	name: "chime",
	label: "Chime",
	img: 'icons/chime.png',
	prev: 'slab',
	keyItem: true,
})

items.push({
	id: 20,
	name: "adamant",
	label: "Adamant",
	img: 'icons/adamant.png',
	next: 'xcalbur',
	keyItem: true,
})

items.push({
	id: 20,
	name: "xcalbur",
	label: "Excal",
	img: 'icons/xcalbur.png',
	prev: 'adamant',
})

for (i = 0; i < items.length; i++) {
	var obj = items[i].name
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}

var locations = []

locations.push({
	id: 0,
	name: "king",
	label: "King",
	img: 'icons/king.png',
})

locations.push({
	id: 1,
	name: "sara",
	label: "Sara",
	img: 'icons/sara.png',
})

locations.push({
	id: 2,
	name: "bikke",
	label: "Bikke",
	img: 'icons/bikke.png',
})

locations.push({
	id: 3,
	name: "marsh",
	label: "Marsh",
	img: 'icons/marsh.png',
})

locations.push({
	id: 4,
	name: "marshLocked",
	label: "Marsh",
	img: 'icons/marshLocked.png',
})

locations.push({
	id: 5,
	name: "astos",
	label: "Astos",
	img: 'icons/astos.png',
})

locations.push({
	id: 6,
	name: "matoya",
	label: "Matoya",
	img: 'icons/matoya.png',
})

locations.push({
	id: 7,
	name: "prince",
	label: "Prince",
	img: 'icons/prince.png',
})

locations.push({
	id: 8,
	name: "coneriaLocked",
	label: "Coneria",
	img: 'icons/coneriaLocked.png',
})

locations.push({
	id: 9,
	name: "nerrick",
	label: "Nerrick",
	img: 'icons/nerrick.png',
})

locations.push({
	id: 10,
	name: "earth",
	label: "Earth",
	img: 'icons/vampire.png',
})

locations.push({
	id: 11,
	name: "sarda",
	label: "Sarda",
	img: 'icons/sarda.png',
})

locations.push({
	id: 12,
	name: "sage",
	label: "Sage",
	img: 'icons/sage.png',
})

locations.push({
	id: 13,
	name: "volcano",
	label: "Volcano",
	img: 'icons/redD.png',
})

locations.push({
	id: 14,
	name: "iceCave",
	label: "Ice",
	img: 'icons/eye.png',
})

locations.push({
	id: 15,
	name: "ordeals",
	label: "Ordeals",
	img: 'icons/zombieD.png',
})

locations.push({
	id: 16,
	name: "shopItem",
	label: "Shop",
	img: 'icons/shop.png',
})

locations.push({
	id: 17,
	name: "shrine",
	label: "Shrine",
	img: 'icons/mermaid.png',
})

locations.push({
	id: 18,
	name: "robot",
	label: "Robot",
	img: 'icons/robot.png',
})

locations.push({
	id: 19,
	name: "lefein",
	label: "Lefein",
	img: 'icons/lupa.png',
})

locations.push({
	id: 20,
	name: "sky",
	label: "Sky",
	img: 'icons/sky.png',
})

for (i = 0; i < locations.length; i++) {
	var obj = locations[i].name;
	tracker[obj] = {}
	tracker[obj].tracked = false;
	tracker[obj].delivered = false;
}