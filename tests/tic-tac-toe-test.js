/* eslint-disable no-sequences */
const { gameFlow  } = require('./tic-tac-toe');

describe('gameFlow', () => {
    it('reset function to set the position on game board', () => {
      expect(gameFlow.reset(winingCompositions)).toBe(gameFlow.reset='X', '', '', '', '', '', '', '', '');
    });
  });

  describe('game winning patterns', () => {
    it('check first row for win pattern on the game board', () => {
      const gameFlow = ['X', 'X', 'X', '', '', '', '', '', ''];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([1, 2, 3]);
    });
  
    it('check second row for win pattern on the game board', () => {
      const gameFlow = ['', '', '', 'O', 'O', 'O', '', '', ''];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([4, 5, 6]);
    });
  
    it('check third row for win pattern on the game board', () => {
      const gameFlow = ['', '', '', '', '', '', 'X', 'X', 'X'];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([7, 8, 9]);
    });
  
    it('check first column for win pattern on the game board', () => {
      const gameFlow = ['X', '', '', 'X', '', '', 'X', '', ''];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([[1, 4, 7]]);
    });
  
    it('check second column for win pattern on the game board', () => {
      const gameFlow = ['', 'O', '', '', 'O', '', '', 'O', ''];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([2, 5, 8]);
    });
  
    it('check third column for win pattern on the game board', () => {
      const gameFlow = ['', '', 'X', '', '', 'X', '', '', 'X'];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([3, 6, 9]);
    });
  
    it('check for first diagonal win pattern on the game board', () => {
      const gameFlow = ['O', '', '', '', 'O', '', '', '', 'O'];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([1, 5, 9]);
    });
  
    it('check for second diagonal win pattern on the game board', () => {
      const gameFlow = ['', '', 'X', '', 'X', '', 'X', '', ''];
      expect(gameFlow.checkWinner(winingCompositions)).toBe([3, 5, 7]);
    });
  })