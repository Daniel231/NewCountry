import React from 'react';
import './PrivateProps.css';
import {FormInput} from '../../../shared/Input/FormInput/FormInput';
import StrProps from '../StrProps/StrProps';

const PrivateProps = (props) => (
    <div className='PrivateProps'>
    <div className='triangleDown'></div>
        <div className='prvPropDiv'>
           <FormInput 
                label='שם פרטי:' 
                name='privateName' 
                value={props.value.privateName}
                onChange={(e)=>props.changed(e)}/>
             <FormInput 
                label='שם משפחה:' 
                name='lastName' 
                value={props.value.lastNameName}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='תעודת זהות:' 
                name='userId' 
                value={props.value.userId}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='דרגה:' 
                name='rank' 
                value={props.value.rank}
                onChange={(e)=>props.changed(e)}/>
        </div>
        <div className='prvPropDiv'>
            <FormInput 
                label='טלפון:' 
                name='phone' 
                value={props.value.phone}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='נייד:' 
                name='mobile' 
                value={props.value.mobile}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='דוא"ל:' 
                name='email' 
                value={props.value.email}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='תאריך שחרור:' 
                name='releaseDate' 
                value={props.value.releaseDate}
                onChange={(e)=>props.changed(e)}/>
        </div>
        <div className='prvPropDiv'>
            <FormInput 
                label='כתובת:'
                name='address' 
                value={props.value.address}
                onChange={(e)=>props.changed(e)}/>
            <FormInput 
                label='ישוב:' 
                name='city' 
                value={props.value.city}
                onChange={(e)=>props.changed(e)}/>
            <div style={{display:'flex'}}>
                <FormInput 
                    label='מיקוד:' 
                    name='postalCode' 
                    size='10' 
                    value={props.value.postalCode}
                    onChange={(e)=>props.changed(e)}/>
                <FormInput 
                    label='מספר בית:' 
                    name='homeNumber' 
                    size='5' 
                    value={props.value.homeNumber}
                    onChange={(e)=>props.changed(e)}/>
            </div>
            
        </div>
        <StrProps changed={(e)=>props.changed(e)}/> 
    </div>
);

export default PrivateProps;