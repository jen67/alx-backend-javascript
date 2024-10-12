interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number;
    location: string;
    
}

interface BaseTeacher extends Teacher { 
[key: string]: any;
}

const teacher3: BaseTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'USA',
    contract: true,
};

console.log(teacher3);

// Task 2
interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Task 3
function printTeacher(firstName:string, lastName:string) {
    
    return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));