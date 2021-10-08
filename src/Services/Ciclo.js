import axios from "axios";

export const getAllCiclos = async () => {
  
  try {
    const response = await axios.get("http://52.200.33.206:8080/ciclo/");
    console.log("Promesa - GET de todos los Ciclos")
    const { data } = response;
    console.log(data);
    return data;  
  }
  catch (error) {
    console.log(error.message);
  }

}

export const addCiclo = async (newObject) => {
  try {
    const response = await axios.post("http://52.200.33.206:8080/ciclo/", newObject); 
    //const { data } = response;
    console.log(response.data);
    return (response.data)
  }
  catch (error) {
    console.log(error.message);
  }
}