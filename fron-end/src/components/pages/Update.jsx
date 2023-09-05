import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { fetchAjax } from "../../helpers/fetchAjax";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const Update = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [result, setResult] = useState(false);
  const [article, setArticle] = useState({});
  const params = useParams();

  const getArticle = async () => {
    let url = Global.url + "articulo/" + params.id;

    const { datas } = await fetchAjax(url, "GET");

    if (datas.status == "success") setArticle(datas.articulo);

  };

  const articleUpdate = async (e) =>{
    e.preventDefault()
    const dataForm = formulario;

    const {datas, cargando} = await fetchAjax(Global.url+"articulo/"+ params.id, "PUT", dataForm);



    if(datas.status === "success"){
      setResult(true);


      const fileForm = document.querySelector("#file");

      const formData = new FormData();

      formData.append('file0',fileForm.files[0]);

      const subida = await fetchAjax(Global.url+"subir-imagen/"+datas.articulo._id, "POST", formData,true);

        if(subida.datas)
          setResult(true)
        
    }else
    setResult(false)

  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="jumbo">
      <h1>Editar articulo</h1>
      <p>Formulario para editar :{article.titulo}</p>
      {/* <pre>{JSON.stringify(formulario)}</pre> */}
      <h1><strong>{result ? "Articulo guadado" : ""}</strong></h1>

      <form className="form" onSubmit={articleUpdate}>
        <div className="form-group">
          

          <label htmlFor="title">Titulo</label>
          <input type="text" name="titulo" defaultValue={article.titulo} onChange={cambiado}/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenido</label>
          <textarea type="text" name="contenido" defaultValue={article.contenido} onChange={cambiado}/>
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <div className="mask">
            {article.imagen != "default.png" && <img src={Global.url + "imagen/" + article.imagen} />}
            {article.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" />}
          </div>
          <input type="file" name="file0" id="file"/>
        </div>

        <input type="submit" name="save" className="btn btn-succes" />
      </form>
    </div>
  );
};
