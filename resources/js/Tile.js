export default class Tile {
    letter = '';
    status = ''; // correct, present, absent

    constructor(position) {
        this.position = position;
    }

    static updateStatusesForRow(row, theWord) {
        theWord = theWord.split('');
        //Check for the correct letters...
        for (let tile of row) {
            if (theWord[tile.position] === tile.letter) {
                tile.status = 'correct';
                theWord[tile.position] = null;
            }
        }
        //Check for present letters...
        for (let tile of row) {
            if (theWord.includes(tile.letter)) {
                tile.status = 'present';
                theWord[theWord.indexOf(tile.letter)] = null;
            }
        }
        //Check for remaining and absent letters...
        for (let tile of row.filter((tile) => !tile.status)) {
            tile.status = 'absent';
        }
    }


    updateStatus(theWord) {
        if (!theWord.includes(this.letter)) {
            return this.status = 'absent';
        }

        if (this.letter === theWord[this.position]) {
            return this.status = 'correct';
        }

        this.status = 'present';
    }

    fill(key) {
        this.letter = key;
    }

    empty() {
        this.letter = '';
    }
}
