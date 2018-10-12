var logicInfo = {
	computed: {
		mapAccess: function() {
			var access = {}, vm = this;
			var canCross = function() {
				if (vm.itemData.bridge.tracked || vm.flags.freeBridge) { return true }
				else { return false }
			}()
			var canFly = function() {
				if (vm.itemData.airship.tracked || vm.flags.freeAirship) { return true }
				else { return false }
			}()
			var canSailSea = function() {
				return vm.itemData.ship.tracked
			}()
			var canSailOcean = function() {
				if (vm.itemData.ship.tracked && vm.itemData.canal.tracked) { return true }
				else { return false }
			}()
			var canRow = function() {
				return vm.itemData.canoe.tracked
			}()
			
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
				if (vm.flags.mapOpenProgression) { return (canRow || canSailOcean || canFly) }
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