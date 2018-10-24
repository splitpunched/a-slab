# A SLAB!!
FFR tracker using Vue.js. It mostly works and is a very serious work in progress. The changelog gets its own thing when... I feel like it.

***

# Changelog

## Unreleased
### Added
- Shard Hunt mode support

### Fixed
- Reset window actually checking to confirm flagset is a possible flagset/sanity checking input

### Changed
- Update sprites for crystal, canal, crown, Marsh, Marsh Locked, Coneria

***

## [0.2.5] - 10/24/2018

### Added
- Incentive chest counter (which can go up to the theoretical maximum, but normally displays minimum loose items)
- "Junk" item counter (which counts how many incentive locations will have nothing)

### Fixed
- (?) May or may not work with beta or alpha flags; an attempt will be made
- You can actually trigger the airship in extended open progression with just the ship and canal (thanks Demerine!)
- You can't sail into the ice cave no matter how hard you try (thanks Demerine)
- Dr. Unne can't be triggered if you don't have the slab (thanks Demerine!)
- The tail incentive flag actually does something (thanks Demerine!)

### Changed
- Orbs that aren't lit use the generic unlit orb icon, instead of a dimmed version of that orb's icon
- Much more obvious now when items with no used icon are used (i.e. during fetch quest shuffle)





***

## [0.2.4] - 10/20/2018
### Added
- White Shirt, Power Gauntlet, Defense Sword, Thor Hammer now all appear correctly as incentives

### Fixed
- Excalibur no longer disappears when tracked.

### Changed
- Chime sprite now looks like a chime instead of just looking like Mirage Tower.
- Excalibur now uses its FF1 sprite.

***

## [0.2.3] - 10/19/2018
### Added
- The Fairy NPC actually exists (thank you MoistMogwai!)
- Dr. Unne actually exists (thank you leggystarscream!)
- Masmune and Opal Bracelet are trackable items.

### Fixed
- Floater actually checks logic to make sure you can use it.
- Floater logic checks itself correctly to take into account map edits (thank you leggystarscream!)
- You actually need to be able to feed the Titan to feed the Titan.
- Excalibur is not an incentive item and should not display with fetch quest shuffle on (thank you a tiny fairy!)

***

## [0.2.2] - 10/19/2018
### Added
- Incentive ribbon now shows up and is trackable.

### Fixed
- Sky Castle incentive location now actually trackable (previously had no logic behind it, so was always inaccessible) (thank you neongrey!)
- Floating-point error on flat EXP gain is fixed (thank you neongrey!)

### Changed
- Spacing for the EXP multiplier squished becuase I thought it looked ugly.