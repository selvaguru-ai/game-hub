import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-clients";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    //effect hook to send the fetch request to the back-end
  
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);
      apiClient
        .get<FetchResponse<T>>
            (endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) =>{
            setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err  instanceof CanceledError) return
        setError(err.message)});
        setLoading(false)

        return () => controller.abort()
    },deps ? [...deps] : []);

  return {data, error, isLoading};
};

export default useData