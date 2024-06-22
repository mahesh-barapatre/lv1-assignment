import React, { useEffect, useState } from 'react';
import useFormValidation from './Hooks/UseFormValidation';
import FormFields from './components/FormFields';
import RadioFormField from './components/RadioFormField';
import Button from './components/Button';
import AdminSummary from './components/Summary';
import validate from './utils/validate';

const App = () => {
  const initialState = {
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  };

  const { formData, errors, handleChange, handleSubmit } = useFormValidation(initialState, validate);

  const [summary, setSummary] = useState(false);

  const submitForm = () => {
    setSummary(true);
  };

  return (
    <div className='w-full h-full sm:min-h-screen flex flex-col sm:flex-row p-3 sm:p-0'>

    <div className='w-full sm:w-1/2 flex h-full min-h-screen flex-col items-center justify-center'>

    <h1 className='text-4xl font-extrabold font-mono text-blue-600'>
      {
        !summary ? "Event Registration Form" : "Registration Summary"
      }
      
    </h1>

      {
        summary ? 
        <AdminSummary formData={formData} />
        :

        <form className='w-full sm:w-1/2' onSubmit={(e) => handleSubmit(e, submitForm)}>
      
      <FormFields 
        fieldName={"Name"}
        type={"text"}
        name={"name"}
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        icon={"icon-park-solid:edit-name"}
        placeholder={"Your Name..."}
      />
      <FormFields 
        fieldName={"Email"}
        type={"email"}
        name={"email"}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        icon={"weui:email-filled"}
        placeholder={"Your Email..."}
      />
      <FormFields 
        fieldName={"Age"}
        type={"number"}
        name={"age"}
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
        icon={"mdi:human-male-height-variant"}
        placeholder={"Your Age..."}
      />
      
      <RadioFormField 
        question={"Are you attending with a guest?"}
        name={"attendingWithGuest"}
        values={["Yes", "No"]}
        onCheckedInfo={formData.attendingWithGuest}
        onChange={handleChange}
        icon={"octicon:question-24"}
      />
      
    
      {formData.attendingWithGuest === 'Yes' && (
        <FormFields 
        fieldName={"Guest Name"}
        type={"text"}
        name={"guestName"}
        value={formData.guestName}
        onChange={handleChange}
        error={errors.guestName}
        icon={"fluent:guest-add-20-filled"}
        placeholder={"Guest Name..."}
      />
      )}

      <div className='w-full flex justify-center items-center m-2'>
      <Button
       type={"submit"}
      >
        Submit
      </Button>

      </div>
      
    </form>

      }
    
    
    </div>


    <div className="w-full sm:w-1/2 flex justify-center items-center">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" alt="img"/>
    </div>
          
  </div>
  );
};

export default App;
