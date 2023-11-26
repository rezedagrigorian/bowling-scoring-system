import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

import { IPlayer } from '../../types/player';
import { SForm, SFormTitle, SFormRow, SFormInput, SFormLabel, SFormButton } from './style';

interface AddPlayerFormProps {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
}

const AddPlayerForm: React.FC<AddPlayerFormProps> = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (playerName === "") {
      toast.error("Player name cannot be empty");
      return;
    }

    if (playerName.length > 20) {
      toast.error("Player name cannot be longer than 20 characters");
      return;
    }

    if (players.find((player) => player.name === playerName)) {
      toast.error("Player name already exists");
      return;
    }

    setPlayers([
      ...players, {
        name: playerName,
        id: uuid(),
      }
    ]);

    setPlayerName("");
    toast.success("Player added successfully");
  }

  return (
    <SForm onSubmit={handleSubmit}>
      <SFormTitle>Add player</SFormTitle>
      <SFormRow>
        <SFormLabel htmlFor="player_name">Player Name</SFormLabel>
        <SFormInput
          id="player_name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </SFormRow>
      <SFormButton type="submit">Add Player</SFormButton>
    </SForm>
  );
};

export default AddPlayerForm;
