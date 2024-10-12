interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'USA'
}

const student2: Student = {
    firstName: 'Gift',
    lastName: 'Amachree',
    age: 24,
    location: 'Nigeria'
}

const studentList: Student[] = [
    student1,
    student2
];

console.log(studentList);

// Step 1: Create a <table> element
const table = document.createElement('table');

// Step 2: Create a <thead> element and add headers
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
headerRow.appendChild(nameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);


thead.appendChild(headerRow);
table.appendChild(thead);

// Step 3: Create a <tbody> element
const tbody = document.createElement('tbody');

// Step 4: Loop over the students and create rows and cells
studentList.forEach((student) => {
  const row = tbody.insertRow();  // Insert a new row

  // Insert two cells in each row
  const firstNameCell = row.insertCell(0);  // First column for first name
  const locationCell = row.insertCell(1);   // Second column for location

  // Set the text content of each cell
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the tbody to the table
table.appendChild(tbody);

// Step 5: Append the table to the body of the document
document.body.appendChild(table);