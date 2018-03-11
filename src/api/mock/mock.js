export const flatGroups = [
  {
    title: 'שורש',
    id: '1',
    children: ['a2', '3', '4'],
    isAleaf: false,
  },
  {
    title: 'מדור א',
    id: 'a2',
    children: ['5', '6'],
    isAleaf: false,
  },
  {
    title: 'מדור ב',
    id: '3',
    children: ['7'],
    isAleaf: false,
  },
  {
    title: 'מדור ג',
    id: '4',
    children: [],
    isAleaf: true,
  },
  {
    title: 'צוות1',
    id: '5',
    children: [],
    isAleaf: true,
  },
  {
    title: 'צוות552',
    id: '6',
    children: [],
    isAleaf: true,
  },
  {
    title: 'צוות3',
    id: '7',
    children: ['rr'],
    isAleaf: false,
  },
  {
    title: 'red ribbon',
    id: 'rr',
    children: [],
    isAleaf: true,
  }
];

export const ROOT_GROUP_ID = flatGroups[0].id;

export const myUser = {
  fullJobDesc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיא" +
   "- פוסיליס קוויס, אקווזמן קוואזי במר מודוף." +
   "אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בל" +
   "- וענוף לורם איפסום דולור סיט אמט," +
   "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח." +
   "עמחליף נולום ארווס סאפיאן - פוסיליס קוויס," +
   "אקווזמן קולהע צופעט למרקוח איבן איף," +
   "ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק." +
   "תצטנפל בלינדו למרקל אס לכימפו, דול," +
   "צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש." +
   "קוויז דומור ליאמום בלינך רוגצה. לפמעט",
  fullName: "דוד",
  job: "עוקץ",
  unit: "כלשהי",
  team: "עיצוב",
  jobDesc: "אזרח חופשי ומאושר",
  id: 6861599,
  passport: 6861599,
  rank: "אזרח!!",
  clasification: "מסווג",
  phone: "051111",
  mobile: "052222",
  mail: "gamba@gamba.com",
  address: "באר שבע",
  groups: ["הפרלמנט", "פאור ריינג'רס"]
};

export const groups = [
  {
    title: "אלעד",
    id:1,
    children: [
      {
        id:1.1,
        title: "הבוס"
      },
      {
        id:1.2,
        title: "העייף",
        children: [
          { id:1.21, title: "מאוד" }
        ]
      }
    ]
  },
  {
    id:2,
    title: "יונתן",
    children: [
      {
        id:2.1,title: "האפורי"
      }
    ]
  },
  {
    id:3,
    title: "יונתן",
    children: [
      {
        id:3.1,title: "האפורי"
      }
    ]
  },
  {
    id:4,
    title: "יונתן",
    children: [
      {
        id:4.1, title: "האפורי"
      }
    ]
  },
  {
    id:5,
    title: "יונתן",
    children: [
      {
        id:5.1,title: "האפורי"
      }
    ]
  },
  {
    id: 6, title: "יונתן",
    children: [
      {
        id:6.1,title: "האפורי"
      }
    ]
  },
  {
    id:7, title: "מישקה",
    children: [
      {
        id:7.1,title: "מרלין"
      }
    ]
  }
];
export const tableData = {
  users: [
    { name: 'אלעד', role: 'טיפש', isGroupAdmin: true }, { name: 'יונתן', role: 'חכם', isAdmin: false },
    { name: 'יונתן', role: 'חכם', isAdmin: false }, { name: 'יונתן', role: 'חכם', isAdmin: false },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true },
    { name: 'יונתן', role: 'היררכיקה', isAdmin: false }, { name: 'יונתן', role: 'היררכיקה', isAdmin: true }
  ],
  headerCols: ['שם', 'תפקיד'],
  dataFields: ['name', 'role']

};

