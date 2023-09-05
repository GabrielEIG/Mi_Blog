import React, { useState } from 'react'

export const useForm = (objetoInicial = {}) => {
    
    const [formulario, setFormulario] = useState(objetoInicial);


  const serializarFormulario = (newFormulario) => {
    const formData = new FormData(newFormulario);

    const objetoCompleto = {};

    for(let [name, value] of formData){
      objetoCompleto[name] = value;
    }

    return objetoCompleto;

  }

  const enviado = (e) => {
    e.preventDefault();

    // let curso = {
    //     titulo: target.titulo.value,
    //     anio: target.anio.value,
    //     descripcion: target.descripcion.value,
    //     autor: target.autor.value,
    //     email: target.email.value,
    // }

    let curso = serializarFormulario(e.target)

    setFormulario(curso)
  }

  const cambiado = ({target}) => {
    const {name, value} = target;

    setFormulario({
      ...formulario,
      [name]: value
    })

  }


    return {
        formulario,
        enviado,
        cambiado
    }
}
