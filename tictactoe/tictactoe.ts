enum State {
    Empty,
    X,
    O,
}

class Cell {
    state:State;   
    constructor() {
        this.state = State.Empty;
    }
    public SetState(s:State) {
        this.state = s;
    }
}

class Board {
    board:Array<Cell>;
    table:HTMLElement[];
    score:HTMLElement;
    p1Turn:boolean;
    p1Score:number;
    p2Score:number;

    constructor(t:HTMLElement[]) {
        this.table = t;
        this.p1Turn = true;
        this.board = [new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell];
        this.score = document.getElementById("score") as HTMLElement;
        this.p1Score = 0;
        this.p2Score = 0;
    }

    click(c:number) {
        
        if (this.board[c].state == State.Empty)
        {
            if (this.p1Turn)
            {
                this.board[c].SetState(State.X);
                this.table[c].innerHTML = "X";            
            }
            else
            {
                this.board[c].SetState(State.O);
                this.table[c].innerHTML = "O";            
            }
            if (this.hWin(this.board) || this.vWin(this.board) || this.dWin(this.board))
            {              
                if (this.p1Turn == true)
                {
                    this.p1Score++;
                }
                else
                {
                    this.p2Score++;
                }
                this.printScore();
                this.resetGame();
            }
            if (this.draw())
            {
                this.resetGame();
            }
        this.p1Turn = !this.p1Turn;
        }
        
    }

    hWin(b:Array<Cell>) {
        if (b[0].state == b[1].state && b[1].state == b[2].state && b[1].state != State.Empty ||
            b[3].state == b[4].state && b[4].state == b[5].state && b[4].state != State.Empty ||
            b[6].state == b[7].state && b[7].state == b[8].state && b[7].state != State.Empty )
            {
                return true;
            }            
        return false;
    }

    vWin(b:Array<Cell>) {
        if (b[0].state == b[3].state && b[3].state == b[6].state && b[3].state != State.Empty ||
            b[1].state == b[4].state && b[4].state == b[7].state && b[4].state != State.Empty ||
            b[2].state == b[5].state && b[5].state == b[8].state && b[5].state != State.Empty)
            {
                return true;
            }
            return false;
    }
    dWin(b:Array<Cell>) {
        if (b[0].state == b[4].state && b[4].state == b[8].state && b[4].state != State.Empty ||
            b[2].state == b[4].state && b[4].state == b[6].state && b[4].state != State.Empty)
            {
                return true;
            }
            return false;
    }
    draw() {
        for (var c in this.board)
        {
            if(this.board[c].state == State.Empty)
            {
                return false;
            }
        }
        return true;
    }
    resetGame() {
        for (let index = 0; index < this.board.length; index++)
        {
            this.table[index].innerHTML = "";
            this.board[index].SetState(State.Empty);
        }
    }
    printScore() {
        this.score.innerHTML = "Gracz 1: " + this.p1Score + "  Gracz 2: " + this.p2Score;
    }


}

window.onload = () => {
    let cell0 = <HTMLElement> document.getElementById("cell0");
    let cell1 = <HTMLElement> document.getElementById("cell1");
    let cell2 = <HTMLElement> document.getElementById("cell2");
    let cell3 = <HTMLElement> document.getElementById("cell3");
    let cell4 = <HTMLElement> document.getElementById("cell4");
    let cell5 = <HTMLElement> document.getElementById("cell5");
    let cell6 = <HTMLElement> document.getElementById("cell6");
    let cell7 = <HTMLElement> document.getElementById("cell7");
    let cell8 = <HTMLElement> document.getElementById("cell8");

    let buttonArray:HTMLElement[] = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7,  cell8];
    let game = new Board(buttonArray);

    for (let index = 0; index < buttonArray.length; index++) {
        buttonArray[index].addEventListener('click',  function() {game.click(index)});
        
    }
    
}