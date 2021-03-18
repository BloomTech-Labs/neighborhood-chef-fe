import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

export default function useForm2(defaultValues, schemaInput) {
  const [values, setValues] = useState(defaultValues || {});
  const [errors, setErrors] = useState({});
  const [schema] = useState(schemaInput);

  function validate(branch = null) {
    if (branch) {
      const subSchema = yup.reach(schema, branch);
      subSchema
        .validate(values[branch])
        .then((_) => {})
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
        .validate(values)
        .then((_) => {})
        .catch((err) => {
          console.dir(err);
        });
    }
  }

  return {
    values,
    setValues,
    errors,
    validate,
  };
}
