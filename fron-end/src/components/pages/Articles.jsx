import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { fetchAjax } from "../../helpers/fetchAjax";
import { ArticleList } from "./ArticleList";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [cargando, setCargando] = useState(true)

  const getArticles = async () =>{

    let url = Global.url+"articulos";

    const {datas, cargando} = await fetchAjax(url,"GET")

    if(datas.status == "success")
    setArticles(datas.articulos);

    setCargando(false);
  }

  useEffect(() => {
    
    getArticles();

  }, [articles]);

  return (
    <>
    {cargando ? "Esta cargando..." : 

      articles.length >= 1 ? <ArticleList articles={articles} setArticulos={setArticles} /> : <h1>No hay articulos</h1>
    
    }
    
    </>
  );
};
