/* eslint-disable no-sequences */
const { gameFlow, Player }= require('./tic-tac-toe');

const player1 = Player("player1", "X", "#add8e6");
const player2 = Player("player2", "O", "#ffa07a");
let currentPlayer = player1;

  describe('game winning patterns', () => {
    it('check first row for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[0]
      ).toStrictEqual([1, 2, 3]);
    });
  
    it('check second row for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[0]
      ).not.toStrictEqual([4, 5, 6]);
    });

    it("check first row for win pattern on the game board", () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[1]
      ).toStrictEqual([4, 5, 6]);
    });
  
    it('check third row for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[2]
      ).toStrictEqual([7, 8, 9]);
    });
  
    it('check first column for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[3]
      ).toStrictEqual([1, 4, 7]);
    });
  
    it('check second column for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[4]
      ).toStrictEqual([2, 5, 8]);
    });
  
    it('check third column for win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[5]
      ).toStrictEqual([3, 6, 9]);
    });
  
    it('check for first diagonal win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[6]
      ).toStrictEqual([1, 5, 9]);
    });
  
    it('check for second diagonal win pattern on the game board', () => {
      expect(
        gameFlow()
          .checkWinner()
          .getWinPattern()[7]
      ).toStrictEqual([3, 5, 7]);
    });

    describe('players', () => {
      it('player1', () => {
        expect(player1.name).toBe("player1");
      expect(player1.score).toBe(0);
      expect(player1.array).toBeDefined();
      expect(player1.win).toBe(false);
      expect(player1.symbol).toBe("X");
      expect(player1.color).toBe("#add8e6");
      });
    
      it('player2', () => {
        expect(player2.name).toBe("player2");
      expect(player2.score).toBe(0);
      expect(player2.array).toBeDefined();
      expect(player2.win).toBe(false);
      expect(player2.symbol).toBe("O");
      expect(player2.color).toBe("#ffa07a");
      });

      describe('checkWinner', () => {
        const player1 = Player(currentPlayer.color, currentPlayer.symbol);
        const player2= Player(currentPlayer.color, currentPlayer.symbol);
        player1.array = [];
        player2.array = [];
        moves = 0;
      
        it('select current player', () => {
          expect(currentPlayer.color && currentPlayer.name).toBe(player1);
        });
      
        it('player turn', () => {
          const playerSwitch() => {
            if (!player1.win) {
          expect(playerSwitch()).toBe(player2);
            }
            if (!player2.win) {
              expect(playerSwitch()).toBe(player1);
            }
          }
        });
      
        it('game winner', () => {
          expect(currentPlayer.win).toBe(true);
        });


    });










  });