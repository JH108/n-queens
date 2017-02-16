/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//[0,0]
//[0,0]
window.rookBoardPopulator = function(n, board, row) {
  var rows = board.rows();
  var counter = 0;
  for (var i = 0; i < n + row; i++) {
    // if (n === n + row) board = new Board()
    board.togglePiece(row, i);
    if (board.hasAnyRooksConflicts()) {
      board.togglePiece(row, i);
      continue;
    }
    if (n - 1) {
      counter += rookBoardPopulator(n - 1, board, row + 1);
      board.togglePiece(row, i);
    } else {
      board.togglePiece(row, i);
      counter++;
    }
  }
  return counter;
};
// creating a new board mihgt cause memory issues
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});

  for (var i = 0; i < n; i++) {
    for (var x = 0; x < n; x++) {
      solution.togglePiece(i, x);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, x);
      } else {
        break;
      }
    }
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  /*for (var i = 0; i < n; i++) {
    this.findNRooksSolution(n, i, solutionCount);
  }
*/
  /*var solution = new Board({n: n});
  solution.togglePiece(0, y);
  for (var i = 0; i < n; i++) {
    for (var x = 0; x < n; x++) {
      solution.togglePiece(i, x);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i, x);
      }
    }
  }
  solutionCount++;*/
  solutionCount = rookBoardPopulator(n, board, 0);

  /*solutionCount = n;
  for (i = 2; i < n; i++) {
    solutionCount *= i;
  }*/

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  for (var i = 0; i < n; i++) {
    for (var x = 0; x < n; x++) {
      if (i === 0 && x === 0) {
        x++;
      }
      solution.togglePiece(i, x);
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(i, x);
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
