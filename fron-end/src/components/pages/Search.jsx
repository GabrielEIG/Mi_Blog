import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { fetchAjax } from "../../helpers/fetchAjax";
import { ArticleList } from "./ArticleList";
import { useParams } from "react-router-dom";

export const Search = () => {
  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  const getArticles = async () =>{
        let url = Global.url+"buscar/" + params.busqueda;

    const {datas, cargando} = await fetchAjax(url,"GET")

    if(datas.status == "success")
    setArticles(datas.articulos);
    else
    setArticles("")


    setCargando(false);

  }

  useEffect(() => {
    getArticles();

  }, [params]);

  return (
    <>
    {cargando ? "Esta cargando..." : 

      articles.length >= 1 ? <ArticleList articles={articles} setArticulos={setArticles} /> : <h1>No hay articulos</h1>
    
    }
    
    </>
  );
};
