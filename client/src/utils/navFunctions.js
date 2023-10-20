//Activa si se presiona Enter
const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };


  export {
    handleKeyPress
  }