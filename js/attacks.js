//FORMULA OVERVIEW:
// FORMULA TAKEN FROM THIS URL:
// http://bulbapedia.bulbagarden.net/wiki/Damage

// calcDamage returns value to decrease opposing pokemon's
// HP by via the formula shown in URL. If the move's category
// is special attack ("SPC") exact same calculations are done but
// with spatk and spdef stats used as parameters instead.

// @params playerpoke   player's pokemon object
// @params enemypoke    opposing pokemon object
// @params move         move object
// @return attack       damage in integer form

// TODO: find way to return damage done without if/else statement
// may just need to pass opposing attack and defense statuses before
// running function instead of during the function.

// TODO: Create getModifier function to calculate
// modifier's effect on damage

let calcDamage = function(playerpoke, enemypoke, move){
  if(move.cat === "PHY"){
    return (
      (((2*playerpoke.lv+10)/250) *
      (playerpoke.atk/enemypoke.def)*
      (move.basedmg) +2) * playerpoke.mod)
    }else if(move.cat === "SPC"){
      return (
        (((2*playerpoke.lv+10)/250) *
        (playerpoke.spatk/enemypoke.spdef)*
        (move.basedmg) +2) * playerpoke.mod)
    }
}

// @param basedmg  base damage - initial damage before calculations)
// @param cat      category - physical vs special vs status
// @param stat     status effects - additional status effects and their chances of
//                 effecting the other pokemon (info coming from seperate array)
// @param type     type - of move (simillar to pokemon types)
// @param acc      accuracy - to be implimented later but decides whether a move hits or not via RNG
