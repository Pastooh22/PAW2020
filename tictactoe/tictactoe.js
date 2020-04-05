var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlElement = cell;
    }
    Cell.prototype.SetStatus = function (status) {
        this.cellValue = status;
        if (status === -1) {
            this.htmlElement.innerHTML = "O";
        }
        else if (status === 1) {
            this.htmlElement.innerHTML = "X";
        }
    };
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board() {
        this.currentSymbol = -1;
        this.cells = new Array(9);
        this.cells[0] = new Cell(document.getElementById("cell11"));
        this.cells[1] = new Cell(document.getElementById("cell12"));
        this.cells[2] = new Cell(document.getElementById("cell13"));
        this.cells[3] = new Cell(document.getElementById("cell21"));
        this.cells[4] = new Cell(document.getElementById("cell22"));
        this.cells[5] = new Cell(document.getElementById("cell23"));
        this.cells[6] = new Cell(document.getElementById("cell31"));
        this.cells[7] = new Cell(document.getElementById("cell32"));
        this.cells[8] = new Cell(document.getElementById("cell33"));
    }
    Board.prototype.makeMove = function (cellNumber) {
        this.cells[cellNumber].SetStatus(this.currentSymbol);
        this.currentSymbol = this.currentSymbol === -1 ? 1 : -1;
        return Board;
    };
    Board.prototype.let = function () {
        document.getElementById("cell11").innerHTML = "Hello World";
    };
    return Board;
}());
var board = new Board();
