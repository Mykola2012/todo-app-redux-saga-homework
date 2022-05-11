import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions/actionCreators';
import styles from './TodoTask.module.scss';

function TodoTask (props) {
  const { create } = props;

  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    create(values);
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

const mapDispatchToProps = dispatch => ({
  create: values => {
    dispatch(createTaskAction(values));
  },
});

export default connect(null, mapDispatchToProps)(TodoTask);
