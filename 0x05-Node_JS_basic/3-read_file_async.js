const fs = require('fs').promises;

function countStudents(filePath) {
    return fs.readFile(filePath, 'utf8')
        .then((data) => {
            const lines = data.trim().split('\n').slice(1).filter(Boolean);
            console.log(`Number of students: ${lines.length}`);
            
            const fields = {};
            lines.forEach((line) => {
                const [firstname, , , field] = line.split(',');
                if (!fields[field]) fields[field] = [];
                fields[field].push(firstname);
            });

            for (const field in fields) {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            }
        })
        .catch(() => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;

