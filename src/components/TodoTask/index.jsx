import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions/actionCreators';
import { TASK_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import styles from './TodoTask.module.scss';

function TodoTask (props) {
  const { create } = props;

  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    create(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TASK_VALIDATION_SCHEMA}
    >
      {formikProps => {
        const classNameInput = classNames(styles.inputTask, {
          [styles.inputInvalid]:
            formikProps.errors.task && formikProps.touched.task,
        });

        return (
          <Form className={styles.formWrapper}>
            <Field
              className={classNameInput}
              name='task'
              type='text'
              placeholder='Task'
            />
            <ErrorMessage name='task'>
              {msg => <div className={styles.errorMessage}>{msg}</div>}
            </ErrorMessage>
            <button className={styles.btnCreate} type='submit'>
              Create
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  create: values => {
    dispatch(createTaskAction(values));
  },
});

export default connect(null, mapDispatchToProps)(TodoTask);
