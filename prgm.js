var AntElement = "table-0";

var Prgm = {
	init: function(element, width) {
		table = "<table id="+AntElement+">";
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
		prepos: [0,0],
		pos: [0,0],
		setAt: function(line, col) {
			col--;
			line--;
			//window.alert(col + ", " + line + ", " + AntElement);
			document.getElementById(AntElement).childNodes[0].childNodes[col].childNodes[line].classList.add("ant");
			
		},
		move: function() {
			pos = document.getElementsByClassName("ant")[0];
			this.pos = [pos.getAttribute("line"), pos.getAttribute("col")];
			if(this.prepos[0] == 0 && this.prepos[1] == 0) {
				this.force(1, 0);
			} else if(pos.classList.contains("black")) {
				window.alert(this.prepos[0]+this.pos[0]+", "+this.prepos[1]+this.pos[1]);
				window.alert(this.prepos);
				//this.force();
			} else {
				window.alert(parseInt(this.prepos[0])+parseInt(this.pos[0])+", "+(parseInt(this.prepos[1])+parseInt(this.pos[1])));
				window.alert(this.prepos);
			}
			//window.alert(this.pos);
		},
		force: function(line, col) {
			//window.alert(line+", "+col);
			//window.alert((line+parseInt(this.pos[0]))+", "+(col+parseInt(this.pos[1])));
			pos = document.getElementsByClassName("ant")[0].classList.remove("ant");
			document.getElementById(AntElement).childNodes[0].childNodes[line+parseInt(this.pos[0])].childNodes[col+parseInt(this.pos[1])].classList.add("ant");
			this.prepos = this.pos;
		},
	}
}