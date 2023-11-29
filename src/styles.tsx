import styled from 'styled-components'

export const SAppContainer = styled.div`
  align-items: center;
  background: linear-gradient(243deg, #0C05E7 0%, #9B2FCD 100%);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 10px;
`;

export const STopRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 30px;
  min-width: 850px;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;
