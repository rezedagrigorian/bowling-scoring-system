import styled from 'styled-components';

export const SBoardWrapper = styled.div`
  color: #FFF;
  padding: 20px 0;
  margin: 10px auto 0;
  overflow-x: auto;
  max-width: 100%;
`;

export const SBoardTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const SBoardTableHead = styled.thead`
  background-color: #1e3799;
  padding: 10px;
`;

export const SBoardTableBody = styled.tbody`
  background: -webkit-linear-gradient(135deg, #1b1464,#0652dd);
`;

interface SBoardTableRowProps {
  $active?: boolean;
}

export const SBoardTableRow = styled.tr<SBoardTableRowProps>`
  ${({ $active }) => $active && `
    background-color: rgba(254, 211, 48, 0.2);
  `}
`;

interface SBoardTableCellProps {
  $active?: boolean;
}

export const SBoardTableCell = styled.td<SBoardTableCellProps>`
  font-weight: bold;
  height: 60px;
  min-width: 80px;
  padding: 20px 0 0;
  position: relative;
  text-align: center;
  width: 60px;
`;

export const SBoardHeaderCell = styled(SBoardTableCell)`
  font-size: 17px;
  font-weight: bold;
  height: 80px;
  max-width: unset;
  padding: 0;
  width: unset;
`;

export const SBoardPlayerCell = styled(SBoardHeaderCell)`
  padding: 0 20px;
  white-space: nowrap;
`;

export const SBoardTableZero = styled(SBoardHeaderCell)`
  background-color: #fed330;
`;

export const SBoardTableCellScores = styled.div`
  display: flex;
  position: absolute;
  right: 2px;
  top: 2px;
`;

export const SBoardTableCellScore = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  margin-left: 2px;
  width: 20px;
`;