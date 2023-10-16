
const formatFields = (data) => {
    if (Array.isArray(data)) {
      return data.join(', ');
    }
     // Esta funcion es para formatear 
     //la data dando espacios a las palabras
  };

export {
    formatFields
};