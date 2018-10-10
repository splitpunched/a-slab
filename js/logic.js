var accessMix = {
	computed: {
		mapAccess: function() {
			var access = {}, vm = this;
			access.pravoka = function() {
				if (vm.flags.mapOpenProgression) { return (vm.items.canoe.tracked || vm.items.ship.tracked || vm.items.bridge.tracked || vm.items.airship.tracked) }
				return (vm.items.ship.tracked || vm.items.bridge.tracked || vm.items.airship.tracked)
			}()
			access.dwarves = function() {
				if (vm.flags.mapOpenProgression) { return true; }
				return (vm.items.ship.tracked || vm.items.airship.tracked)
			}()
			access.elfland = function() {
				if (vm.flags.extendedOpenProgression) { return true; }
				if (vm.flags.mapOpenProgression) { return (vm.items.canoe.tracked || vm.items.ship.tracked || vm.items.airship.tracked) }
				return (vm.items.ship.tracked || vm.items.airship.tracked)
			}()
			access.melmond = function() {
				return ((vm.items.ship.tracked && vm.items.canal.tracked) || vm.items.airship.tracked)
			}()
			access.crescent = function() {
				if (vm.flags.mapOpenProgression) { return (vm.items.canoe.tracked || (vm.items.ship.tracked && vm.items.canal.tracked) || vm.items.airship.tracked) }
				return ((vm.items.ship.tracked && vm.items.canal.tracked) || vm.items.airship.tracked)
			}()
			access.volcano = function() {
				if (vm.flags.mapOpenProgression) { return (vm.items.canoe.tracked || (vm.items.ship.tracked && vm.items.canal.tracked) || vm.items.airship.tracked) }
				return ((vm.items.ship.tracked && vm.items.canal.tracked && vm.items.canoe.tracked) || vm.items.airship.tracked)
			}()
			access.ordeals = function() {
				return ((vm.items.ship.tracked && vm.items.canal.tracked && vm.items.canoe.tracked) || vm.items.airship.tracked)
			}()
			access.onrac = function() {
				if (vm.flags.mapOpenProgression) { return ((vm.items.ship.tracked && vm.items.canal.tracked) || (vm.items.canoe.tracked && vm.items.airship.tracked)) }
				return (vm.items.canoe.tracked && vm.items.airship.tracked)
			}()
			access.mirage = function() {
				if (vm.flags.mapOpenProgression) { return ((vm.items.ship.tracked && vm.items.canal.tracked) || vm.items.airship.tracked) }
				return vm.items.airship.tracked
			}()
			return access;
		},
	}
}