import React from 'react';
import {FormInput as Input} from '../styledInput';
import AutoComplete from 'material-ui/AutoComplete';
import './FormInput.css';

const FormInput = ( props )=> (
    <div className='FormInput'>
        <label className='label'>{props.label}</label>
        <Input name={props.name} size={props.size} placeholder={props.placeholder}/>
    </div>   
);

const FormAutoComplete = ( props )=> (
    <div className='FormInput'>
        <label className='label'>{props.label}</label>
        <AutoComplete
            hintText={props.hintText}
            dataSource={props.dataSource}
            underlineShow={false}
            hintStyle={{
                fontSize: 15,
                color: '#7B8A8D', 
            }}  
            style={{
                height: 25,
            }}
          //   onUpdateInput={this.handleUpdateInput}
        />
    </div>   
);

export {FormInput,FormAutoComplete};
