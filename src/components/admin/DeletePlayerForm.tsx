import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { IPlayer } from '../../types/player';
import { SForm, SFormTitle, SFormRow, SSelect, SFormButton } from './style';

interface DeletePlayerFormProps {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
}

const DeletePLayerForm: React.FC<DeletePlayerFormProps> = ({ players, setPlayers }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<string>("default");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedPlayer === "default") {
      toast.error("Please select a player");
      return;
    }

    const updatedPlayers = players.filter((player) => player.id !== selectedPlayer);
    setSelectedPlayer("default");
    setPlayers(updatedPlayers);
    toast.success("Player deleted successfully");
  }

  return (
    <SForm onSubmit={handleSubmit}>
      <SFormTitle>Delete player</SFormTitle>
      <SFormRow>
        <SSelect value={selectedPlayer} onChange={(e) => setSelectedPlayer(e.target.value)}>
          <option value="default">Select Player</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </SSelect>
      </SFormRow>
      <SFormButton type="submit">Delete Player</SFormButton>
    </SForm>
  );
};

export default DeletePLayerForm;
