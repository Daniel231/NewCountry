import React from 'react';
import {StyleTabs as Tabs,StyleTab as Tab,ShadowDiv} from './TabsStyle';

const MuiTab = ( props )=>( 
        <Tabs>
            <Tab label='חייל'>
                <h3>פרטי החייל</h3>           
            </Tab>
            <Tab label='אזרח'>
                <h3>פרטי האזרח</h3>
            </Tab>
        </Tabs>
)

export default MuiTab;