import React from 'react';

const Curso = ({title,image,price,image_man}) => (
<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
  <img src={image}  alt={title}/>
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      {title}
    </h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <div class="card__avatar s-mr-1">
          <div class="circle img-container">
            <img src={image_man}  alt={title}/>
          </div>
        </div>
        <span class="small">Fran Espino</span>
      </div>
    </div>
    <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="#">{price}</a>
    </div>
  </div>
</article>
)
export default Curso;

/*import React from 'react';
const curso = {
  "title":"Curso de c++ con MYSQL",
  "image":"https://i.ytimg.com/vi/Qz6d7pSDKv8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIbD5Em0iZzT96rkWay4FbveCs4A",
  "image_man" :"https://instagram.ftru2-3.fna.fbcdn.net/v/t51.2885-15/e35/98069353_705801060254106_2254140806443672640_n.jpg?_nc_ht=instagram.ftru2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=kR35blvsQ6gAX8YJAz3&oh=72078598d33998f129fab66af943b3e4&oe=5EF695E6",
  "price":"50 soles"
}
const persona = {"nombre":"Fran","Apellido":"Espino","Edad": 18 }
//almacenamos en la variable el valor de edad y retornas true o false
const mayordeEdad = edad => edad>=18
//es una cte curso que es igual a una función, no recibe nada y retorna el componente
const Curso = () => (
<article class="card">
<div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
  <img src="https://i.ytimg.com/vi/Qz6d7pSDKv8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIbD5Em0iZzT96rkWay4FbveCs4A" alt=""/>
</div>
<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
  <h3 class="t5 s-mb-2 s-center">
  {mayordeEdad(persona.Edad) ? "Soy mayor de edad" : "Soy menor de edad"}
  </h3>
  <div class="s-mb-2 s-main-center">
    <div class="card__teacher s-cross-center">
      <div class="card__avatar s-mr-1">
        <div class="circle img-container">
        //tenemos un elemento jsx que tiene dos propiedades : el src y el alt
          <img src={curso.image_man} alt={curso.title}/>
        </div>
      </div>
      <span class="small">Fran Espino</span>
    </div>
  </div>
  <div class="s-main-center">
    <a class="button--ghost-alert button--tiny" href="#">$ 20USD</a>
  </div>
</div>
</article>
)

export default Curso;*/