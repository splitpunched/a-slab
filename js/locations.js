var locationMix =  {
	data: function() { return {
		locationData: function() {
			var locations = {}
			locations.garland = {
				id: 0,
				name: "Garland",
				img: 'icons/garland.png',
				incentive: true,
				accessible: true,
				tracked: false,
			}
			locations.king = {
				id: 1,
				name: "King",
				img: 'icons/king.png',
				incentive: true,
				accessible: true,
				tracked: false,
			}
			locations.sara = {
				id: 2,
				name: "Sara",
				img: 'icons/sara.png',
				incentive: true,
				tracked: false,
			}
			locations.bikke = {
				id: 3,
				name: "Bikke",
				img: 'icons/bikke.png',
				incentive: true,
				tracked: false,
			}
			locations.marsh = {
				id: 4,
				name: "Marsh",
				img: 'icons/marsh.png',
				incentive: false,
				tracked: false,
			}
			locations.marshLocked = {
				id: 5,
				name: "Marsh",
				img: 'icons/marshLocked.png',
				incentive: false,
				tracked: false,
			}
			locations.astos = {
				id: 6,
				name: "astos",
				label: "Astos",
				img: 'icons/astos.png',
				incentive: true,
				tracked: false,
			}
			locations.matoya = {
				id: 7,
				name: "matoya",
				label: "Matoya",
				img: 'icons/matoya.png',
				tracked: false,
				required: {
					item: 'crystal',
					access: false,
				}
			}
			locations.prince = {
				id: 8,
				name: "prince",
				label: "Prince",
				img: 'icons/prince.png',
				tracked: false,
				required: {
					item: 'herb',
					access: false,
				}
			}
			locations.coneriaLocked = {
				id: 9,
				name: "coneriaLocked",
				label: "Coneria",
				img: 'icons/coneriaLocked.png',
				tracked: false,
				required: {
					item: 'key',
					access: false,
				}
			}
			locations.nerrick = {
				id: 10,
				name: "nerrick",
				label: "Nerrick",
				img: 'icons/nerrick.png',
				tracked: false,
				required: {
					item: 'tnt',
					access: false,
				}
			}
			locations.smith = {
				id: 11,
				name: "smith",
				label: "Smith",
				img: 'icons/smith.png',
				tracked: false,
				required: {
					item: 'adamant',
					access: false,
				}
			}
			locations.earth = {
				id: 12,
				name: "earth",
				label: "Earth",
				img: 'icons/vampire.png',
				tracked: false,
				required: {
					item: false,
					access: 'outerSea',
				}
			}
			locations.sarda = {
				id: 14,
				name: "sarda",
				label: "Sarda",
				img: 'icons/sarda.png',
				tracked: false,
				required: {
					item: false,
					access: 'outerSea',
					location: false,
				}
			}
			locations.sage = {
				id: 15,
				name: "sage",
				label: "Sage",
				img: 'icons/sage.png',
				tracked: false,
					required: {
					item: false,
					access: 'outerSea',
					orb: 'earthOrb',
				}
			}
			locations.volcano = {
				id: 16,
				name: "volcano",
				label: "Volcano",
				img: 'icons/redD.png',
				tracked: false,
				required: {
					item: false,
					access: false,
				}
			}
			locations.iceCave = {
				id: 17,
				name: "iceCave",
				label: "Ice",
				img: 'icons/eye.png',
				tracked: false,
				required: {
					item: false,
					access: 'allWater',
				}
			}
			locations.ordeals = {
				id: 18,
				name: "ordeals",
				label: "Ordeals",
				img: 'icons/zombieD.png',
				tracked: false,
				required: {
					item: false,
					access: 'allWater',
				}
			}
			locations.shopItem = {
				id: 19,
				name: "shopItem",
				label: "Shop",
				img: 'icons/shop.png',
				tracked: false,
				required: {
					item: false,
					access: false,
				}
			}
			locations.shrine = {
				id: 20,
				name: "shrine",
				label: "Shrine",
				img: 'icons/mermaid.png',
				tracked: false,
				required: {
					item: 'oxyale',
					access: 'allWater',
				}
			}
			locations.waterfall = {
				id: 21,
				name: "waterfall",
				label: "Robot",
				img: 'icons/robot.png',
				tracked: false,
				required: {
					item: 'canoe',
					access: 'canFly',
				}
			}
			locations.lefein = {
				id: 22,
				name: "lefein",
				label: "Lefein",
				img: 'icons/lupa.png',
				tracked: false,
				required: {
					item: false,
					access: 'flight',
				}
			}
			locations.sky = {
				id: 23,
				name: "sky",
				label: "Sky",
				img: 'icons/sky.png',
				tracked: false,
				required: {
					item: 'chime',
					access: 'flight',
				}
			}
		  return locations
		}(),
	}},
	computed: {
		locations: function() {
			var vm = this, locations = {}
			for (i = 0; i > Object.keys(this.locationData); i++) {
				var name = Object.keys(this.locationData)[i]
				Object.assign(this.locations[name], this.locationData[name])
			}
			return locations; 
		}
	}
}