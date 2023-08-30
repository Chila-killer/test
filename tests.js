function findLastLetter(text) {
    lastLetterIndex = text.length - 1;
    return text[lastLetterIndex];
};

// console.log(findLastLetter("Holalolabole"));

function findLastWord(text) {
    lastWordIndex = text.split(" ").length - 1;
    return text.split(" ")[lastWordIndex];
};

// console.log(findLastWord("Hola, me llamo Josua de la tribu del agua"));

function findLastWord(text) {
    return text.split(" ")[1];
};

// console.log(findLastWord("Hola, niño me llamo Josua de la tribu del agua"));

let user3 = { name: 'Jesús', email: 'jesus@academlo.com' }

function getEmail(user) {
    userEmail = user.email
    return userEmail;
};

// console.log(getEmail(user));

numbers = [1, 2, 3]

function sumValues(numbers) {
    // let sum = 0;
    // sum += numbers[0];
    // sum += numbers[1];
    // sum += numbers[2];
    // console.log(sum);
    return numbers.reduce ((anterior, actual) => anterior + actual, 0);
}

// console.log(sumValues(numbers));

number = 128215436389897895678978478907

function countNumbers(number) {
    stringNum = number.toString()
    return stringNum.length;
};

// console.log(countNumbers(number));

// usersf = [
//     { name: "Jesús", email: "jesus@academlo.com", age: 20 },
//     { name: "Andrés", email: "andres@academlo.com", age: 30 },
//     { name: "Brayan", email: "brayan@academlo.com", age: 40 }
//   ]

function getEmails(users) {
    const newArray = []
    for (const user in users) {
        newArray.push(users[user].email)
    }
    return newArray
}

// console.log(getEmails(users));

// userso = [
//     { name: 'Jesús', email: 'jesus@academlo.com' }, 
//     { name: 'Andrés', email: 'andres@academlo.com' }, 
//     { name: 'Brayan', email: 'brayan@gmail.com' }
// ];

email = "andres@academlo.com";

function deleteUser(users, email) {
    const index = users.findIndex((obj) => obj.email === email);
    if (index > -1) {
            users.splice(index, 1);
        };
    return users;
};

// console.log(deleteUser(users, email));

let usersa = [
    { name: 'Jesús', email: 'jesus@academlo.com' },
    { name: 'Luis', email: 'luis@gmail.com' }
];
let attendances1 = [
    { email: 'luis@gmail.com', attendance: false },
    { email: 'jesus@academlo.com', attendance: true }
];

function mergeData(users, attendances) {

    for (const user of users) {
        for (const userAte of attendances) {
            if (user.email === userAte.email) {
                user.attendance = userAte.attendance
            } 
        }
    }
    // for (let i = 0; i < users.length; i++)
    //   if (users.email = attendances[i].email) {
        // response.push(users[i])
        // users[i].attendance = attendances[i].attendance
    //   response.push(Object.assign(users[i], attendances[i]));
      
    return users;
};

// console.log(mergeData(users, attendances));

// console.log(364 % 9);

let students = [
    { name: 'Jesús', email: 'jesus@academlo.com', score: 100 },
    { name: 'David', email: 'david@gmail.com', score: 70 },
    { name: 'Ernesto', email: 'ernesto@gmail.com', score: 34 }
  ]

function orderStudentsByScore(students) {
    return students.sort(function(a, b) {
        if (a.score < b.score) {
          return -1;
        };
        if (a.score > b.score) {
          return 1;
        };
    });
}

// console.log(orderStudentsByScore(students));


// function findMostCommonAge(students) {
//     let wrongResponse = [];
//     let response = [];
//     for (let i = 0; i < students.length; i++) {
//         let a = students[i].age;
//         if (!wrongResponse.includes(a)) {
//             wrongResponse.push(a);
//         } else response.push(a);
//         // if (response.length > 1) {
//         //     (function (a,b))
//         // }
//     }
    
//     console.log(response);
//     return parseInt(response);
      

// }

let students1 = [
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
    { name: 'Georg', age: 22 },
    { name: 'Georg', age: 27 },
    { name: 'Georg', age: 25 }
];

function findMostCommonAge(students) {
    let obj = {};
    let maxEl = students[0].age, 
        maxCount = 1;
    for (let i = 0; i < students.length; i++) {
        const el = students[i].age;
        if (obj[el] == null) {
            obj[el] = 1;
        } else {
            obj[el]++
        };
        if (obj[el] > maxCount) {
            maxEl = el;
            maxCount = obj[el];
        }
        console.log(el);
    }
    console.log(maxCount);
    console.log(maxEl);
    console.log(obj);
    return maxEl;
}

// console.log(findMostCommonAge(students1));

const students3 = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

const countries = [
    { id: 1, name: 'Mexico', },
    { id: 2, name: 'Colombia' }
]

function countStudents(students, countries, countryName) {
    let response = [];
    let countryId = 0;
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name == countryName) {
        countryId = countries[i].id;
      }
    }
    for (let i = 0; i < students.length; i++) {
      if (students[i].country_id == countryId) {
        response.push(students[i]);
      }
    }
    return response.length;
}

// console.log(countStudents(students3, countries, 'Mexico'));

let users = [
    { name: 'Jesús', gender: 'male', age: 22 },
    { name: 'Luis', gender: 'male', age: 22 },
    { name: 'Andrés', gender: 'male', age: 49 },
    { name: 'María', gender: 'female', age: 35 }
  ]
  
let name2 = 'Andrés'

function findUser(users, name2) {
    let response
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name2) {
            response = users[i];   
        };
    };
    return response;
};

// console.log(findUser(users, name2));

let usersw = [
    { 
      name: 'Andrés', 
      email: 'andres@academlo.com', 
      channel: 'youtube', 
      application: null 
    },
    { 
      name: 'Jesús', 
      email: 'jesus@gmail.com', 
      channel: 'facebook', 
      application: { country: 'Mexico', state: 'Campeche' }
    },
    { 
      name: 'Brayan', 
      email: 'brayan@gmail.com', 
      channel: 'youtube', 
      application: { country: 'Colombia', state: 'Bogotá' }
    }
];

function getApplications(users) {
    let response = [];
    for (const user of users) {
        if (user.application) {
            response.push(user);
        };
    };
    return response;
};

// console.log(getApplications(usersw));

let text = 'Ya es muy tarde'

function reverseText(text) {
  let response = text.split("").reverse().join("");
  return response;
};

// console.log(reverseText(text));

array = [20, 100]

array2 = [30, 10]

function sumTwoArrays(array, array2) {
    let response = 0
    for (const number in array) {
        response += array[number]
    }
    for (const number in array2) {
        response += array2[number]
    }
    return response;
};

console.log(sumTwoArrays(array, array2));