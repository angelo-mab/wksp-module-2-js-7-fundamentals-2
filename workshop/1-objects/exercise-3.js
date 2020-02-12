// Exercise 3
// -------------------

const staffMembers = [
    {
        name: 'Jane Smith',
        title: 'Web Developer II',
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 6,
        },
    },
    {
        name: 'Frank Castle',
        title: 'Web Developer I',
        skillLevels: {
            javascript: 4,
            python: 4,
            sql: 3,
        },
    },
    {
        name: 'Steve Rogers',
        title: 'Database Admin',
        skillLevels: {
            javascript: 7,
            python: 4,
            sql: 9,
        },
    },
    {
        name: 'Chuck Taylor',
        title: 'Web Developer III',
        skillLevels: {
            javascript: 8,
            python: 7,
            sql: 8,
        },
    },
    {
        name: 'Thor Odinson',
        title: 'Web Intern',
        skillLevels: {
            javascript: 4,
            python: 3,
            sql: 6,
        },
    },
];

// We need you to write a script that will print someone's JavaScript ability level.
// Write a line that will print the JavaScript level for employee Chuck Taylor.

//.forEach will cycle threw the whole array
//then if statement with compare the name with the value given
//when found, print their skill level
staffMembers.forEach( member =>{
    if(staffMembers.name === 'Chuch Taylor')
    console.log(staffMembers.skillLevels);
}
    )
// You will need both Array and Object syntax.