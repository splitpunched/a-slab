var items = {}

items.bridge = {
    id: 0,
    name: "bridge",
    label: "Bridge",
    img: 'icons/bridge.png',
    keyItem: true,
    linked: false,
    locked: false,
    requirements: false,
}

items.lute = {
    id: 1,
    name: "lute",
    label: "Lute",
    img: 'icons/lute.png',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.ship = {
    id: 2,
    name: "ship",
    label: "Ship",
    img: 'icons/ship.png',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.crown = {
    id: 3,
    name: "crown",
    label: "Crown",
    img: 'icons/crown.png',
    next: 'crystal',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.crystal = {
    id: 4,
    name: "crystal",
    label: "Crystal",
    img: 'icons/crystal.png',
    prev: 'crown',
    next: 'herb',
    keyItem: true,
    linked: 'astos',
    requirements: false,
}

items.herb = {
    id: 5,
    name: "herb",
    label: "Herb",
    img: 'icons/herb.png',
    prev: 'crystal',
    next: 'key',
    keyItem: true,
    linked: 'matoya',
    requirements: false,
}

items.key = {
    id: 6,
    name: "key",
    label: "Key",
    img: 'icons/key.png',
    prev: 'herb',
    keyItem: true,
    linked: 'prince',
    requirements: false,
}

items.tnt = {
    id: 7,
    name: "tnt",
    label: "TNT",
    img: 'icons/tnt.png',
    next: 'canal',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.canal = {
    id: 8,
    name: "canal",
    label: "Canal",
    img: 'icons/canal.png',
    prev: 'tnt',
    keyItem: true,
    linked: false,
    requirements: false,
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
    requirements: false,
}

items.rod = {
    id: 10,
    name: "rod",
    label: "Rod",
    img: 'icons/rod.png',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.canoe = {
    id: 11,
    name: "canoe",
    label: "Canoe",
    img: 'icons/canoe.png',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.floater = {
    id: 12,
    name: "floater",
    label: "Floater",
    img: 'icons/floater.png',
    next: 'airship',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.airship = {
    id: 13,
    name: "airship",
    label: "Airship",
    img: 'icons/airship.png',
    prev: 'floater',
    keyItem: true,
    linked: false,
    requirements: false,
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
    requirements: false,
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
    requirements: false,
}

items.oxyale = {
    id: 16,
    name: "oxyale",
    label: "Oxyale",
    img: 'icons/oxyale.png',
    prev: 'bottle',
    keyItem: true,
    linked: false,
    requirements: false,
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
    requirements: false,
}

items.cube = {
    id: 18,
    name: "cube",
    label: "Cube",
    img: 'icons/cube.png',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.chime = {
    id: 19,
    name: "chime",
    label: "Chime",
    img: 'icons/chime.png',
    prev: 'slab',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.adamant = {
    id: 20,
    name: "adamant",
    label: "Adamant",
    img: 'icons/adamant.png',
    next: 'xcalbur',
    keyItem: true,
    linked: false,
    requirements: false,
}

items.xcalbur = {
    id: 21,
    name: "xcalbur",
    label: "Excal",
    img: 'icons/xcalbur.png',
    prev: 'adamant',
    linked: false,
    requirements: false,
}