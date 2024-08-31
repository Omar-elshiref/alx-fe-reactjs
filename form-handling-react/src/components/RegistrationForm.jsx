import { useState } from "react";

const RegistrationForm = () => {
    const [value, setValue] = useState({ username: '', email: '',  password: ''});
  const handleValues = (e) => {
    const { name, value } = e.target;
    setValue(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        id='username'
        value={value.username}
        onChange={handleValues}
      />
      <input type='email' name='email' id='email' value={value.email} onChange={handleValues} />
      <input
        type='password'
        name='password'
        id='password'
        value={value.password}
        onChange={handleValues}
      />
      <button type="submit"></button>
    </form>
  );
};

export default RegistrationForm;




// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';


// const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('password is required')
// });



// const RegistrationForm = () => (
//     <Formik
//         initialValues={{ name: '', email: '', password: '' }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//             console.log(values);
//         }}
//     >
//         {() => (
//             <Form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
//                 <Field type="text" name="name" />
//                 <ErrorMessage name="name" component="div" style={{backgroundColor: "red"}}/>
//                 <Field type="email" name="email" />
//                 <ErrorMessage name="email" component="div" style={{backgroundColor: "red"}}/>
//                 <Field type="password" name="password" />
//                 <ErrorMessage name="password" component="div" style={{backgroundColor: "red"}}/>
//                 <button type="submit">Submit</button>
//             </Form>
//         )}
//     </Formik>
// );

// export default RegistrationForm;
