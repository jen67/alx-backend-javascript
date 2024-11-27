const fs = require('fs');

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8').trim().split('\n');
        const students = data.slice(1).filter(Boolean);
        console.log(`Number of students: ${students.length}`);
        
        const fields = {};
        students.forEach((line) => {
            const [firstname, , , field] = line.split(',');
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstname);
        });

        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

