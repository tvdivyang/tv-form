export const FormInputsValidations = (input, requiredFields) => {
  const errors = {};
  requiredFields.forEach((field) => {
    if (!input[field.name]) {
      errors[field.name] = field.requiredMessages || "Required field";
    }
  });
  return errors;
};

export const dataJsonValidation = (data) => {
  var errors = "";
  data.map((field) => {
    if (!field.name || !field.type) {
     return errors = "name and type must be required in json data!";
    }
  });
  return errors;
};
