import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { fetchAjax } from "../../helpers/fetchAjax";
import { Global } from "../../helpers/Global";

export const Create = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [result, setResult] = useState(false);

  const articleSave = async (e) =>{
    e.preventDefault()
    const dataForm = formulario;

    const {datas, cargando} = await fetchAjax(Global.url+"crear", "POST", dataForm);



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

  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <h2>Formulario para crear articulo</h2>
      {/* <pre>{JSON.stringify(formulario)}</pre> */}
      <h1><strong>{result ? "Articulo guadado" : ""}</strong></h1>

      <form className="form" onSubmit={articleSave}>
        <div className="form-group">
          

          <label htmlFor="title">Titulo</label>
          <input type="text" name="titulo" onChange={cambiado}/>
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado}/>
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file"/>
        </div>

        <input type="submit" name="save" className="btn btn-succes" />
      </form>
    </div>
  );
};
