import { useState } from "react";
const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const HandleInputChange = ({target}) =>{
      //  console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        const value = inputValue.trim();

        if(value.length <= 1) return; //verificamos que no haya espacios en blanco


        //setCategories(categories=>[inputValue,...categories]);
        //cuidado que con llaves la callback devuelve undefinded
        //tambien se puede enviar la funcion, y ejecutar onAddCategory
        onNewCategory(value);
        setInputValue(''); //reset del value
    }


  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="" id="" placeholder="Buscar Gifs..." 
            value={inputValue} onChange={HandleInputChange}/> 
    {/* //aqui podemos obviar enviar el event, implicitamente se envia el event y luego podemos destructurarlo     */}
    </form>
    
  )
}

export default AddCategory
