class Cell {
	cellValue: number;
	htmlElement: HTMLElement;
	constructor(cell: HTMLElement) {
		this.htmlElement = cell;
	}

	SetStatus (status:number) {
		this.cellValue = status;
		if (status === -1) {
			this.htmlElement.innerHTML = "O";
		}
		else if (status === 1) {
			this.htmlElement.innerHTML = "X";
		}
	}
}

class Board {
	cells: Cell[];
	currentSymbol: number;

	constructor() {
		this.currentSymbol = -1;
		this.cells = new Array(9);
		this.cells[0] = new Cell (<HTMLElement>document.getElementById("cell11"));
		this.cells[1] = new Cell (<HTMLElement>document.getElementById("cell12"));
		this.cells[2] = new Cell (<HTMLElement>document.getElementById("cell13"));
		this.cells[3] = new Cell (<HTMLElement>document.getElementById("cell21"));
		this.cells[4] = new Cell (<HTMLElement>document.getElementById("cell22"));
		this.cells[5] = new Cell (<HTMLElement>document.getElementById("cell23"));
		this.cells[6] = new Cell (<HTMLElement>document.getElementById("cell31"));
		this.cells[7] = new Cell (<HTMLElement>document.getElementById("cell32"));
		this.cells[8] = new Cell (<HTMLElement>document.getElementById("cell33"));
	}
	makeMove(cellNumber: number) {
		this.cells[cellNumber].SetStatus(this.currentSymbol);
		this.currentSymbol = this.currentSymbol === -1 ? 1 : -1;
		return Board;
	}
	//clickHandler(){
	//	for(let i = 0; i< this.cells.length ; i++){
	//		this.??.addEventListener('click', ()=> board.makeMove())
	//	}
	//}
}
let board = new Board();



