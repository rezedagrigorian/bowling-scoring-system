import styled from 'styled-components'

export const SForm = styled.form`
  background-color: #EEE;
  border-radius: 10px;
  border: 1px solid #DDD;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const SFormTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const SFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const SFormLabel = styled.label`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const SFormInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #DDD;
`;

export const SFormButton = styled.button`
  background-color: #333;
  color: #FFF;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #DDD;
  cursor: pointer;
`;

export const SSelect = styled.select`
  flex: 1;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #DDD;
`;