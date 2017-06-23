

var player = {
	name    : ".",
	life    : 100,
	damage  : 0,
	snipper : true,
	hasSword:true,
    rank    :[ "mage","general","soldier"],
    power   :
    challenge : function(){
    	console.log("Let's have a challenge!")
    },
    fighting : function(){
    	console.log("Would you like to fight " + this.name +"?")
    },
    attack :function(target){
   console.log(this.name + " attacks " + target.name + " for " + this.damage);
    	target.life-= this.damage;
    },
    pickedupsword :function(){
    	if(this.hasSword == true){
    		console.log(this.name + " picked up the sword.")
    	}
    },
 }   


var saul = Object.create(player);
saul.name ="Saul",
saul.life = 100,
saul.damage =20,
console.log(saul.name);
console.log(saul.life);

var Esmeralda = Object.create(player);
Esmeralda.name ="Esmeralda",
Esmeralda.life = 120,
Esmeralda.damage = 10,
console.log(Esmeralda.name);
console.log(Esmeralda.life);
console.log(Esmeralda.damage);
Esmeralda.fighting();
Esmeralda.challenge();
Esmeralda.attack(saul);
Esmeralda.pickedupsword();



