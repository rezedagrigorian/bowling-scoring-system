import styled from 'styled-components'

interface SAdminFormsProps {
  $oneColumn?: boolean;
}

export const SAdminForms = styled.div<SAdminFormsProps>`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 10px;
  row-gap: 30px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 0 auto;
    width: 800px;

    ${({ $oneColumn }) => $oneColumn && `
      grid-template-columns: 1fr;
      max-width: 400px;
    `}
  }
`;

export const SForm = styled.form`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: #FFF;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  padding: 20px;
  row-gap: 10px;
  width: 100%;
`;

export const SFormTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const SFormRow = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SFormInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #DDD;
  outline: none;
`;

export const SFormButton = styled.button`
  background-color: #353b48;
  border-radius: 5px;
  border: none;
  color: #FFF;
  cursor: pointer;
  font-size: 14px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2f3640;
  }
`;

export const SSelect = styled.select`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  outline: none;
`;