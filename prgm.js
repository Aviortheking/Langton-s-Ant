var Prgm = {
	element: "table",
	setElement: function(elementName) {
		this.element = elementName;
		this.Ant.element= elementName;
	},
	init: function(element, width) {
		width++;
		table = "<table id="+this.element+">";
		for (t = 0; t < width; t++) {
			table += '<tr line="'+t+'">';
			for (i = 0; i < width; i++) {
				table += '<td col="'+i+'"></td>';
			}
			table += "</tr>";
		}
		element.innerHTML += table;
	},


	Ant: {
		element: "table",
		prepos: [0,0],
		pos: [0,0],
		setAt: function(line, col) {
			//console.log("Entering : Ant.setAt");
			col--;
			line--;
			document.getElementById(this.element).childNodes[0].childNodes[line].childNodes[col].classList.add("ant");
			this.pos = [line, col];
			this.prepos = [line+1, col];
		},
		move: function() {
			//console.log("Entering : Ant.move");
			//console.log("prepos : " + this.prepos + "\npos : " + this.pos);
			//console.log("Diff : "+(parseInt(this.prepos[0])-parseInt(this.pos[0]))+", "+(parseInt(this.prepos[1])-parseInt(this.pos[1])));
			if(document.getElementsByClassName("ant")[0].classList.contains("black")) {
				document.getElementsByClassName("ant")[0].classList.remove("black");
				//console.log("Black tile !\nSending : " + (parseInt(this.prepos[1])-parseInt(this.pos[1]))+", "+ (-(parseInt(this.prepos[0])-parseInt(this.pos[0]))));
				this.a(parseInt(this.prepos[1])-parseInt(this.pos[1]), -(parseInt(this.prepos[0])-parseInt(this.pos[0])));

			} else {
				document.getElementsByClassName("ant")[0].classList.add("black");
				//console.log("White tile !\nSending : " + (-(parseInt(this.prepos[1])-parseInt(this.pos[1])))+", "+ (parseInt(this.prepos[0])-parseInt(this.pos[0])));
				this.a(-(parseInt(this.prepos[1])-parseInt(this.pos[1])), parseInt(this.prepos[0])-parseInt(this.pos[0]));
			}
		},
		a: function(line, col) {
			//console.log("Entering : Ant.a");
			document.getElementsByClassName("ant")[0].classList.remove("ant");
			//console.log("Setting Ant Position to :\nLine : " + (line+parseInt(this.pos[0])) + "\nColumn : " + (col+parseInt(this.pos[1])) );
			document
				.getElementById(this.element)
				.childNodes[0]
				.childNodes[line+parseInt(this.pos[0])]
				.childNodes[col+parseInt(this.pos[1])]
				.classList
				.add("ant");
			this.prepos = this.pos;
			this.pos = [line+parseInt(this.prepos[0]), col+parseInt(this.prepos[1])];
		},


	}
}