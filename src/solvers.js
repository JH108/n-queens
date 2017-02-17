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

  var findSolution = function(board, cols, row) {
    if (row === cols) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < cols; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(board, cols, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolution(board, n, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});

  var findSolution = function(board, cols, row) {
    if (row === cols) {
      return true;
    }

    for (var i = 0; i < cols; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        if (findSolution(board, cols, row + 1)) {
          return true;
        }
      }
      board.togglePiece(row, i);
    }
  };
  findSolution(solution, n, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var findSolution = function(board, cols, row) {
    if (row === cols) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < cols; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(board, cols, row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolution(board, n, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
