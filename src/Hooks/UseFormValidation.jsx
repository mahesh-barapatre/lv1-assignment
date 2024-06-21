import { useState } from 'react';

const UseFormValidation = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    // console.log(Object.keys(validationErrors).length === 0);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default UseFormValidation;
