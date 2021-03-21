import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

export default function useForm2(defaultValues, schemaInput) {
  const [values, setValues] = useState(defaultValues || {});
  const [errors, setErrors] = useState({});
  const [schema] = useState(schemaInput);

  function validate(branch = null, options = { abortEarly: false }) {
    if (branch) {
      const subSchema = yup.reach(schema, branch);
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
        });
    } else {
      try {
        schema.validateSync(values, options);
        setErrors({});
        return true;
      } catch (err) {
        console.log(err);
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.errors;
        });
        setErrors(newErrors);
        return false;
      }
    }
  }

  return {
    values,
    setValues,
    errors,
    validate,
  };
}
