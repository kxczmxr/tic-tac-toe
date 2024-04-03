import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  let cont;
  let edit;
  if (isEditing) {
    cont = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    edit = "Save";
  } else {
    cont = <span className="player-name">{playerName}</span>;
    edit = "Edit";
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {cont}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick()}>{edit}</button>
    </li>
  );
}
