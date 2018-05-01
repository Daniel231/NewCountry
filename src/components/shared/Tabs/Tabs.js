import React from 'react';
import {styleTabs as Tabs,styleTab as Tab} from './TabsStyle';
Tab.muiName='Tab';
const MuiTab = ()=>(
    <Tabs >
        <Tab label='חייל'>
            <h3>פרטי החייל</h3>
        </Tab>
        <Tab label='אזרח'>
            <h3>פרטי האזרח</h3>
        </Tab>
    </Tabs>
)

export default MuiTab;