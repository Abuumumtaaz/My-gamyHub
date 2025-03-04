import React, { useEffect, useState } from "react";
import ApiClient from "@/servises/Api-client";
import { Text } from "@chakra-ui/react";

interface FetchgameResponse {
  count: number;
  results: [];
}

interface Games {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchgameResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
