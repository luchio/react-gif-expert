import { useState } from "react";
import {AddCategory, GifGrid} from "./components/index.js";
//import AddCategory from "./components/AddCategory";
 //no se especifica index.js
//import GifGrid from "./components/GifGrid"; es mucho mejor un archivo de barril para tener todas las importaciones en un solo lugar index.js

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const OnAddCategory = (newCategory) =>{
        

        if(categories.includes(newCategory)) return;


        setCategories([newCategory,...categories]) 
        //no es bueno usar push, porque muta los objetos y estamos usando conts es mejor usar spread operator
        //setCategories(cat=>[...cat, 'Valorant']); otra forma mediante una callback
        
    }

  return (
    <>
        {/* titulo */}
      <h1>Gif Expert App</h1>
        
        {/* Input */}
        <AddCategory 
        //setCategories = {setCategories} no es bueno hacer esto
        onNewCategory= {OnAddCategory}
        />

        
        {/* Listado de Gif */}
       
            { categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))}
            
        
        
    </>
  )
}

export default GifExpertApp
