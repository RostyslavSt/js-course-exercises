function getGeometricObject(opts) {
	var obj = {};
	var arg = arguments;
	var square;
	if (arg.length === 2) {
		obj.type = arg[0];
		obj.a = arg[1];
	}
	if (arg.length === 3) {
		obj.type = arg[0];
		obj.a = arg[1];
		obj.b = arg[2];
	}
	if (arg.length === 4) {
		obj.type = arg[0];
		obj.a = arg[1];
		obj.b = arg[2];
		obj.c = arg[3];
	}	
	if (arg.length === 5) {
		obj.type = arg[0];
		obj.a = arg[1];
		obj.b = arg[2];
		obj.c = arg[3];
		obj.d = arg[4];
	}	
						
	obj.getSquare = function () {
		if (arg.length === 2) { return square = Math.pow(this.a, 2); }
		if (arg.length === 3) { return square = (this.a * this.b); }
		if (arg.length === 4) { 
			var p = (this.a + this.b + this.c);

			return square = Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
		}
	}
	 
	return obj;
}

function Animal(name, type) {
	this.name = name;
	this.type = type;
	this.stepCount = 0;
}

Animal.prototype.makeNoise = function() {
	switch (this.type) {
		case 'cat': 
			return 'meow';
			break;
		case 'dog': 
			return 'woof';
			break;
		case 'rat': 
			return 'squeak';
			break;
	}
	// if (this.type === 'cat') {return 'meow';}
	// if (this.type === 'dog') {return 'woof';}
	// if (this.type === 'rat') {return 'squeak';}
}

tom = new Animal('Voldemort', 'cat');
console.log(tom);
console.log('Type of Tom: ' + tom.type);
console.log('Tom stepcount: ' + tom.stepCount);
tom.makeNoise();

sharik = new Animal('Nevil', 'dog');
console.log(sharik);
console.log('Type of Sharik: ' + sharik.type);
console.log('Sharik stepcount: ' + sharik.stepCount);
sharik.makeNoise();

grey = new Animal('Scabbers', 'rat');
console.log(grey);
console.log('Type of Grey: ' + grey.type);
console.log('Grey stepcount: ' + grey.stepCount);
grey.makeNoise();
