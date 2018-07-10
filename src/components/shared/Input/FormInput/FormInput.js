import React from 'react';
import {FormInput as Input} from '../styledInput';
import AutoComplete from 'material-ui/AutoComplete';
import './FormInput.css';

const FormInput = ( props )=> (
    <div className='FormInput'>
        <label className='label'>{props.label}</label>
        <Input {...props}/>
    </div>   
);

const FormAutoComplete = ( props )=> (
    <div className='FormInput'>
        <label  className='label'
                style={{
                    height: 22,
                    marginTop: 13,}}
                    >
                        {props.label}
        </label>
        <AutoComplete
            {...props}
            underlineShow={false}
            hintStyle={{
                fontSize: 15,
                color: '#7B8A8D',
                bottom: 0, 
            }} 
            style={{
                height: 25,
                marginTop: 10,               
            }}
            menuStyle={{
                top: 60,
            }}
            textFieldStyle={{
                height: 25,
            }}
        />
    </div>   
);

export {FormInput,FormAutoComplete};
