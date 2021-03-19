import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

export default function useForm2(defaultValues, schemaInput) {
  const [values, setValues] = useState(defaultValues || {});
  const [errors, setErrors] = useState({});
  const [schema] = useState(schemaInput);

  function validate(branch = null, options = { abortEarly: false }) {
    if (branch) {
      const subSchema = yup.reach(schema, branch);
      console.log(options);
      subSchema
        .validate(values[branch], options)
        .then((_) => {
          setErrors((errors) => {
            const newErrors = { ...errors };
            delete newErrors[branch];
            return newErrors;
          });
        })
        .catch((err) => {
          setErrors((errors) => {
            return { ...errors, [branch]: err.errors };
          });
          console.log(err);
          console.log(errors);
          console.log(values);
        });
    } else {
      schema
        .validate(values, options)
        .then((_) => {
          setErrors({});
          return true;
        })
        .catch((err) => {
          const newErrors = {};
          err.inner.forEach((error) => {
            console.log('here');
            newErrors[error.path] = error.errors;
          });
          setErrors(newErrors);
          return false;
        });
    }
  }

  function testGeocoder() {
    console.log(values);
    return values.address && values.latitude && values.longitude;
  }

  function getValues() {
    return values;
  }

  return {
    testGeocoder,
    getValues,
    values,
    setValues,
    errors,
    validate,
  };
}
