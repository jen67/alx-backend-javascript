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