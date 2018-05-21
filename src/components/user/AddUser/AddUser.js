import React,{Component} from 'react';
import {StyleTabs as Tabs,StyleTab as Tab,ShadowDiv} from '../../shared/Tabs/Tabs';
import './AddUser.css'
import {Input} from '../../shared/Input/styledInput';
import PrivateProps from './PrivateProps/PrivateProps';
import OrgProps from './OrgProps/OrgProps';
import {SearchButton,KabamButton} from '../../shared/Button/Button';
import Background from './AddUserBackground';
import {AddUserAvatar as Avatar} from '../styledComponents/avatar';


class AddUser extends Component{

    render(){
        return(
            <Background >
                  
                <Tabs>
                    <Tab label='חייל'>
                        <Avatar/>
                        <div className='id_search'>
                            <strong>הקלד מספר אישי להשלמת פרטי החייל:</strong>
                            <div style={{ display: 'flex'}}>
                                <Input type='text' placeholder='הקלד מספר אישי'/>
                                <SearchButton name='id_search'>חפש</SearchButton>
                            </div>    
                        </div>
                        <PrivateProps/>
                        <OrgProps/>
                    </Tab>
                    <Tab label='אזרח'>
                        <Avatar/>
                        <div className='id_search'>
                            <strong>הקלד את פרטי האזרח שנקלט ליחידה</strong>                                                    
                        </div>
                        <PrivateProps/>
                        <OrgProps/>
                        <KabamButton Name='id_search'>העבר לאישור קב"ם</KabamButton>
                    </Tab>
                </Tabs>
            </Background>
        )
    }
}



export default AddUser;