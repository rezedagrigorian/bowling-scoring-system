import React, { useState } from 'react';

import { SForm, SFormTitle, SFormRow, SFormInput, SFormButton } from './style';

interface GameFormProps {
  addScore: (value: number) => void;
}

const GameForm: React.FC<GameFormProps> = ({ addScore }) => {
  const [score, setScore] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check value is correct
    addScore(parseInt(score));
    setScore("");
  }

  return (
    <SForm onSubmit={handleSubmit}>
      <SFormTitle>Add score</SFormTitle>
      <SFormRow>
        <SFormInput
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Score"
        />
      </SFormRow>
      <SFormButton type="submit">Go go go!</SFormButton>
    </SForm>
  );
};

export default GameForm;
