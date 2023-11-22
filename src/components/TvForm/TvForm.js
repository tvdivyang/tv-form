import React, { useEffect, useState } from "react";
import TvFormInput from "./TvFormInput";
import {
  FormInputsValidations,
  dataJsonValidation,
} from "../../validation/FormValidation";

const TvForm = ({ fromaData, submitButtonName, title, handleTvSubmit }) => {
  const [inpval, setInpval] = useState({});
  const [error, setErrors] = useState("");
  const [jsonError, setJsonError] = useState("");
  const data = fromaData || []

  useEffect(() => {
    let formErrors = dataJsonValidation(data);
    if (Object.keys(formErrors).length > 0) {
      setJsonError(formErrors);
    }

    if (!data) {
      throw new Error("Custom error message");
    }
  }, []);

  const handleChange = (name, value, isChecked, filesdata) => {
    setErrors({ ...error, [name]: null });
    setInpval((prevInputValues) => {
      if (isChecked) {
        return {
          ...prevInputValues,
          [name]: [...(prevInputValues[name] || []), value],
        };
      } else if (filesdata) {
        return {
          ...prevInputValues,
          [name]: [...(prevInputValues[name] || []), filesdata],
        };
      } else {
        return { ...prevInputValues, [name]: value };
      }
    });
  };

  const handleSubmit = () => {
    const requiredFields = data.filter((field) => field.required === "true");
    let formErrors = FormInputsValidations(inpval, requiredFields);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      handleTvSubmit(inpval);
      setErrors(""); // Clear any previous error
      setInpval({});
    }
  };
  return (
    <div>
      <form className="container align-items-center d-flex flex-column">
        <h4 className="m-5 text-center"> {title}</h4>
        {jsonError && (
          <h4 className="text-danger m-5 text-center"> {jsonError}</h4>
        )}
        <div className="mb-3 w-50">
          {!jsonError &&
            data?.map((item, index) => {
              return (
                <div key={index}>
                  <label className="form-label">{item?.label}</label>
                  {item?.required === "true" && (
                    <span className="text-danger">*</span>
                  )}
                  <TvFormInput
                    handleChange={handleChange}
                    type={item?.type}
                    name={item?.name}
                    className={item?.className}
                    options={item?.options}
                    src={item?.src}
                    width={item?.width}
                    height={item?.height}
                    alt={item?.alt}
                    min={item?.min}
                    max={item?.max}
                    pattern={item?.pattern}
                    placeholder={item?.placeholder}
                    required={item?.required}
                    error={error}
                  />
                </div>
              );
            })}
        </div>
        {submitButtonName && (
          <button
            type="button"
            className="btn btn-lg btn-block mb-3"
            style={{ backgroundColor: "#87d3ec" }}
            onClick={handleSubmit}
          >
            {submitButtonName}
          </button>
        )}
      </form>
    </div>
  );
};

export default TvForm;
