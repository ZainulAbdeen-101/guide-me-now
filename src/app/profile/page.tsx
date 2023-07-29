"use client"
import React from 'react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
  interface MyFormValues {
    firstName: string;
  }

const page = () => {
    const initialValues: MyFormValues = { firstName: '' };
  return (
    <>
    
  
<div className="h-screen md:flex">
    <div className='bg-[#fed32e] w-[30%]'>
        <h1 className=' text-[50px]'>
            Guide Me Now
        </h1>

    </div>
	
	<div className="bg-[#6c00a5] w-[70%]">
    <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
         <Form>
          
         </Form>
       </Formik>
	</div>
</div>
    
    
    
    </>
  )
}

export default page