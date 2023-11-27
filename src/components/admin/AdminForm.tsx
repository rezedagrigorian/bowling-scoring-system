import React from 'react';

import { IPlayer } from '../../types/player';

import AddPlayerForm from './AddPlayerForm';
import DeletePlayerForm from './DeletePlayerForm';
import GameForm from './GameForm';
import { SAdminForms } from './style';

interface AdminFormProps {
  players: Array<IPlayer>;
  setPlayers: (players: Array<IPlayer>) => void;
  addScore: (value: number) => void;
}

const AdminForm: React.FC<AdminFormProps> = ({ players, setPlayers, addScore }) => {
  return (
    <SAdminForms>
      <AddPlayerForm 
        players={players}
        setPlayers={setPlayers}
      />
      {players.length > 0 && (
        <DeletePlayerForm 
          players={players}
          setPlayers={setPlayers}
        />
      )}
      <GameForm addScore={addScore} />
    </SAdminForms>
  );
};

export default AdminForm;
