import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink': '' } form-input-label`} >
                    {label}
                </label> )
                : null
            }
        </div>
    )
}

export default FormInput;


// {
//     apiKey: "AIzaSyDL6KDWFRuIsguG0NCMriJp7Wkc-783m5Y",
//     authDomain: "crwn-db-c3e1b.firebaseapp.com",
//     projectId: "crwn-db-c3e1b",
//     storageBucket: "crwn-db-c3e1b.appspot.com",
//     messagingSenderId: "883338613727",
//     appId: "1:883338613727:web:2d465e91a79ec72e846a6a",
//     measurementId: "G-K20W2GKNJC"
//   };