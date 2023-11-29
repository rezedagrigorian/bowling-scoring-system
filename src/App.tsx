import React, { useState, useEffect, useRef } from 'react';
import AdminForm from './components/admin/AdminForm';

import { toast } from 'react-toastify';
import Confetti from 'react-confetti';

import { IPlayer } from './types/player';
import { IFrame } from './types/frame';

import { STopRow, SAppContainer } from './styles';
import GameBoard from './components/board/GameBoard';
import Logo from './components/logo/Logo';

type GameScores = {
  [key: string]: Array<IFrame>;
}

const App = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  const [players, setPlayers] = useState<Array<IPlayer>>([]);
  const [playerListChanged, setPlayerListChanged] = useState<boolean>(false);

  const [scores, setScores] = useState<GameScores>({});
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(0);

  const resetScoreBoard = () => {
    setScores({});
    setCurrentPlayerIndex(0);
    setCurrentRound(0);
  }

  useEffect(() => {
    if (players.length > 0 || playerListChanged) {
      setPlayerListChanged(true);
      resetScoreBoard();
      toast.warning("Players list changed, resetting the game");
    }
  }, [players]);
  
  const nextPlayer = () => {
    if (currentPlayerIndex !== players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      if (currentRound === 9) {
        gameIsOver();
        return;
      }
      setCurrentPlayerIndex(0);
      setCurrentRound(currentRound + 1);
    }
  }

  const gameIsOver = () => {
    toast.success('Game is over! The scoreboard will be reset in 5 seconds');

    setAnimation(true);
    setTimeout(() => {
      resetScoreBoard();
      setAnimation(false);
    }, 5000);
  }

  const recalculateTotalScores = (frames: IFrame[]) : IFrame[] => {
    // step 1: calculate totals for each frame
    const framesTotals = frames.map((frame, index) => {
      const nextFrame = frames[index + 1];
      const nextNextFrame = frames[index + 2];

      let total = 0;
      if (index === 9) {
        total = frame.first + (frame.second ? frame.second : 0)  + (frame.third ? frame.third : 0);
      } else if (frame.first === 10) {
        if (nextFrame && nextNextFrame) {
          total = frame.first + nextFrame.first + (nextFrame.second ? nextFrame.second : nextNextFrame.first);
        } else if (nextFrame) {
          total = frame.first + nextFrame.first + (nextFrame.second ? nextFrame.second : 0);
        } else {
          total = frame.first;
        }
      } else if (frame.second && (frame.first + frame.second === 10)) {
        total = frame.first + frame.second + (nextFrame ? nextFrame.first : 0);
      } else {
        total = frame.first + (frame.second ? frame.second : 0);
      }

      return {
        ...frame,
        total,
      };
    });

    // step 2: recalculate totals for each frame with previous frames
    const result = framesTotals.map((frame, index) => {
      if (index === 0) {
        return frame;
      }
      return {
        ...frame,
        total: framesTotals.slice(0, index + 1).reduce((acc, frame) => acc + frame.total, 0)
      };
    });

    return result;
  }

  const gameStep = (value: number) => {
    const currentPlayer = players[currentPlayerIndex];

    let currentPlayersScores = scores[currentPlayer.id] || [];
    if (currentPlayersScores.length === currentRound) {
      currentPlayersScores.push({
        first: value,
      });
      if (value === 10 && currentRound !== 9) {
        nextPlayer();
      }
    } else {
      if (currentRound === 9) {
        if (currentPlayersScores[currentRound].second === undefined) {
          currentPlayersScores[currentRound].second = value;
          if ((value + currentPlayersScores[currentRound].first !== 10) && currentPlayersScores[currentRound].first !== 10) {
            nextPlayer();
          }
        } else {
          currentPlayersScores[currentRound].third = value;
          nextPlayer();
        }
      } else {
        currentPlayersScores[currentRound].second = value;
        nextPlayer();
      }
    }

    const updatedScores = {
      ...scores,
      [currentPlayer.id]: currentPlayersScores,
    };
    const updatedScoresWithTotals = {
      ...updatedScores,
      [currentPlayer.id]: recalculateTotalScores(currentPlayersScores),
    };

    setScores(updatedScoresWithTotals);
  }

  return (
    <>
      <SAppContainer>
          <STopRow>
            <Logo />
            <AdminForm
              players={players}
              setPlayers={setPlayers}
              addScore={gameStep}
            />
          </STopRow>
        <GameBoard
            players={players}
            scores={scores}
            playerIndex={currentPlayerIndex}
          />
      </SAppContainer>
      <Confetti
        width={document.body.clientWidth}
        height={document.body.clientHeight}
        numberOfPieces={300}
        recycle={animation}
      />
    </>
  );
}

export default App;
