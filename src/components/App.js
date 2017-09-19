import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/header.component';
import TreeMenu from './group/treeMenu.componenet';


injectTapEventPlugin();
//configure the theme to work with RTL
const uiTheme = getMuiTheme({
    isRtl: true
});

let items = [
    {
        "depth": 0,
        "children": [1,2],
        "title": "צימר"
    },
    {
        "depth": 1,
        "title": "בצפון",
        "parentIndex": 0
    },
    {
        "depth": 1,
        "title": "בעזעזל",
        "parentIndex": 0
    },
    {
        "depth": 0,
        "title": "נו כבר"
    }
];

// let items =[  
//     {  
//        "depth":0,
//        "children":[  
 
//        ],
//        "_styles":{  
//           "root":{  
//              "paddingLeft":-16,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false
//     },
//     {  
//        "title":"נו כבר",
//        "depth":1,
//        "parentIndex":0,
//        "children":[  
//           2,
//           5
//        ],
//        "disabled":false,
//        "_styles":{  
//           "root":{  
//              "paddingLeft":0,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":true,
//        "_primaryText":"Chapter 1: Preamble"
//     },
//     {  
//        "title":"What is Functional Programming",
//        "depth":2,
//        "children":[  
//           3,
//           4
//        ],
//        "parentIndex":1,
//        "disabled":false,
//        "_styles":{  
//           "root":{  
//              "paddingLeft":16,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"What is Functional Programming"
//     },
//     {  
//        "title":"Pure Functions",
//        "depth":3,
//        "parentIndex":2,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":"rgba(0,0,0,0.2)",
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Pure Functions"
//     },
//     {  
//        "title":"Composing Functions",
//        "depth":3,
//        "parentIndex":2,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Composing Functions"
//     },
//     {  
//        "title":"Functional JavaScript",
//        "depth":2,
//        "children":[  
//           6,
//           7
//        ],
//        "disabled":false,
//        "parentIndex":1,
//        "_styles":{  
//           "root":{  
//              "paddingLeft":16,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Functional JavaScript"
//     },
//     {  
//        "title":"JavaScript Array Methods",
//        "depth":3,
//        "parentIndex":5,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"JavaScript Array Methods"
//     },
//     {  
//        "title":"Introduction to Ramda",
//        "depth":3,
//        "parentIndex":5,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Introduction to Ramda"
//     },
//     {  
//        "title":"Chapter 2: React",
//        "depth":1,
//        "parentIndex":0,
//        "disabled":false,
//        "children":[  
//           9,
//           12
//        ],
//        "_styles":{  
//           "root":{  
//              "paddingLeft":0,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":true,
//        "_primaryText":"Chapter 2: React"
//     },
//     {  
//        "title":"Introduction to React",
//        "depth":2,
//        "parentIndex":8,
//        "disabled":false,
//        "children":[  
//           10,
//           11
//        ],
//        "_styles":{  
//           "root":{  
//              "paddingLeft":16,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Introduction to React"
//     },
//     {  
//        "title":"Writing React Components",
//        "depth":3,
//        "parentIndex":9,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Writing React Components"
//     },
//     {  
//        "title":"Composing React Components",
//        "depth":3,
//        "parentIndex":9,
//        "disabled":false,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"pointer",
//              "color":"rgba(0,0,0,0.87)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Composing React Components"
//     },
//     {  
//        "title":"React Components",
//        "depth":2,
//        "parentIndex":8,
//        "disabled":true,
//        "children":[  
//           13,
//           14
//        ],
//        "_styles":{  
//           "root":{  
//              "paddingLeft":16,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"not-allowed",
//              "color":"rgba(0,0,0,0.4)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"React Components"
//     },
//     {  
//        "title":"Props and State in React",
//        "parentIndex":12,
//        "depth":3,
//        "disabled":true,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"not-allowed",
//              "color":"rgba(0,0,0,0.4)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Props and State in React"
//     },
//     {  
//        "title":"Component Lifecycle",
//        "parentIndex":12,
//        "depth":3,
//        "disabled":true,
//        "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
//        "_styles":{  
//           "root":{  
//              "paddingLeft":32,
//              "backgroundColor":null,
//              "height":"48px",
//              "cursor":"not-allowed",
//              "color":"rgba(0,0,0,0.4)",
//              "overflow":"hidden",
//              "transform":"translateZ(0)"
//           }
//        },
//        "_shouldRender":false,
//        "_primaryText":"Component Lifecycle"
//     }
//  ];


class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={uiTheme} >
            <div>
                <Header title="הגינה של סלדג"/>
                <div>
                    Nitro The Jello
                </div>
                <TreeMenu itemsArray={items} />
            </div>
            </MuiThemeProvider>
        );
    } 
}

export default App;