import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    //console.log(isLoading);

    
   

  return (
    <>
       <h3>{category}</h3>

        {
            isLoading && (<h2>Cargando...</h2>)
        }

       <div className="card-grid">
            {/* {images.map(image=>(
                <li key={image.id}>{image.title}</li>))} */}
            {
                //tambien podemos propagar todas los elementos del objeto image mediante {...}
                //si tenemos mas de 100 props usar el propagador
                 images.map((image) => (
                     <GifItem key={image.id} 
                         {...image}
                      />
                 ))

                // images.map(({id,title,url})=>(
                //     <GifItem key={id} title={title} url={url}/>
                // ))
            }
       </div>
    </>
  )
}

export default GifGrid
