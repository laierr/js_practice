
Array.prototype.countDigits = function(){
   var obj = {};
   for(var i = 0, l = this.length; i < l; ++i){
      if(obj.hasOwnProperty(this[i])) {
      	obj[this[i]] += 1
         continue;
      }
      obj[this[i]] = 1;
   }
   return obj; 
} 



var cruncher = function (seed) {
	seed = (typeof seed === "number" && seed >= 0) ? seed : 1; 
	proceed = true;
	results =[];
	rawData = [];
	if (!seed && typeof seed === "number") {rawData.push(seed);}; //zeero!
	
	while (proceed){
		results.push(seed);
		
		//strip to digits
		while (seed) { 
			rawData.push(seed % 10);
			seed = Math.floor(seed / 10);
		}; 
	
		storage = rawData.countDigits();
		rawData = []; 
		
		keys = Object.keys(storage);	
		keys.sort().reverse(); 
		
		for (var i = 0, l = keys.length; i < l; i++) {
			rawData.push(storage[keys[i]] + keys[i]);
		};
		seed = parseInt(rawData.join("")); //new seed
		rawData = [];

		if (seed === results[results.length - 1]) {
			proceed = false;
			document.write("Result, " + results.length + " steps: " + results.join(" => "))
		};
	}
}


cruncher(-1);


//dump
	/*
	while(rawData.length) {
		holder = rawData[0]
		storage[holder] = 0;

		for (thing in rawData) {
			if (rawData[thing] === rawData[0]) {
				storage[holder] += 1;
				rawData.splice(thing,1);
			}
		};
	
	} */
