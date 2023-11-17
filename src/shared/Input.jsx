import React from 'react'

function Input({id,title,type,name,changeData,customeClass,errors,value}) {
    
    return (
        <div className="mb-3">
            <label htmlFor={id} className='form-label' >{title}</label>
            <input type={type} value={value} name={name} className={`form-control ${customeClass}`} id={id} onChange={changeData} />
            {errors[name] && <p className='text-danger'>{errors[name]}</p>}
            

        </div>
    )
}

export default Input