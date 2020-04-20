/* eslint-disable no-sequences */
const { gameFlow,  } = require('./tic-tac-toe');

describe('gameFlow', () => {
    it('reset function set the position on game board', () => {
      expect(gameFlow.reset(0, 'X')).toBe(gameFlow.reset='X', '', '', '', '', '', '', '', '');
    });
  });