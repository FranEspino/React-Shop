import React from 'react';
import Curso from './curso'
import "./styles/style.scss"

//component basic with jsx
const App = () => (
<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://www.codeplatoon.org/wp-content/uploads/2019/04/close-up-code-codes-239898.jpg"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Fraporitmos</p>
        <p> Despega tu mente hoy mismo!</p>
        <a className="#" class="button">Suscribirse</a>
      </div>
    </div>
  </div>
 
</div>

 <div className="ed-grid m-grid-3">
       <Curso 
       title="Curso de Mysql con C++" 
       image = "https://i.ytimg.com/vi/Qz6d7pSDKv8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIbD5Em0iZzT96rkWay4FbveCs4A"
       image_man="https://instagram.ftru2-3.fna.fbcdn.net/v/t51.2885-15/e35/98069353_705801060254106_2254140806443672640_n.jpg?_nc_ht=instagram.ftru2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=kR35blvsQ6gAX8YJAz3&oh=72078598d33998f129fab66af943b3e4&oe=5EF695E6"
       price="40 SOLES"  
       />
  
        <Curso 
       title="Calculadora UI en C++" 
       image = "https://i.ytimg.com/vi/gi_uggEjNjw/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCsrAgw6dAzvp2r3e5DBiDS9Iq5Eg"
       image_man="https://instagram.ftru2-3.fna.fbcdn.net/v/t51.2885-15/e35/98069353_705801060254106_2254140806443672640_n.jpg?_nc_ht=instagram.ftru2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=kR35blvsQ6gAX8YJAz3&oh=72078598d33998f129fab66af943b3e4&oe=5EF695E6"
       price="25 SOLES"  
       />

      
  </div>
</>

  )


export default App;
/*
Reglas:
1 toda etiqueta debe cerrarse
2: Los componentes deben devolver un solo componente padre
3: Apoyarse de los fragments cuando necesito devolver más de un elemento
4: Fragment ó <> hijos </>
5: toda etiqueta siempre se cierran incluso imagenes
6: class => className
7: for => forhtml
*/