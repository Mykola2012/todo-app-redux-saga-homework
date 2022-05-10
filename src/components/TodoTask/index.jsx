import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import styles from './TodoTask.module.scss';

function TodoTask () {
  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <Form className={styles.formWrapper}>
          <Field
            className={styles.inputTask}
            name='task'
            type='text'
            placeholder='Task'
          />
          <ErrorMessage name='task'>{msg => <div>{msg}</div>}</ErrorMessage>
          <button className={styles.btnCreate} type='submit'>
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TodoTask;
