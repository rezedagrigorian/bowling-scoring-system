import React, { useState, useEffect } from 'react';
import AdminForm from './components/admin/AdminForm';

import { IPlayer } from './types/player';
import { IFrame } from './types/frame';

import { STopRow, SAppContainer } from './styles';
import GameBoard from './components/board/GameBoard';
import Logo from './components/Logo/Logo';

type GameScores = {
  [key: string]: Array<IFrame>;
}

const App = () => {
  const [players, setPlayers] = useState<Array<IPlayer>>([]);

  const [scores, setScores] = useState<GameScores>({});
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [currentRound, setCurrentRound] = useState<number>(0);

  useEffect(() => {
  }, [scores]);

  const gameStep = (value: number) => {
    const currentPlayer = players[currentPlayerIndex];

    const currentPlayersScores = scores[currentPlayer.id] || [];
    currentPlayersScores.push({
      first: value,
      second: 0,
    });
    setScores({
      ...scores,
      [currentPlayer.id]: currentPlayersScores,
    });

    if (currentPlayerIndex !== players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setCurrentPlayerIndex(0);
      setCurrentRound(currentRound + 1);
    }
  }

  return (
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
          round={currentRound}
        />
    </SAppContainer>
  );
}

export default App;
