import React,{Component} from 'react';
// import Tabs from '../../shared/Tabs/Tabs';
import {StyleTabs as Tabs,StyleTab as Tab,ShadowDiv} from '../../shared/Tabs/Tabs';

import './AddUser.css'

class AddUser extends Component{

    render(){
        return(
            <React.Fragment>
                <Tabs>
                    <Tab label='חייל'>
                        <div className='id_search'>
                            <strong>הקלד מספר אישי להשלמת פרטי החייל:</strong>
                            <div style={{ display: 'flex'}}>
                                <input type='text' placeholder='הקלד מספר אישי'/>
                                <button name='id_search'>חפש</button>
                            </div>    
                        </div>

                        <h3>פרטי החייל</h3>
                    </Tab>
                    <Tab label='אזרח'>
                        <h3>פרטי האזרח</h3>
                    </Tab>
                </Tabs>
            </React.Fragment>
        )
    }

}

export default AddUser;