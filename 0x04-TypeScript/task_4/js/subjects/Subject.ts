namespace Subjects {
    export class Subject {
        teacher: Teacher = { firstName: '', lastName: '' };

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}