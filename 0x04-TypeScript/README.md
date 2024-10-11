# 0x04. TypeScript

## Overview

This project focuses on TypeScript, a strongly typed programming language that builds on JavaScript. Below is a list of tasks you need to complete as part of this project, along with instructions and requirements for each task.

## Tasks

### Task 0: Creating an Interface for a Student

- **Directory**: `task_0/`
- **File**: `task_0/js/main.ts`
- **Instructions**:
  - Create an interface named `Student` with properties:
    - `firstName` (string)
    - `lastName` (string)
    - `age` (number)
    - `location` (string)
  - Create two students and store them in an array `studentsList`.
  - Render a table using Vanilla JS, with each row displaying the `firstName` and `location` of each student.

### Task 1: Let's Build a Teacher Interface

- **Directory**: `task_1/`
- **File**: `task_1/js/main.ts`
- **Instructions**:
  - Create an interface `Teacher` with the following attributes:
    - `firstName` and `lastName` (both strings) — modifiable only upon initialization.
    - `fullTimeEmployee` (boolean) — always defined.
    - `yearsOfExperience` (number) — optional.
    - `location` (string) — always defined.
  - Add support for additional attributes like `contract` (boolean).
  - Example:

    ```typescript
    const teacher3: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      contract: false,
    };
    ```

### Task 2: Extending the Teacher Interface

- **Directory**: `task_1/`
- **File**: `task_1/js/main.ts`
- **Instructions**:
  - Create an interface `Directors` that extends `Teacher`, adding a new attribute `numberOfReports` (number).
  - Example:

    ```typescript
    const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      numberOfReports: 17,
    };
    ```

### Task 3: Printing Teachers

- **Directory**: `task_1/`
- **File**: `task_1/js/main.ts`
- **Instructions**:
  - Create a function `printTeacher` that accepts `firstName` and `lastName`, and returns a string in the format `J. Doe` for `John Doe`.
  - Define an interface for the function called `printTeacherFunction`.

### Task 4: Writing a Class

- **Directory**: `task_1/`
- **File**: `task_1/js/main.ts`
- **Instructions**:
  - Create a `StudentClass` that includes:
    - A constructor accepting `firstName` and `lastName`.
    - A method `workOnHomework` that returns "Currently working".
    - A method `displayName` that returns the student's first name.

### Task 5: Advanced Types Part 1

- **Directory**: `task_2/`
- **File**: `task_2/js/main.ts`
- **Instructions**:
  - Create two interfaces: `DirectorInterface` and `TeacherInterface`, each with three methods.
  - Define a `Director` and `Teacher` class that implement these interfaces.
  - Implement a `createEmployee` function to return either a `Teacher` or `Director` based on the salary provided.

### Task 6: Creating Functions Specific to Employees

- **Directory**: `task_2/`
- **File**: `task_2/js/main.ts`
- **Instructions**:
  - Create a function `isDirector` that checks if an employee is a Director.
  - Create a function `executeWork` that calls the appropriate method depending on whether the employee is a `Director` or a `Teacher`.

### Task 7: String Literal Types

- **Directory**: `task_2/`
- **File**: `task_2/js/main.ts`
- **Instructions**:
  - Create a string literal type `Subjects` for `Math` and `History`.
  - Write a function `teachClass` that returns "Teaching Math" or "Teaching History" based on the value of the `todayClass` argument.

### Task 8: Ambient Namespaces

- **Directory**: `task_3/`
- **Files**: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`
- **Instructions**:
  - Create a type `RowID` and an interface `RowElement`.
  - Download and use a library `crud.js` to simulate saving entities to a database.
  - Declare types for the `crud.js` functions in an ambient namespace.

### Task 9: Namespace & Declaration Merging

- **Directory**: `task_4/`
- **Files**: `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`
- **Instructions**:
  - Create a `Teacher` interface inside a namespace `Subjects`.
  - Write classes `Cpp`, `Java`, and `React` that extend `Subject`.
  - Implement methods to display the teacher’s availability and requirements for each subject.

### Task 10: Update `main.ts`

- **Directory**: `task_4/`
- **File**: `task_4/js/main.ts`
- **Instructions**:
  - Export constants `cpp`, `java`, `react` for their respective subjects.
  - Create a `Teacher` object `cTeacher` with experienceTeachingC set to 10.
  - Log details about the subjects and their available teachers.

### Task 11: Brand Convention & Nominal Typing

- **Directory**: `task_5/`
- **File**: `task_5/js/main.ts`
- **Instructions**:
  - Create two interfaces `MajorCredits` and `MinorCredits`, each defining a `credits` attribute.
  - Write functions `sumMajorCredits` and `sumMinorCredits` to sum the credits of two subjects.

## Requirements

- TypeScript files must use the `.ts` extension.
- Webpack should build without errors or warnings.
- Follow the file structure and directory guidelines strictly.
- Ensure all functions and classes are typed using TypeScript.

## Resources

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is licensed under the terms of ALX, © 2024.
