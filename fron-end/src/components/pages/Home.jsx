import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='jumbo'>
        <h1>Bienvenido a mi blog con react</h1>
        <p>Bienvenido a nuestro emocionante mundo de blogs! Nuestra plataforma MERN Stack te ofrece una experiencia única para explorar, crear y compartir contenido apasionante. Desde artículos informativos hasta historias inspiradoras, encuentra y publica tus blogs favoritos con facilidad. Únete a nuestra comunidad de escritores y lectores apasionados y descubre un lugar donde la creatividad y el conocimiento se encuentran en cada publicación. ¡Explora, aprende y comparte en nuestra plataforma MERN de blogs hoy mismo!</p>

        <h2>Dale click a "Articulos" para ver el contenido de este</h2>

        <Link to="/articulos" className='buttom'>Articulos</Link>
    </div>
  )
}
