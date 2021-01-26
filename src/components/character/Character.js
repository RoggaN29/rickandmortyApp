import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useFetchCharacterDetail } from "../../hooks/useFetchCharacters";
import { CharacterCardDetail } from "../ui/CharacterCardDetail";

export const Character = ({ history }) => {
  const params = useParams();

  const characterDetail = useFetchCharacterDetail(Number(params.id));

  const handleBack = () => {
    history.push("/");
  };

  if (characterDetail.status === 404) {
    // handleBack();
    return <Redirect to="/" />;
  }

  return (
    <div className="main--wrapper">
      <CharacterCardDetail characterDetail={characterDetail} />
      <div className="button-wapper">
        <button onClick={handleBack}>Regresar</button>
      </div>
    </div>
  );
};
