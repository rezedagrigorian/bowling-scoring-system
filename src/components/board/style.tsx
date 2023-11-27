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
    background-color: rgba(254, 211, 48, 0.7);
  `}
`;

interface SBoardTableCellProps {
  $active?: boolean;
}

export const SBoardTableCell = styled.td<SBoardTableCellProps>`
  padding: 0;
  text-align: center;
  width: 60px;
  min-width: 60px;
  height: 40px;

  ${({ $active }) => $active && `
    background-color: rgba(32, 191, 107,1.0);
  `}
`;

export const SBoardHeaderCell = styled(SBoardTableCell)`
  font-weight: bold;
  font-size: 17px;
  width: unset;
  max-width: unset;
`;

export const SBoardPlayerCell = styled(SBoardHeaderCell)`
  padding: 0 20px;
  white-space: nowrap;
`;

export const SBoardTableZero = styled(SBoardHeaderCell)`
  background-color: #fed330;
`;
