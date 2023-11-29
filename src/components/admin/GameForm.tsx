import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { SForm, SFormTitle, SFormRow, SFormInput, SFormButton } from './admin.style';

interface GameFormProps {
  addScore: (value: number) => void;
}

const GameForm: React.FC<GameFormProps> = ({ addScore }) => {
  const [score, setScore] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedScore = parseInt(score);
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 10) {
      toast.error("Score must be a number between 0 and 10");
      return;
    }

    addScore(parsedScore);
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
