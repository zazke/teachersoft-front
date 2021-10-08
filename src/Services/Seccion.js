import axios from "axios";

export const getAllSeccion = async() => {
  try{
    const response = await axios.get("http://52.200.33.206:8080/ciclo/");
    console.log("Promesa - GET de todas las Secciones")
    const { data } = response;
    return data;
  }
  catch(error){
    console.log(error.message);
  }
}

export const getIdSeccion = async ({id}) => {
  try {
    const response = await axios.get('http://52.200.33.206:8080/ciclo/${id}', id);
    console.log("Promesa - GET una sección por ID")
    const { data } = response;
    return data;
  }
  catch (error) {
    console.log(error.message);
  }
}