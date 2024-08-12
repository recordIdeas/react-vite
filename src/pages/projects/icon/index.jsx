import React, {useState, useEffect, useReducer, useDeferredValue, useCallback, memo} from 'react';

const row = 15;
const col = 15;
const number = 5;
const myWeight = [200, 400, 2000, 10000];
const AIWeight = [220, 420, 2200, 20000];
const [count, wins, lines] = getWinsLines(row, col, number);
const initialGameData = {
  currentMove: 0,
  history: [
    {
      squares: Array(row).fill(null).map(item => Array(col).fill(null)),
      myWin: Array(count).fill(0),
      AIWin: Array(count).fill(0),
      nextPlay: 'X'
    }
  ]
}

export default function Game() {
  const [gameData, dispatch] = useReducer(gameReducer, initialGameData);
  const deferredGameData = useDeferredValue(gameData);

  const addGamedata = useCallback((nextSquares, nextPosition)=>{
    dispatch({
      type: 'added',
      nextSquares,
      nextPosition
    });
  }, [dispatch]);

  const changeHistory = useCallback((historyItem)=>{
    dispatch({
      type: 'changeHistory',
      historyItem,
      nextPlay: historyItem.winner && historyItem.winner !== 'O' ? 'O' : 'X'
    });
  }, [dispatch]);

  const changeCurrentMove = useCallback((nextMove)=>{
    dispatch({
      type: 'changeCurrentMove',
      nextMove
    });
  }, [dispatch]);

  return (
    <div className="game">
      <div className="game-board">
        <Board history={gameData.currentMove === deferredGameData.currentMove ? deferredGameData.history : gameData.history}
               currentMove={gameData.currentMove}
               onPlay={addGamedata}
               autoPlay={changeHistory} />
      </div>

      <div className="game-info">
        <HistoryList history={gameData.currentMove === deferredGameData.currentMove ? deferredGameData.history : gameData.history}
                     currentMove={gameData.currentMove}
                     jumpTo={changeCurrentMove} />
      </div>
    </div>
  );
}

const HistoryList = memo(({ history, currentMove, jumpTo }) => {
  const [isAscending, setIsAscending] = useState(true);
  const nextPlay = history[currentMove].nextPlay;

  const moves = history.length === 1 ? null : history.map((item, move) => {
    let description;

    if (move === currentMove) {
      description = (nextPlay === 'X' ? 'Robot' : 'You') + ' are at ';

      if (move === 0) {
        description += 'game start';
      } else {
        const [pos_r, pos_c] = item.position;
        description += 'move (' + (pos_r + 1) + ', ' + (pos_c + 1) + ')';
      }

      return (
        <li key={move}>
          <small>{description}</small>
        </li>
      );
    }

    else {
      if (move === 0) {
        description = 'Go to game start';
      } else {
        const [pos_r, pos_c] = item.position;
        description = 'Go to move (' + (pos_r + 1) + ', ' + (pos_c + 1) + ')';
      }

      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    }
  });

  return (
    <>
      {moves && <label>
        <input type="checkbox" checked={isAscending} onChange={(e) => { setIsAscending(e.target.checked); }} />
        {isAscending ? 'Asc' : 'Desc'}
      </label>}
      {moves && isAscending && <ol key="moves">{moves}</ol>}
      {moves && !isAscending && <ol key="moves_reverse" reversed>{moves.reverse()}</ol>}
    </>
  )
});

const Board = memo(({ history, currentMove, onPlay, autoPlay }) => {
  const squares = history[currentMove].squares;
  const line = history[currentMove].line;
  const position = history[currentMove].position;
  const winner = history[currentMove].winner;
  const nextPlay = history[currentMove].nextPlay;
  const status = winner ? 'Winner: ' + winner : 'Next player: ' + nextPlay;

  useEffect(() => {
    var timer = setTimeout(() => {
      if (nextPlay === 'O') autoPlay(calculateWinner(history[currentMove]));
    });

    return () => {
      clearTimeout(timer);
    }
  }, [history, currentMove, nextPlay, autoPlay]);

  function handleClick(r, c) {
    if (winner || squares[r][c] || nextPlay === 'O') return;

    const nextSquares = squares.map(row => [...row]);
    nextSquares[r][c] = 'X';
    onPlay(nextSquares, [r, c]);
  }

  return (
    <>
      <div className="status">{status}</div>
      {squares.map((rowArr, c) =>
        <div className="board-row" key={c}>
          {rowArr.map((row, r) =>
            <Square key={r + c * rowArr.length}
              value={squares[r][c]}
              onSquareClick={() => handleClick(r, c)}
              squareMove={position && r === position[0] && c === position[1]}
              lineSucceed={line && squares[r][c] && line.some(item => r === item[0] && c === item[1])}
            />
          )}
        </div>
      )}
    </>
  );
});

