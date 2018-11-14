const flags = {
	state: { 
		string: 'PAC!P3hP!HHdHJ!fPAVoYAeAFeV',
	},
	getters: {
		flagset: state => {
			var flags = {}
			const base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!"
			const encoded = state.string
			const flagRules = [
				// ITEMS = 0;
				{
					1: { name: 'shuffleShops', type: 'bool' },
					2: { name: 'shuffleTreasures', type: 'bool' },
					4: { name: 'shuffleNPCItems', type: 'bool' },
					8: { name: 'shuffleFetchItems',	type: 'bool' },
					16: { name: 'randomWares', type: 'bool' },
					32: { name: 'randomLoot', type: 'bool' },
				},
				// ALT_GAME_MODE = 1;
				{
					1: { name: 'shardHunt', type: 'bool' },
					2: { name: 'extraShards', type: 'bool' },
					4: { name: 'transformFinalFormation', type: 'bool' },
					8: { name: 'chaosRush', type: 'bool' },
					16: { name: 'shortTemple', type: 'bool' },
					32: { name: 'preserveFiendRefights', type: 'bool' },
				},
				// MAGIC = 2;
				{
					1: { name: 'magicShops', type: 'bool' },
					2: { name: 'magicLevels', type: 'bool' },
					4: { name: 'magicPermissions', type: 'bool' },
					8: { name: 'itemMagic', type: 'bool' },
				},
				// ENCOUNTERS = 3;
				{
					1: { name: 'rng', type: 'bool' },
					2: { name: 'enemyFormationsFrequency', type: 'bool' },
					4: { name: 'enemyFormationsUnrunnable', type: 'bool' },
					8: { name: 'enemyFormationsSurprise', type: 'bool' },
					16: { name: 'enemyTrapTiles', type: 'bool' },
					32: { name: 'randomTrapFormations', type: 'bool' },
				},
				// BATTLES = 4;
				{
					1: { name: 'enemyScripts', type: 'bool' },
					2: { name: 'enemySkillsSpells', type: 'bool' },
					4: { name: 'enemyStatusAttacks', type: 'bool' },
					8: { name: 'allowUnsafePirates', type: 'bool' },
				},
				// STANDARD_MAPS = 5;
				{
					3: { name: 'warMechMode', type: 'warMech' },
					4: { name: 'ordealsPillars', type: 'bool' },
					8: { name: 'skyCastle4F', type: 'bool' },
					16: { name: 'titansTrove', type: 'bool', },
					32: { name: 'confusedOldMen', type: 'bool' },
				},
				// OVERWORLD_MAPS = 6;
				{
					1: { name: 'mapOpenProgression', type: 'bool' },
					2: { name: 'entranceShuffle', type: 'bool' },
					4: { name: 'townShuffle', type: 'bool' },
					8: { name: 'floorShuffle', type: 'bool' },
					16: { name: 'allowDeepCastles', type: 'bool' },
					32: { name: 'extendedOpenProgression', type: 'bool' },
				},
				// INCENTIVES_MAIN = 7;
				{
					1: { name: 'incentiveFreeNPCs', type: 'bool' },
					2: { name: 'incentiveFetchNPCs', type: 'bool' },
					4: { name: 'incentiveTail', type: 'bool', },
					8: { name: 'incentiveFetchItems', type: 'bool', },
				},
				// INCENTIVES_CHESTS1 = 8;
				{
					1: { name: 'incentiveMarsh', type: 'bool' },
					2: { name: 'incentiveEarth', type: 'bool' },
					4: { name: 'incentiveVolcano', type: 'bool' },
					8: { name: 'incentiveIceCave', type: 'bool' },
					16: { name: 'incentiveOrdeals', type: 'bool' },
					32: { name: 'incentiveSeaShrine', type: 'bool' },
				},
				// INCENTIVE_CHESTS2 = 9;
				{
					1: { name: 'incentiveConeria', type: 'bool' },
					2: { name: 'incentiveMarshLocked', type: 'bool' },
					4: { name: 'incentiveSkyPalace', type: 'bool' },
				},
				// INCENTIVE_ITEMS1 = 10;
				{
					1: { name: 'incentiveMasamune', type: 'bool' },
					2: { name: 'incentiveOpalBracelet', type: 'bool' },
					4: { name: 'incentiveRibbon', type: 'bool' },
					8: { name: 'incentiveRibbon2', type: 'bool' },
					16: { name: 'incentive65k', type: 'bool' },
					32: { name: 'incentiveBad', type: 'bool' },
				},
				// INCENTIVE_ITEMS2 = 11;
				{
					1: { name: 'incentiveDefCastArmor', type: 'bool' },
					2: { name: 'incentiveOffCastArmor', type: 'bool' },
					4: { name: 'incentiveOtherCastArmor', type: 'bool' },
					8: { name: 'incentiveDefCastWeapon', type: 'bool' },
					16: { name: 'incentiveOffCastWeapon', type: 'bool' },
					32: { name: 'incentiveOtherCastWeapon', type: 'bool' },
				},
				// ITEM_REQUIREMENTS = 12;
				{
					1: { name: 'earlySarda', type: 'bool' },
					2: { name: 'earlySage', type: 'bool' },
					4: { name: 'crownlessOrdeals', type: 'bool' },
					8: { name: 'onlyRequireGameIsBeatable', type: 'bool' },
				},
				// FILTHY_CASUALS = 13;
				{
					1: { name: 'freeBridge', type: 'bool' },
					2: { name: 'freeAirship', type: 'bool' },
					4: { name: 'freeOrbs', type: 'bool' },
					8: { name: 'enableCritDisplay', type: 'bool' },
					32: { name: 'easyMode', type: 'bool' },
				},
				// CONVENIENCES = 14;
				{
					1: { name: 'speedHacks', type: 'bool' },
					2: { name: 'noPartyShuffle', type: 'bool' },
					4: { name: 'dash', type: 'bool' },
					8: { name: 'buyTen', type: 'bool' },
					16: { name: 'identifyTreasures', type: 'bool' },
					32: { name: 'waitWhenUnrunnable', type: 'bool' },
				},
				// BUG_FIXES = 15;
				{
					1: { name: 'houseMPRestore', type: 'bool' },
					2: { name: 'weaponStats', type: 'bool' },
					4: { name: 'chanceToRun', type: 'bool' },
					8: { name: 'spellBugs', type: 'bool' },
					16: { name: 'blackBeltAbsorb', type: 'bool' },
				},
				// ENEMY_BUG_FIXES = 16;
				{
					1: { name: 'enemyStatusAttackBug', type: 'bool' },
					2: { name: 'enemySpellsTargetingAllies', type: 'bool' },
					4: { name: 'enemyElementalResistBug', type: 'bool' },
					8: { name: 'fisherPriceTurnOrder', type: 'bool' },
				},
				// SCALE = 17;
				{
					1: { name: 'startingGold', type: 'bool' },
					2: { name: 'wrapStatOverflow', type: 'bool' },
					4: { name: 'wrapPriceOverflow', type: 'bool' },
				},
				// ENEMY_SCALE_FACTOR = 18;
				{ 
					0: { name: 'enemyScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
				// PRICE_SCALE_FACTOR = 19;
				{ 
					0: { name: 'priceScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
				// EXP_MULTIPLIER = 20;
				{ 
					0: { name: 'expMultiplier', 'multiplier': 0.1, type: 'int' }
				},
				// EXP_BONUS = 21;
				{ 
					0: { name: 'expBonus', 'multiplier': 10, type: 'int' }
				},
				// ENCOUNTER_RATE = 22;
				{ 
					0: { name: 'encounterRate', 'multiplier': 1, type: 'int' }
				},
				// FORCED_PARTY_MEMBERS = 23;
				{ 
					0: { name: 'forcedParty', 'multiplier': 1, type: 'int' }
				},
				// PROGRESSIVE_SCALE = 24
				{
					0: { name: 'progressiveScale', type: 'progScale' }
				},
				// DUNGEON_ENCOUNTER_RATE = 25;
				{ 
					0: { name: 'dungeonEncounterRate', 'multiplier': 1, type: 'int' }
				},
				// BOSS_SCALE_FACTOR = 26
				{ 
					0: { name: 'bossScaleFactor', 'multiplier': 0.1, type: 'int' }
				},
			]
			for (i = 0; i < flagRules.length; i++) {
				var count = base64.indexOf(encoded.charAt(i))
				var flagGroup = Object.keys(flagRules[i]).sort(function(a, b) { return b - a });
				for (j = 0; j < flagGroup.length; j++) {
					var bit = flagGroup[j], flag = flagRules[i][bit]
					var flagTypes = {
						'bool': function() {
							var value = (bit <= count)
							flags[flag.name] = value
							if (flags[flag.name] == true) { count = (count - bit) }
						},
						'int': function() {
							flags[flag.name] = (count * flag.multiplier)
						},
						'progScale': function() {
							var arr = [
								false,
								{ 'type': 'total', 'bonus': 1.5, 'count': 12 },
								{ 'type': 'total', 'bonus': 1.5, 'count': 15 },
								{ 'type': 'total', 'bonus': 2.0, 'count': 12 },
								{ 'type': 'total', 'bonus': 2.0, 'count': 15 },
								{ 'type': 'progressive', 'bonus': 0.05 },
								{ 'type': 'progressive', 'bonus': 0.10 },
								{ 'type': 'progressive', 'bonus': 0.20 }
                            ]
                            for (count; count > 8;) { count = (count - 8) } // the tiny fairy memorial loop to make this work with beta flags
							flags[flag.name] = arr[count]
						},
					}
					if (flagTypes[flag.type]) { flagTypes[flag.type]() }
				}
			}
			return flags;
		},
	},
	mutations: {
		set(state, flagset) {
            state.string = flagset;
			router.push({ query: { flags: flagset }})
			for (i = 0; i < Object.keys(this.state.items).length; i++) {
				var self = this.state.items[Object.keys(this.state.items)[i]]
				self.tracked = false
				self.used = false
				self.activated = false
			}
			for (i = 0; i < Object.keys(this.state.locations).length; i++) {
				var self = this.state.locations[Object.keys(this.state.locations)[i]]
				self.tracked = false
			}
			for (i = 0; i < Object.keys(this.state.orbs).length; i++) {
				var self = this.state.orbs[Object.keys(this.state.orbs)[i]]
				self.tracked = false
			}
        },
	}
}