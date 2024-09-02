import useData from "./useData";

export interface SortOrders{
    id:number;
    name: string;
    image_background: string;
}

const useSortOrder = () =>{
    return useData<SortOrders>('/genres')
};

export default SortOrders;