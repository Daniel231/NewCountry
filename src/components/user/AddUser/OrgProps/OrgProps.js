import React from 'react';
import TreeList from '../../../group/treeList/treeList.container';
import SelectField from '../../../shared/SelectField/styleSelectField';
import {FormInput,FormAutoComplete} from '../../../shared/Input/FormInput/FormInput';
import './OrgProps.css';

///////////////////////////
import MenuItem from 'material-ui/MenuItem';
//////////////////////////

const dataSource = [
    'd',
    'ddd',
    'dee'
];

const OrgProps = (props) => (
    <div className='orgProps'>
        <label><strong>מחלקה ותפקיד </strong>השלם את הפרטים הבאים:</label>
        <SelectField hintText="בחר מחלקה" value={'try'}>
            <div style={menuDivSytle}>
                <div>בחר מחלקה אליה מגיע החייל</div>
                <div id='addOU' style={addOUSytle}>+ הוסף מחלקה</div>
            </div>
            <MenuItem value='try' primaryText='menu text: primaryText'/>
            <TreeList/>
        </SelectField>
        
        <FormAutoComplete
          label='תפקיד:'
          hintText="הקלד תפקיד"
          dataSource={dataSource}
        // ??????????????
        // are we want to harden the selection to the menu? (onNewRequest/onUpdateInput}
        // ???????????????
          onUpdateInput={(e)=>{
            console.log(`e: ${e}`)  
            // props.changed(e)
        }}
        />
        
        <FormInput                                     
            name='jobDescription' 
            placeholder='הקלד פה תיאור תפקיד' 
            label='תיאור:' 
            value={props.value.jobDescription}
            onChange={(e)=>props.changed(e)}/>
        <FormInput                                     
            name='secondaryUser' 
            label='משתמש משני:' 
            value={props.value.secondaryUser}
            onChange={(e)=>props.changed(e)}/>
    </div>
        
);

const menuDivSytle={
    display:'flex',
    direction: 'rtl',
    color:'rgb(0, 150, 136)',
    fontSize: 15,
    marginRight: 10,
    marginBottom: 10,
}
const addOUSytle={
    display:'flex',
    marginRight: 225,
}

export default OrgProps;