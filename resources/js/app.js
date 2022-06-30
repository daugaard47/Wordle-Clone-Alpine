import game from "./game";

document.addEventListener('alpine:init', () => {
    Alpine.data('game', () => game);
});


// VANILLA JS WAY TO GENERATE GRID
// let grid = document.querySelector('#game');
//
// let guessesAllowed = 4;
// let wordLength = 3;

// let fragment = document.createDocumentFragment();
//
// let generateGrid = () => {
//     Array.from({ length: guessesAllowed }).forEach(() => {
//         let row = document.createElement('div');
//         row.classList.add('row');
//
//         Array.from({ length: wordLength }).forEach(() => {
//             let tile = document.createElement('div');
//             tile.classList.add('tile');
//             row.appendChild(tile);
//         });
//         fragment.appendChild(row);
//     });
//     grid.appendChild(fragment);
// }
//
// //Initialize the game Generate the grid
// generateGrid();

// Key up event listener
// document.addEventListener('keyup', e => {
//     alert(e.key)
// });

