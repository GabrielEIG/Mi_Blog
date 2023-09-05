import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { fetchAjax } from "../../helpers/fetchAjax";
import { ArticleList } from "./ArticleList";
import { useParams } from "react-router-dom";

export const Article = () => {
  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  const getArticle = async () => {
    let url = Global.url + "articulo/" + params.id;

    const { datas, cargando } = await fetchAjax(url, "GET");

    if (datas.status == "success") setArticle(datas.articulo);

    setCargando(false);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="jumbo">
      {cargando ? (
        "Esta cargando..."
      ) : article ? (
        <>
        <div className="mask">
            {article.imagen != "default.png" && <img src={Global.url + "imagen/" + article.imagen} />}
            {article.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" />}
          </div>
          <h1>{article.titulo}</h1>
          <span>{article.fecha}</span>
          <p>{article.contenido}</p>
          
        </>
      ) : (
        <h1>No hay articulos</h1>
      )}
    </div>
  );
};
