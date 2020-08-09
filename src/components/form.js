import React from 'react'
import {useFormik} from 'formik'

function Form (){
    //using the useFormik Hook
    const formik = useFormik({
        initialValues: {
            name:'',
            email:''
        }
    });
    console.log('form values', formik.values)
    
    return(
        <div>
            <form>
                <label htmlFor="name"> Name</label>
                {/* passing the onchange and value prop to ensure the form fields are tracked in react by formik */}
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={formik.handleChange} 
                    value={formik.values.name}/>

                <label htmlFor="email"> Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email}/>

                <button > Submit </button>
            </form>
        </div>
    )
}

export default Form