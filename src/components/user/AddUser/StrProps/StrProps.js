import React from 'react';
import './StrProps.css';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles={
    marginTop:10,
}

const StrProps = () => (
    <div className='StrProps'>
        <label>סיווג ביטחוני (למילוי ע"י הקב"ם בלבד):</label>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        <RadioButton
            value="classified"
            label="עבר סיווג ביטחוני"
            // labelStyle={styles}
            // iconStyle={styles}
            style={styles}
        />
        <RadioButton
            value="nonClassified"
            label="ללא סיווג"
            // labelStyle={styles}
            style={styles}
        />
        </RadioButtonGroup>  
    </div>  
);



export default StrProps;