import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
//los hooks personalizados siempre deben llevar la palabra use..
//los hooks son funciones que regresan algo.

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //useEffect sirve para disparar efectos secundarios

    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages();
    },[]) // solo la primera vez si dejamos vacio el []

    return {
        images,
        isLoading,
    }
  
}

export default useFetchGifs
