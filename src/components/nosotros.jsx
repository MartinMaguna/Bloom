import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <br />
        <p>Benvenidos a Amber, donde la esencia de cada momento se transforma en una experiencia inolvidable. En Amber, entendemos que la calidad de tus momentos cotidianos es tan importante como los eventos especiales en tu vida. Por eso, nos dedicamos a crear productos que acompañan tus momentos con fragancias cautivadoras y productos de cuidado personal que elevan tus sentidos.</p>
        <br />
        <p>En el corazón de nuestra filosofía se encuentra nuestro compromiso con la excelencia y la autenticidad. Cada vela aromática, aromatizador y crema cosmética de Amber se elabora con esmero, utilizando ingredientes de la más alta calidad para asegurar que disfrutes de una experiencia sensorial única.</p>
        <br />
        <p>Nuestro lema, "Amber, acompañando tus momentos", refleja nuestra pasión por enriquecer cada instante de tu vida. Ya sea que estés creando un ambiente acogedor en tu hogar con nuestras velas, disfrutando de una fragancia encantadora en tu espacio personal con nuestros aromatizadores, o cuidando tu piel con nuestras cremas cosméticas, Amber está ahí para hacer que cada momento sea especial.</p>
        <br />
        <p>Explora nuestro catálogo y descubre la magia de Amber. Únete a nosotros en este viaje aromático y sensorial, donde cada producto está diseñado con amor y dedicación para realzar la belleza de tus momentos diarios. ¡Bienvenido a Amber, donde la esencia de la vida cobra vida!</p>
    </div>
  )
}

export default Nosotros