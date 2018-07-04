import React,{Component} from 'react';
import {StyleTabs as Tabs,StyleTab as Tab,ShadowDiv} from '../../shared/Tabs/Tabs';
import './AddUser.css'
import {Input} from '../../shared/Input/styledInput';
import PrivateProps from './PrivateProps/PrivateProps';
import OrgProps from './OrgProps/OrgProps';
import {SearchButton,KabamButton} from '../../shared/Buttons/Buttons';
import Background from './AddUserBackground';
import {AddUserAvatar as Avatar} from '../styledComponents/avatar';


class AddUser extends Component{
    state = {
        userType: 'user',//influence about the default tab that open (the second option is 'consultant')
        
        userDetails: {
            privateName : '',
            lastName : '',
            userId : '',
            rank : '',
            phone : '',
            mobile : '',
            email : '',
            releaseDate:'',
            address : '',
            city : '',
            postalCode : '',
            homeNumber : '',
            classification : false,
            hierarchy: '',
            job: '',
            jobDescription: '',
            secondaryUser:'',
        },
        consultantDetails:{
            privateName : '',
            lastName : '',
            userId : '',
            rank : '',
            phone : '',
            mobile : '',
            email : '',
            releaseDate:'',
            address : '',
            city : '',
            postalCode : '',
            homeNumber : '',
            classification : false,
            hierarchy: '',
            job: '',
            jobDescription: '',
            secondaryUser:'',
        }
    }

    //update the state about the form's elements content
    handleInputChange(e,userType){
        const target = e.target;
        // const value = target.type === 'text' ? target.value: null;
        const value = target.value;       
        const userTypePath= this.state.userType === 'user'?'userDetails':'consultantDetails';
        this.setState({
            [userTypePath]:{...this.state[userTypePath],[target.name]:value}
        });
    }

    //update the state about the user type (user/consultant) according to the Tab that selected
    handleUserType=(value)=>{
        this.setState({
            userType:value,
        })
    }
    
    render(){
        return(
            <Background >   
                <Tabs 
                    value = {this.state.userType}
                    onChange = {this.handleUserType}>
                    <Tab label='חייל' value='user' >
                        <Avatar/>
                        <div className='id_search'>
                            <strong>הקלד מספר אישי להשלמת פרטי החייל:</strong>
                            <div style={{ display: 'flex'}}>
                                <Input type='text' placeholder='הקלד מספר אישי'/>
                                <SearchButton name='id_search'>חפש</SearchButton>
                            </div>    
                        </div>
                        <PrivateProps 
                            value={this.state.userDetails}
                            changed={(e)=>this.handleInputChange(e)}/>
                        <OrgProps 
                            value={this.state.userDetails}
                            changed={(e)=>this.handleInputChange(e)}/>   
                        <KabamButton Name='id_search'>העבר לאישור קב"ם</KabamButton>
                    
                    </Tab>
                    <Tab label='אזרח' value='consultant'>
                        <Avatar/>
                        <div className='id_search'>
                            <strong>הקלד את פרטי האזרח שנקלט ליחידה</strong>                                                    
                        </div>
                        <PrivateProps 
                            value={this.state.consultantDetails}
                            changed={(e)=>this.handleInputChange(e)}/>
                        <OrgProps 
                            value={this.state.consultantDetails}
                            changed={(e)=>this.handleInputChange(e)}/>
                        <KabamButton Name='id_search'>העבר לאישור קב"ם</KabamButton>
                    </Tab>
                </Tabs>

            </Background>
        )
    }
}


export default AddUser;