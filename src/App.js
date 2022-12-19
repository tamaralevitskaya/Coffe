import { useState } from "react";
import { data } from "./data";
import { dataTwo } from "./data";
import "./App.css";

function App() {

  const [coffe, setCoffe] = useState(data);

  const [photo, setPhoto] = useState(0);

  const {image} = dataTwo[photo];

  const previousFoto = () => {
    setPhoto((photo => {
      photo --;
      if (photo < 0) {
      return dataTwo.length - 1;
      }
      return photo;
    }))
  }

  const nextFoto = () => {
    setPhoto((photo => {
      photo ++;
      if (photo > dataTwo.length -1) {
        photo = 0;
      }
      return photo;
    }))
  }



  return(
    <div>

    <div className="container">
      <img src={image} alt=""/>
    </div>

    <div className="container">
      <button className="next" onClick={previousFoto}>Назад</button>
      <button className="next" onClick={nextFoto}>Вперед</button>
    </div>

      <div className="container">
        <h1>Осталось {coffe.length} упаковок кофе!</h1>
      </div>
    
      {coffe.map((items => {
        const {id, item, description, price, image} = items;

        const removeCoffe = (id) => {
          let newCoffe = coffe.filter(item => item.id !== id);
          setCoffe(newCoffe)
        }

        return(
          <div key={id}>

            <div className="container">
              <img src={image} alt="" />
            </div>

            <div className="container">
              <h2> {item}</h2>
            </div>

            <div className="container">
              <h3>{description}</h3>
            </div>

            <div className="container">
              <p>{price}</p>
            </div>

            <div className="container">
              <button className="btn" onClick={() => removeCoffe(id)}>Remove</button>
            </div>
          </div>
        )
    }))}
    <div className="container">
      <button className="btn" onClick={() => setCoffe([])}>Remove all</button>
    </div>
    </div>
  )

}

export default App;