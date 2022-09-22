import React from "react";
import {useFormik} from "formik";

// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: () => {
      alert('Login successful');
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) {
        errors.emailError = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = 'Username should be an email'
      }
      if(!values.pswField) errors.pswError = 'Field required';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <div>
          <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} />
        </div>
        {formik.errors.emailError ? <div name="emailError" style={{color:'red'}}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <div>
          <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        </div>
        {formik.errors.pswError ? <div name="pswError" style={{color:'red'}}>{formik.errors.pswError}</div> : null}
        <button type="submit" name="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
