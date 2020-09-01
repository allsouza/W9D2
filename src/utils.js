const Util = {
    // This is a value pair that happens to be a so it does not need a variable because it is a variable inside the hash.
    inherits: function(ParentClass, ChildClass){
        function Surrogate (){}
        Surrogate.prototype = ParentClass.prototype;
        ChildClass.prototype = Surrogate.prototype;
        ChildClass.prototype.constructor = ChildClass;
    },
    randomVec: function(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale: function(vec, m){
        return [vec[0] * m, Math.abs(vec[1]*m)];
    }
}

module.exports = Util;