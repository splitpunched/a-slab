var tracker = {}

var orbs = {}
orbs.earthOrb = { id: 0, name: "earthOrb", label: "Earth", img: 'icons/earthOrb.png', }
orbs.fireOrb = { id: 1, name: "fireOrb", label: "Fire", img: 'icons/fireOrb.png', }
orbs.waterOrb = { id: 2, name: "waterOrb", label: "Water", img: 'icons/waterOrb.png', }
orbs.airOrb = { id: 3, name: "airOrb", label: "Air", img: 'icons/airOrb.png', }

var items = {}
items.bridge = {
	id: 0,
	name: "bridge",
	label: "Bridge",
	img: 'icons/bridge.png',
	keyItem: true,
	linked: false,
	locked: false,
}

items.lute = {
	id: 1,
	name: "lute",
	label: "Lute",
	img: 'icons/lute.png',
	keyItem: true,
	linked: false,
}

items.ship = {
	id: 2,
	name: "ship",
	label: "Ship",
	img: 'icons/ship.png',
	keyItem: true,
	linked: false,
}

items.crown = {
	id: 3,
	name: "crown",
	label: "Crown",
	img: 'icons/crown.png',
	next: 'crystal',
	keyItem: true,
	linked: false,
}

items.crystal = {
	id: 4,
	name: "crystal",
	label: "Crystal",
	img: 'icons/crystal.png',
	prev: 'crown',
	next: 'herb',
	keyItem: true,
	linked: false,
}

items.herb = {
	id: 5,
	name: "herb",
	label: "Herb",
	img: 'icons/herb.png',
	prev: 'crystal',
	next: 'key',
	keyItem: true,
	linked: false,
}

items.key = {
	id: 6,
	name: "key",
	label: "Key",
	img: 'icons/key.png',
	prev: 'herb',
	keyItem: true,
	linked: false,
}

items.tnt = {
	id: 7,
	name: "tnt",
	label: "TNT",
	img: 'icons/tnt.png',
	next: 'canal',
	keyItem: true,
	linked: false,
}

items.canal = {
	id: 8,
	name: "canal",
	label: "Canal",
	img: 'icons/canal.png',
	prev: 'tnt',
	keyItem: true,
	linked: false,
}

items.ruby = {
	id: 9,
	name: "ruby",
	label: "Ruby",
	img: 'icons/ruby.png',
	consumable: true,
	keyItem: true,
	usedImg: 'icons/titan.png',
	linked: false,
}

items.rod = {
	id: 10,
	name: "rod",
	label: "Rod",
	img: 'icons/rod.png',
	keyItem: true,
	linked: false,
}

items.canoe = {
	id: 11,
	name: "canoe",
	label: "Canoe",
	img: 'icons/canoe.png',
	keyItem: true,
	linked: false,
}

items.floater = {
	id: 12,
	name: "floater",
	label: "Floater",
	img: 'icons/floater.png',
	next: 'airship',
	keyItem: true,
	linked: false,
}

items.airship = {
	id: 13,
	name: "airship",
	label: "Airship",
	img: 'icons/airship.png',
	prev: 'floater',
	keyItem: true,
	linked: false,
}

items.tail = {
	id: 14,
	name: "tail",
	label: "Tail",
	img: 'icons/tail.png',
	usedImg: 'icons/class.png',
	consumable: true,
	keyItem: true,
	linked: false,
}

items.bottle = {
	id: 15,
	name: "bottle",
	label: "Bottle",
	img: 'icons/bottle.png',
	usedImg: 'icons/bottle-empty.png',
	consumable: true,
	next: 'oxyale',
	keyItem: true,
	linked: false,
}

items.oxyale = {
	id: 16,
	name: "oxyale",
	label: "Oxyale",
	img: 'icons/oxyale.png',
	prev: 'bottle',
	keyItem: true,
	linked: false,
}

items.slab = {
	id: 17,
	name: "slab",
	label: "Slab",
	img: 'icons/slab.png',
	consumable: true,
	usedImg: 'icons/slab-unne.png',
	next: 'chime',
	keyItem: true,
	linked: false,
}

items.cube = {
	id: 18,
	name: "cube",
	label: "Cube",
	img: 'icons/cube.png',
	keyItem: true,
	linked: false,
}

items.chime = {
	id: 19,
	name: "chime",
	label: "Chime",
	img: 'icons/chime.png',
	prev: 'slab',
	keyItem: true,
	linked: false,
}

items.adamant = {
	id: 20,
	name: "adamant",
	label: "Adamant",
	img: 'icons/adamant.png',
	next: 'xcalbur',
	keyItem: true,
	linked: false,
}

items.xcalbur = {
	id: 21,
	name: "xcalbur",
	label: "Excal",
	img: 'icons/xcalbur.png',
	prev: 'adamant',
	linked: false,
}

var locations = {}

locations.king = {
	id: 0,
	name: "king",
	label: "King",
	img: 'icons/king.png',
}

locations.sara = {
	id: 1,
	name: "sara",
	label: "Sara",
	img: 'icons/sara.png',
}

locations.bikke = {
	id: 2,
	name: "bikke",
	label: "Bikke",
	img: 'icons/bikke.png',
}

locations.marsh = {
	id: 3,
	name: "marsh",
	label: "Marsh",
	img: 'icons/marsh.png',
}

locations.marshLocked = {
	id: 4,
	name: "marshLocked",
	label: "Marsh",
	img: 'icons/marshLocked.png',
}

locations.astos = {
	id: 5,
	name: "astos",
	label: "Astos",
	img: 'icons/astos.png',
}

locations.matoya = {
	id: 6,
	name: "matoya",
	label: "Matoya",
	img: 'icons/matoya.png',
}

locations.prince = {
	id: 7,
	name: "prince",
	label: "Prince",
	img: 'icons/prince.png',
}

locations.coneriaLocked = {
	id: 8,
	name: "coneriaLocked",
	label: "Coneria",
	img: 'icons/coneriaLocked.png',
}

locations.nerrick = {
	id: 9,
	name: "nerrick",
	label: "Nerrick",
	img: 'icons/nerrick.png',
}

locations.smith = {
	id: 10,
	name: "smith",
	label: "Smith",
	img: 'icons/smith.png',
}

locations.earth = {
	id: 11,
	name: "earth",
	label: "Earth",
	img: 'icons/vampire.png',
}

locations.sarda = {
	id: 12,
	name: "sarda",
	label: "Sarda",
	img: 'icons/sarda.png',
}

locations.sage = {
	id: 13,
	name: "sage",
	label: "Sage",
	img: 'icons/sage.png',
}

locations.volcano = {
	id: 14,
	name: "volcano",
	label: "Volcano",
	img: 'icons/redD.png',
}

locations.iceCave = {
	id: 15,
	name: "iceCave",
	label: "Ice",
	img: 'icons/eye.png',
}

locations.ordeals = {
	id: 16,
	name: "ordeals",
	label: "Ordeals",
	img: 'icons/zombieD.png',
}

locations.shopItem = {
	id: 17,
	name: "shopItem",
	label: "Shop",
	img: 'icons/shop.png',
}

locations.shrine = {
	id: 18,
	name: "shrine",
	label: "Shrine",
	img: 'icons/mermaid.png',
}

locations.waterfall = {
	id: 19,
	name: "waterfall",
	label: "Robot",
	img: 'icons/robot.png',
}

locations.lefein = {
	id: 20,
	name: "lefein",
	label: "Lefein",
	img: 'icons/lupa.png',
}

locations.sky= {
	id: 21,
	name: "sky",
	label: "Sky",
	img: 'icons/sky.png',
}

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
