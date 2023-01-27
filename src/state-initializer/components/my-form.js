import {useControlledForm} from '../hooks/use-controlled-form.js';

export const MyForm = () => {
  const {formValues, handleChange, handleSubmit, resetForm} = useControlledForm(
    {
      name: '',
    },
  );

  const showData = values => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <input name="name" value={formValues.name} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};
