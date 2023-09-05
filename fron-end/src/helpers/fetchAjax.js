export const fetchAjax = async (url, method, saveData = "", archivos) => {
  let datas;
  let cargando = true;

  try {
    cargando = true;

    let options = {
      method: "GET",
    };

    if (method == "GET" || method == "DELETE") {
      options = {
        method: method,
      };
    }

    if (method == "POST" || method == "PUT") {
      let body = "";

      if(archivos){
        options = {
          method: method,
          body: saveData,
        };
      }else{
        options = {
          method: method,
          body: JSON.stringify(saveData),
          headers: {
            "Content-Type": "application/json",
          },
        }; 
        
      }
      
      
    }

    let peticion = await fetch(url, options);
     datas = await peticion.json();

    cargando = false;
  } catch {
    cargando = false;
  }

  return {
    datas,
    cargando,
  };
};
