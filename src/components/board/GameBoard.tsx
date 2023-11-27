import React from 'react';
import { IPlayer } from '../../types/player';
import { IFrame } from '../../types/frame';
import {
  SBoardWrapper,
  SBoardTable,
  SBoardTableHead,
  SBoardTableBody,
  SBoardTableCell,
  SBoardTableRow,
  SBoardHeaderCell,
  SBoardPlayerCell,
  SBoardTableZero
} from './style';

interface GameBoardProps {
  players: Array<IPlayer>;
  scores: {
    [key: string]: Array<IFrame>;
  };
  playerIndex: number;
  round: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ players = [], scores = {}, playerIndex, round }) => {
  const renderPlayerRow = (player: IPlayer, row: number) => {
    return (
      <SBoardTableRow key={player.id} $active={playerIndex === row}>
        <SBoardPlayerCell>
          { player.name }
        </SBoardPlayerCell>
        {Array.from({ length: 10 }, (_, i) => {
          const score = scores[player.id] && scores[player.id][i] && scores[player.id][i].first;
          return (
            <SBoardTableCell
              key={`${player.id}-${i}`}
              $active={ playerIndex === row && round === i }
            >
              { score || '' }
            </SBoardTableCell>
          );
        })}
      </SBoardTableRow>
    );
  };

  const renderHeader = () => {
    return (
      <SBoardTableRow>
        <SBoardTableZero/>
        {
          Array.from({ length: 10 }, (_, i) => (
            <SBoardHeaderCell key={`round-${i}`}>{i + 1}</SBoardHeaderCell>
          ))
        }
      </SBoardTableRow>
    );
  }

  const renderEmptyRow = (rowIndex: number) => (
    <SBoardTableRow key={`empty-${rowIndex}`}>
      <SBoardTableCell />
      {Array.from({ length: 10 }, (_, i) => (
        <SBoardTableCell key={`empty-${rowIndex}-${i}`} />
      ))}
    </SBoardTableRow>
  );

  return (
    <SBoardWrapper>
      <SBoardTable border={1}>
        <SBoardTableHead>
          {renderHeader()}
        </SBoardTableHead>
        <SBoardTableBody>
          {[...players, ...Array(Math.max(5 - players.length, 0))].map((player, i) => 
            player ? renderPlayerRow(player, i) : renderEmptyRow(i)
          )}
        </SBoardTableBody>
      </SBoardTable>
    </SBoardWrapper>
  );
};

export default GameBoard;