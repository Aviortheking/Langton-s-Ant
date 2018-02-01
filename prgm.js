var Prgm = {
	element: "table",
	setElement: function(elementName) {
		this.element = elementName;
		this.Ant.element= elementName;
	},
	init: function(element, width) {
		table = "<table id="+this.element+">";
		for (t = 0; t < width; t++) {
			table += "<tr>";
			for (i = 0; i < width; i++) {
				table += '<td col="'+t+'" line="'+i+'"></td>';
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
			col--;
			line--;
			//window.alert(col + ", " + line + ", " + AntElement);
			document.getElementById(this.element).childNodes[0].childNodes[col].childNodes[line].classList.add("ant");
			pos = document.getElementsByClassName("ant")[0];
			this.pos = [pos.getAttribute("line"), pos.getAttribute("col")];
			this.prepos = this.pos;
			this.prepos[0] = this.pos[0] - 1;
		},
		move: function() {
				window.alert(parseInt(this.prepos[0])+parseInt(this.pos[0])+", "+(parseInt(this.prepos[1])+parseInt(this.pos[1])));

			if(pos.classList.contains("black")) {
				//window.alert(this.prepos[0]+this.pos[0]+", "+this.prepos[1]+this.pos[1]);
				//window.alert(this.prepos);
				this.a();
			} else {
				//window.alert(parseInt(this.prepos[0])+parseInt(this.pos[0])+", "+(parseInt(this.prepos[1])+parseInt(this.pos[1])));
				//window.alert(this.prepos);
			}
			//window.alert(this.pos);
		},
		a: function(line, col) {
			//window.alert(line+", "+col);
			//window.alert((line+parseInt(this.pos[0]))+", "+(col+parseInt(this.pos[1])));
			pos = document.getElementsByClassName("ant")[0].classList.remove("ant");
			document
				.getElementById(this.element)
				.childNodes[0]
				.childNodes[line-1+parseInt(this.prepos[0])]
				.childNodes[col-1+parseInt(this.prepos[1])]
				.classList
				.add("ant");
			this.prepos = this.pos;
		},
	}
}