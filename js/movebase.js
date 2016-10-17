// // prototype of attack objects
// function _protoAttack(name,basedmg,cat,stat,type,acc){
//   this.basedmg = basedmg;
//   this.cat = cat;
//   this.stat = stat;
//   this.type = type;
//   this.acc = acc;
// }

// MOVE LIST AND INDEX NUMBERS FOUND HERE:
// http://bulbapedia.bulbagarden.net/wiki/List_of_moves

//MOVE prototype
/*
idxnum:{
  name: "",
  type: "",
  cat: "",
  PP:,
  basedmg:,
  acc: 100,
  effects: {""}
},
*/

let movebase = {
  1:{
    name: "Pound",
    type: "NORMAL",
    cat: "PHY",
    PP: 35,
    basedmg: 40,
    acc: 100,
    effects: {""}
  },
  2:{
    name: "Karate Chop",
    type: "FIGHTING",
    cat: "PHY",
    PP: 25,
    basedmg: 50,
    acc: 100,
    effects: {""}
  },
  3:{
    name: "Double Slap",
    type: "NORMAL",
    cat: "PHY",
    PP: 10,
    basedmg: 15,
    acc: 85,
    effects: {"MULTIHIT"}
  },
  4:{
    name: "Comet Punch",
    type: "NORMAL",
    cat: "PHY",
    PP: 15,
    basedmg: 18,
    acc: 85,
    effects: {"MULTIHIT"}
  },
  22:{
    name: "Vine Whip",
    type: "GRASS",
    cat: "PHY",
    PP: 25,
    basedmg: 45,
    acc: 100,
    effects: {""}
  },
  33:{
    name: "Tackle",
    type: "NORMAL",
    cat: "PHY",
    PP: 35,
    basedmg: 50,
    acc: 100,
    effects: {""}
  },
  45:{
    name: "Growl",
    type: "NORMAL",
    cat: "STAT",
    PP: 40,
    basedmg: 0,
    acc: 100,
    effects: {"ATK1STGDOW"}
    //  TODO: Create key value pairs for effects.
    //  Examples:
    //  "ATK1STGDOW" = attack 1 stage down
    //  "MULTIHIT" = repeat damage 2-5 times depending on RNG
    //  (unless effect says otherwise)
  },
  73:{
    name: "Leech Seed",
    type: "GRASS",
    cat: "STAT",
    PP: 10,
    basedmg: 0,
    acc: 90,
    effects: {"SEEDED"}
  },
}
