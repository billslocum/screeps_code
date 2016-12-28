var roleGuard = {

    /** @param {Creep} creep **/
    run: function(creep) {

        var goThere2 = Game.flags.Guards;
        var goThere = Game.flags.RoomNorth;
        var goThere4 = Game.flags.Here2am;
        var goThere3 = Game.flags.VisitorCenter;
       
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            creep.moveTo(closestHostile);
            creep.attack(closestHostile);
        }
        else {
            creep.moveTo(goThere);
        }
    }
};

module.exports = roleGuard;