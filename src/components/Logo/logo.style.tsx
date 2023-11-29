import styled from 'styled-components';

export const SLogo = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  padding-top: 20px;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`;

export const SImage = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;

  img {
    width: 180px;
    height: 100%;
  }
`;

export const SLogoTitle = styled.p`
  font-size: 30px;
  color: #fff;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 40px;
  }

  span {
    color: #FFD700;
  }
`;

