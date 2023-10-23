const validate = (input) => {
    let error = {};
    /* using Regular Expresions to validate the appropiate use */
    let validName = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9'’\s]+$/;
    ;
    let validUrl = /^(https?):\/\/[^\s/$.?#].[^\s]*\.(jpg|gif|png|jpeg)$/i;
  
    if (!input.name.length) {
      error.name = "This field cannot be empty";
    }
    if (!validName.test(input.name)) {
      error.name = "This characters are not allowed";
    }
    if (input.name.length >= 50) {
      error.name = "the name is too long";
    }
    if (input.image && !validUrl.test(input.image)) {
      error.image = "This is not a valid URL";
    }
    if (!input.description.length) {
      error.description = "This field cannot be empty";
    }
    if (input.description.length && input.description.length <= 40) {
      error.description = "This field must have at least 40 characters";
    }
    if (input.description.length >= 500) {
      error.description = "This field cannot be longer than 500 characters";
    }
    if (!input.released.length) {
      error.released = "This field cannot be empty";
    }
    if (
      !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(input.released)
    ) {
      error.released = "Choose a valid date";
    }
    if (!input.rating.length) {
      error.rating = "This field cannot be empty";
    }
  
    if (input.rating < 1 || input.rating > 5) {
      error.rating = "Rating must be between 1 and 5";
    }
    return error;
  };

  export default validate;