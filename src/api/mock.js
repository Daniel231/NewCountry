
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

