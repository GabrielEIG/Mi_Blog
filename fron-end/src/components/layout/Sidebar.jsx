import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

export const Sidebar = () => {
    const [search, setSearch] = useState();
    const navigate = useNavigate();

    const getSearch = (e) => {
        e.preventDefault();

        let mySearch = e.target.search_field.value;

        navigate("/buscar/"+ mySearch, {replace: true})

    }

  return (
    <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form onSubmit={getSearch}>
                    <input type="text" id="search_field" />
                    <input type="submit" id="search" value="Buscar" />
                </form>
            </div>

            {/* <div className="add">
                <h3 className="title">Añadir pelicula</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div> */}
        </aside>
  )
}
