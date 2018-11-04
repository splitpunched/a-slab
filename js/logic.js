var logicInfo = {
	methods: {
		itemLogic: function() {
			vm = this;
			return { 
				npcFreeTownItems: function(npc) {
					if (vm.flags.shuffleNPCItems || vm.flags.townShuffle) { return true }
					else { return vm.locations[npc].accessible }
				},
				npcFreeFloorItems: function(npc) {
					if (vm.flags.shuffleNPCItems || vm.flags.floorShuffle) { return true }
					else { return vm.locations[npc].accessible }
				}
			}
		},
	},
	computed: {
		mapAccess: function() {
			var access = {}, vm = this;
			
			/* I wonder if there's a better way to do this, but I'm gonna keep these visually separated. */
			var canCross = function() { return (vm.itemData.bridge.tracked || vm.flags.freeBridge) }()
			var canFly = function() { return vm.itemData.airship.tracked || vm.flags.freeAirship }()
			var canSailSea = function() { return vm.itemData.ship.tracked }()
			var canSailOcean = function() { return (vm.itemData.ship.tracked && vm.itemData.canal.tracked) }()
			var canRow = function() { return vm.itemData.canoe.tracked }()
			/* But down below, here are the actual map access traits we want. */
			
			access.pravoka = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canSailSea || canCross || vm.itemData.airship.tracked) }
				return (canSailSea || canCross || canFly)
			}()
			access.dwarves = function() {
				if (vm.flags.mapOpenProgression) { return true; }
				return (canSailSea || canFly)
			}()
			access.elfland = function() {
				if (vm.flags.extendedOpenProgression) { return true; }
				if (vm.flags.mapOpenProgression) { return (canRow || canSailSea || canFly) }
				return (canSailSea || canFly)
			}()
			access.melmond = function() {
				return (canSailOcean || canFly)
			}()
			access.crescent = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canSailOcean || canFly) }
				return (canSailOcean || canFly)
			}()
			access.volcano = function() {
				if (vm.flags.mapOpenProgression) { return (canRow || canFly) }
				return ((canSailOcean && canRow) || canFly)
			}()
			access.ordeals = function() {
				return ((canSailOcean && canRow) || canFly)
			}()
			access.onrac = function() {
				if (vm.flags.mapOpenProgression) { return (canSailOcean || (canRow && canFly)) }
				return (canRow && canFly)
			}()
			access.mirage = function() {
				if (vm.flags.mapOpenProgression) { return (canSailOcean || canFly) }
				return canFly
			}()
			return access;
		},
	}
}