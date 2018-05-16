import React from 'react';
import './PrivateProps.css';
import {FormInput} from '../../../shared/Input/FormInput/FormInput';
import StrProps from '../StrProps/StrProps';

const PrivateProps = () => (
    <div className='PrivateProps'>
    <div className='triangleDown'></div>
        <div className='prvPropDiv'>
            <FormInput label='שם פרטי:' name='privateName'/>
            <FormInput label='שם משפחה:' name='lastName'/>
            <FormInput label='תעודת זהות:' name='userId'/>
            <FormInput label='דרגה:' name='rank'/>
        </div>
        <div className='prvPropDiv'>
            <FormInput label='טלפון:' name='privateName'/>
            <FormInput label='נייד:' name='lastName'/>
            <FormInput label='דוא"ל:' name='userId'/>
        </div>
        <div className='prvPropDiv'>
            <FormInput label='כתובת:' name='privateName'/>
            <FormInput label='ישוב:' name='lastName'/>
            <div style={{display:'flex'}}>
                <FormInput label='מיקוד:' name='userId' size='10'/>
                <FormInput label='מספר בית:' name='userId' size='5'/>
            </div>
            
        </div>
        <StrProps/>
    </div>
);

export default PrivateProps;