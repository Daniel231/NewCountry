import React from 'react';
import './StrProps.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles={
    marginTop:10,
}

const StrProps = (props) => (
    <div className='StrProps'>
        <label>סיווג ביטחוני (למילוי ע"י הקב"ם בלבד):</label>
        <RadioButtonGroup 
            defaultSelected={false}
            name='classification'
            onChange={(e)=>props.changed(e)}>
        <RadioButton
            value={true}
            label="עבר סיווג ביטחוני"
            name="classified"
            style={styles}
        />
        <RadioButton
            value={false}
            label="ללא סיווג"
            name="nonClassified"
            style={styles}
        />
        </RadioButtonGroup>  
    </div>  
);



export default StrProps;