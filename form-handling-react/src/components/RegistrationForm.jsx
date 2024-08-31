import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('password is required')
});


const RegistrationForm = () => (
    <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" style={{backgroundColor: "red"}}/>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" style={{backgroundColor: "red"}}/>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" style={{backgroundColor: "red"}}/>
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default RegistrationForm;
