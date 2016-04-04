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
}
