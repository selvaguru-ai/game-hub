import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { Game } from "./useGames";
import apiClient from "../services/api-clients";

interface Genre{
    id:number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}
const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    //effect hook to send the fetch request to the back-end
  
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);
      apiClient
        .get<FetchGenresResponse>
            ("/genres", {signal: controller.signal})
        .then((res) =>{
            setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err  instanceof CanceledError) return
        setError(err.message)});
        setLoading(false)

        return () => controller.abort()
    },[]);
  return {genres, error, isLoading};
};

export default useGenres