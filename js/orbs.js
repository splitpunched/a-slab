var orbInfo = {
	data: function() { return {
		orbData: function() {
			var orbs = {}
			orbs.earth = { 
				id: 0, 
				name: "earth",
				label: "Earth", 
				img: 'icons/earthOrb.png', 
				tracked: false,
			}
			orbs.fire = { 
				id: 1, 
				name: "fire",
				label: "Fire", 
				img: 'icons/fireOrb.png', 
				tracked: false,
			}
			orbs.water = { 
				id: 2, 
				name: "water",
				label: "Water", 
				img: 'icons/waterOrb.png', 
				tracked: false,
			}
			orbs.air = { 
				id: 3, 
				name: "air",
				label: "Air", 
				img: 'icons/airOrb.png', 
				tracked: false,
			}
			return orbs
		}(),
	}},
	computed: {
		orbs: function() {
			var vm = this, orbs = {}
			orbs.earth = {
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.floorShuffle) { return true }
					if (!vm.itemData.rod.tracked) { return false }
					return vm.mapAccess.melmond
				}()
			}
			orbs.fire = {
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.floorShuffle) { return true }
					return vm.mapAccess.volcano
				}()
			}
			orbs.water = {
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.floorShuffle) { return true }
					if (!vm.itemData.oxyale.tracked) { return false }
					return vm.mapAccess.onrac
				}()
			}
			orbs.air = {
				accessible: function() {
					if (vm.flags.entranceShuffle || vm.flags.floorShuffle) { return true }
					if (!vm.itemData.chime.tracked) { return false }
					return vm.mapAccess.mirage
				}()
			}
			for (i = 0; i < Object.keys(vm.orbData).length; i++) {
				var name = Object.keys(vm.orbData)[i]
				orbs[name] = Object.assign(orbs[name], vm.orbData[name])
			}
			return orbs
		}
    }
}