function Square({ value, onSquareClick, squareMove, lineSucceed }) {
  return (
    <button className={'square' + (lineSucceed ? ' line' : squareMove ? ' move' : '')} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function gameReducer(gameData, action) {
  switch (action.type) {
    case 'added': {
      return {
        currentMove: gameData.currentMove + 1,
        history:  [
          ...gameData.history.slice(0, gameData.currentMove + 1),
          {
            ...gameData.history[gameData.currentMove],
            squares: action.nextSquares,
            position: action.nextPosition,
            nextPlay: 'O'
          }
        ]
      }
    }
    case 'changeHistory': {
      return {
        ...gameData,
        history: gameData.history.map((item, k) => {
          if (k === gameData.currentMove) {
            return {
              ...item,
              ...action.historyItem,
              nextPlay: action.nextPlay
            };
          } else {
            return item;
          }
        })
      }
    }
    case 'changeCurrentMove': {
      return {
        ...gameData,
        currentMove: action.nextMove
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function calculateWinner(data) {
  const { squares, position, myWin, AIWin } = data;
  const nextSquares = squares.map(row => [...row]);
  const [r, c] = position;
  const nextMyWin = [...myWin];
  const nextAIWin = [...AIWin];

  for (let k = 0; k < count; k++) {
    if (wins[r][c][k]) {
      nextMyWin[k]++;
      nextAIWin[k] = number + 1;
      if (nextMyWin[k] === number) {
        return {
          winner: 'X',
          line: lines[k]
        }
      }
    }
  }

  let myScore = nextSquares.map(row => row.map(col => 0));
  let AIScore = nextSquares.map(row => row.map(col => 0));
  let max = 0;
  let u = 0, v = 0;

  for (let i = 0; i < nextSquares.length; i++) {
    for (let j = 0; j < nextSquares[i].length; j++) {
      if (!nextSquares[i][j]) {
        for (let k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            if (nextMyWin[k] > 0 && nextMyWin[k] < number) {
              myScore[i][j] += myWeight[nextMyWin[k] - 1];
            }

            if (nextAIWin[k] > 0 && nextAIWin[k] < number) {
              AIScore[i][j] += AIWeight[nextAIWin[k] - 1];
            }
          }
        }

        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] === max) {
          if (AIScore[i][j] > AIScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (AIScore[i][j] > max) {
          max = AIScore[i][j];
          u = i;
          v = j;
        } else if (AIScore[i][j] === max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }
      }
    }
  }

  if(nextSquares[u][v]) return { winner: '平局' }

  nextSquares[u][v] = 'O';

  for (let k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      nextAIWin[k]++;
      nextMyWin[k] = number + 1;
      if (nextAIWin[k] === number) {
        return {
          winner: 'O',
          line: lines[k],
          squares: nextSquares,
          position: [u, v]
        }
      }
    }
  }

  return {
    squares: nextSquares,
    position: [u, v],
    myWin: nextMyWin,
    AIWin: nextAIWin
  }
}

function getWinsLines(row, col, number) {
  var wins = [];
  for (var i = 0; i < row; i++) {
    wins[i] = [];
    for (var j = 0; j < col; j++) {
      wins[i][j] = [];
    }
  }

  let count = 0;
  let lines = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i < col - (number - 1)) { //横线
        lines[count] = [];
        for (let k = 0; k < number; k++) {
          wins[i + k][j][count] = true;
          lines[count].push([i + k, j]);
        }
        count++;
      }

      if (j < col - (number - 1)) { //竖线
        lines[count] = [];
        for (let k = 0; k < number; k++) {
          wins[i][j + k][count] = true;
          lines[count].push([i, j + k]);
        }
        count++;
      }

      if (i < col - (number - 1) && j < col - (number - 1)) { //斜线
        lines[count] = [];
        for (let k = 0; k < number; k++) {
          wins[i + k][j + k][count] = true;
          lines[count].push([i + k, j + k]);
        }
        count++;
      }

      if (i < col - (number - 1) && j > (number - 1) - 1) { //反斜线
        lines[count] = [];
        for (let k = 0; k < number; k++) {
          wins[i + k][j - k][count] = true;
          lines[count].push([i + k, j - k]);
        }
        count++;
      }
    }
  }

  return [count, wins, lines];
}