import Tile from "./Tile";
import words from "./words/3-letter-words.js";
// Talks about loading more word files: https://laracasts.com/series/wordle-workshop/episodes/16
export default {
    // get random word from words array
    //words[Math.floor(Math.random() * words.length)]
//console.log(this.theWord),
    guessesAllowed: 6,
    theWord: words[Math.floor(Math.random() * words.length)],
    // theWord: 'cat',
    currentRowIndex: 0,
    state: 'active',
    errors: false,
    message: '',

    letters: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
    ],

    /***********
     * Getters *
     ***********/
    get currentRow() {
        return this.board[this.currentRowIndex];
    },

    get currentGuess() {
        return this.currentRow.map(tile => tile.letter).join('');
    },

    get remainingGuesses() {
        return this.guessesAllowed - this.currentRowIndex - 1
    },

    /******************************
     * Initialization of the game *
     ******************************/
    init() {
        this.board = Array.from({length: this.guessesAllowed}, () => {
            return Array.from({length: this.theWord.length}, (item, index) => new Tile(index));
        });
        console.log(this.theWord);
    },

    matchingTileForKey(key) {
        return this.board
            .flat()
            .filter((tile) => tile.status)
            .sort((t1, t2) => t2.status === 'correct')
            .find((tile) => tile.letter === key);
    },

    /*************************************
     * Handle the Key Press *
     * Only allow letters to be entered *
     *************************************/
    onKeyPress(key) {
        this.message = '';
        //this.state = 'active';
        this.errors = false;
        if (/^[A-z]$/.test(key)) {
            this.fillTile(key);
        } else if (key === 'Backspace' || key === 'Delete') {
            this.emptyTile();
        } else if (key === 'Enter') {
            this.submitGuess();
        }
    },

    /*****************************************************
     * Fill the tiles and rows to the length of the word *
     * Break to next row if the current row is full *
     *****************************************************/
    fillTile(key) {
        for (let tile of this.currentRow) {
            if (!tile.letter) {
                tile.fill(key);
                break;
            }
        }
    },

    /****************************************
     * On Backspace or Delete remove a tile *
     ***************************************/
    emptyTile() {
        for (let tile of [...this.currentRow].reverse()) {
            if (tile.letter) {
                tile.empty();
                break;
            }
        }
    },

    /********************
     * Submit the guess *
     **********************/
    submitGuess() {
        //Submit the guess and decide if we proceed
        if (this.currentGuess.length < this.theWord.length) {
            return;
        }

        if (!words.includes(this.currentGuess)) {
            this.errors = true;
            this.message = 'Not a word...';
            return;
        }

        // Update the tile colors
        Tile.updateStatusesForRow(this.currentRow, this.theWord);

        // Check if we have a winner by confirming all tiles are correct
        if (this.currentGuess === this.theWord) {
            this.state = 'complete';
            this.message = 'You win!';
        } else if (this.remainingGuesses === 0) {
            this.state = 'complete';
            this.message = 'Game over. You lose. The word was ' + this.theWord;
        } else {
            this.currentRowIndex++;
            this.message = 'Incorrect!';
        }
    }
};
