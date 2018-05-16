import React from 'react';
import TreeList from '../../../group/treeList/treeList.container';
import SelectField from '../../../shared/SelectField/styleSelectField';
import {FormInput,FormAutoComplete as AutoComplete} from '../../../shared/Input/FormInput/FormInput';
import './OrgProps.css';


const dataSource = [
    'd',
    'ddd',
    'dee'
];

const OrgProps = () => (
    <div className='orgProps'>
        <label><strong>מחלקה ותפקיד </strong>השלם את הפרטים הבאים:</label>
        <SelectField hintText="בחר מחלקה">
            <div style={menuDivSytle}>
                <div>בחר מחלקה אליה מגיע החייל</div>
                <div id='addOU' style={addOUSytle}>+ הוסף מחלקה</div>
            </div>
            <TreeList />
        </SelectField>
        <AutoComplete
          label='תפקיד:'
          hintText="הקלד תפקיד"
          dataSource={dataSource}
        //   onUpdateInput={this.handleUpdateInput}
        />
        <FormInput 
            name='jobDescription' 
            placeholder='הקלד פה תיאור תפקיד' 
            label='תיאור:' 
            size={20}/>
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