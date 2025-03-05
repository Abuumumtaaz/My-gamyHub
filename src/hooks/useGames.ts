import ApiClient from "@/servises/Api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface FetchgameResponse {
    count: number;
    results: [];
  }
  
  export interface Game {
    id: number;
    name: string;
    background_image: string;
  }

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

      ApiClient.get<FetchgameResponse>("games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)});

        return () => controller.abort();
    }, []);

    return {  games, error }
}

export default useGames;

