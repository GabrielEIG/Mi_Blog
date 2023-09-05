import React, { useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { fetchAjax } from '../../helpers/fetchAjax'
import {Link} from "react-router-dom";


export const ArticleList = ({articles, setArticulos}) => {

  const deleteArticle = async (id) =>{

    await fetchAjax(Global.url + "articulo/"+ id, "DELETE")
    let {datas, cargando} = await fetchAjax(Global.url + "articulos", "GET")

    setArticulos(datas.articulos)

    // if(deleteArticle.status === "success"){
    //   let updateData = articles.filter(article => ar)
    // }

  }

  useEffect(()=>{

  },[articles])

  return (
    <>
    
    {articles.map(article => {

        return(
          <article className="article-item" key={article._id}>
          <div className="mask">
            {article.imagen != "default.png" && <img src={Global.url + "imagen/" + article.imagen} />}
            {article.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" />}
          </div>
          <div className="data">
            <h3 className="title"><Link to={"/articulo/"+ article._id}>{article.titulo}</Link></h3>
            <p className="description">{article.contenido}</p>
  
            <Link to={"/editar/"+article._id} className="edit">Editar</Link>
            <button className="delete" onClick={()=>{
              deleteArticle(article._id)
            }}>Borrar</button>
          </div>
        </article>
        )
  
      })}

</>
  )
}
