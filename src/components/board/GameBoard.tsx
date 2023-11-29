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
  SBoardTableZero,
  SBoardTableCellScores,
  SBoardTableCellScore
} from './board.style';

interface GameBoardProps {
  players: Array<IPlayer>;
  scores: {
    [key: string]: Array<IFrame>;
  };
  playerIndex: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ players = [], scores = {}, playerIndex }) => {
  const renderCell = (frame: IFrame | null, player: IPlayer, index: number) => {
    if (!frame) {
      return (
        <SBoardTableCell key={`${player.id}-${index}`} />
      );
    }

    return (
      <SBoardTableCell key={ `${player.id}-${index}` }>
        <SBoardTableCellScores>
          <SBoardTableCellScore>
            { frame.first === 10 ? 'X' : frame.first }
          </SBoardTableCellScore>
          {frame.second !== undefined && (
            <SBoardTableCellScore>
              { frame.second + frame.first === 10 ? '/' : frame.second }
            </SBoardTableCellScore>
          )}
          {frame.third !== undefined && (
            <SBoardTableCellScore>
              { frame.third }
            </SBoardTableCellScore>
          )}
        </SBoardTableCellScores>
        { frame.total }   
      </SBoardTableCell>
    );
  }

  const renderPlayerRow = (player: IPlayer, row: number) => {
    const cells = [];
    
    for (let i = 0; i < 10; i++) {
      const score = scores[player.id] && scores[player.id][i] && scores[player.id][i].first;
        cells.push(
          renderCell(score ? scores[player.id][i]: null, player, i)
        )
    }
    
    return (
      <SBoardTableRow key={player.id} $active={playerIndex === row}>
        <SBoardPlayerCell>
          { player.name }
        </SBoardPlayerCell>
        { cells }
      </SBoardTableRow>
    );
  };

  const renderHeader = () => {
    let headerCells = []
    for (let i = 0; i < 10; i++) {
      headerCells.push(
        <SBoardHeaderCell key={`header-${i}`}> { i + 1 } </SBoardHeaderCell>
      )
    }
    return (
      <SBoardTableRow>
        <SBoardTableZero/>
        { headerCells }
      </SBoardTableRow>
    );
  }

  const renderEmptyRow = (rowIndex: number) => {
    let cells = []
    for (let i = 0; i <= 10; i++) {
      cells.push(<SBoardTableCell key={`empty-row-${rowIndex}-${i}`} />)
    }
    return cells
  };

  const renderEmptyRows = (count: number) => {
    let rows = []
    for (let i = 0; i < count; i++) {
      rows.push(
        <SBoardTableRow key={`empty-row-${i}`}>
          {renderEmptyRow(i)}
        </SBoardTableRow>
      )
    }
    return rows
  };

  return (
    <SBoardWrapper>
      <SBoardTable border={1}>
        <SBoardTableHead>
          {renderHeader()}
        </SBoardTableHead>
        <SBoardTableBody>
          {players.map((player, i) => renderPlayerRow(player, i))}
          {renderEmptyRows(5 - players.length)}
        </SBoardTableBody>
      </SBoardTable>
    </SBoardWrapper>
  );
};

export default GameBoard;