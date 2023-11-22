import React from "react";

const TvFormInput = ({
  type,
  options,
  handleChange,
  name,
  src,
  alt,
  width,
  height,
  min,
  max,
  className,
  pattern,
  placeholder,
  error,
}) => {
  return (
    <>
      {type === "select" ? (
        <div>
          <select
            className={`form-control mb-3${className ? ` ${className}` : ""}`}
            onChange={(e) => {
              handleChange(name, e.target.value);
            }}
            name={name}
          >
            <option value="select option"> select option</option>
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : type === "radio" ? (
        <div>
          {options?.map((option, index) => (
            <div key={index}>
              <input
                className={`me-2 mb-3${className ? ` ${className}` : ""}`}
                type="radio"
                name={name}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value);
                }}
                value={option}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ) : type === "checkbox" ? (
        <div>
          {options?.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={name}
                value={option}
                className={`me-2 mb-3${className ? ` ${className}` : ""}`}
                onChange={(e) => {
                  handleChange(e.target.name, e.target.value, e.target.checked);
                }}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ) : type === "color" ? (
        <div>
          <input
            className={`mb-3${className ? ` ${className}` : ""}`}
            type="color"
            onChange={(e) => {
              handleChange(name, e.target.value);
            }}
            name={name}
          />
        </div>
      ) : type === "tel" ? (
        <div>
          <input
            className={`form-control mb-3${className ? ` ${className}` : ""}`}
            type="tel"
            placeholder={placeholder}
            pattern={pattern}
            onChange={(e) => {
              handleChange(name, e.target.value);
            }}
            name={name}
          />
        </div>
      ) : (
        <p>
          <input
            className={`${!min ? "form-control mb-3" : ""} ${
              className ? ` ${className}` : ""
            }`}
            type={type}
            onChange={(e) =>
              handleChange(name, e.target.value, false, e.target.files)
            }
            name={name}
            placeholder={placeholder}
            src={src && src}
            alt={alt && alt}
            width={width && width}
            height={height && height}
            min={min && min}
            max={max && max}
          />
        </p>
      )}
      {error[name] && <p className="text-danger">{error[name]}</p>}
    </>
  );
};

export default TvFormInput;
