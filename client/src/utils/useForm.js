import { useState } from "react";

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if it's a number and convert
    let { value, type } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setValues({
      // copy the existing values into it
      ...values,
      // updat ethe new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
