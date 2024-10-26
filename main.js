class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    present() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Відвідуваність вже заповнена на 25 занять.");
        }
    }

    absent() {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Відвідуваність вже заповнена на 25 занять.");
        }
    }

    getAttendanceAverage() {
        const attendedClasses = this.attendance.filter(day => day === true).length;
        const totalClasses = this.attendance.filter(day => day !== null).length;
        return totalClasses ? attendedClasses / totalClasses : 0;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAttendanceAverage();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Іван", "Коваленко", 2003);
const student2 = new Student("Марія", "Шевченко", 2004);
const student3 = new Student("Олексій", "Бондар", 2002);

student1.addGrade(95);
student1.addGrade(88);
student1.addGrade(92);

student2.addGrade(70);
student2.addGrade(85);
student2.addGrade(90);

student3.addGrade(65);
student3.addGrade(78);
student3.addGrade(60);

for (let i = 0; i < 20; i++) {
    student1.present();
    student2.absent();
}
for (let i = 0; i < 18; i++) {
    student3.present();
}

console.log(`${student1.firstName} ${student1.lastName} (вік: ${student1.getAge()})`);
console.log("Середня оцінка:", student1.getAverageGrade());
console.log("Середня відвідуваність:", student1.getAttendanceAverage());
console.log("Підсумок:", student1.summary());

console.log(`${student2.firstName} ${student2.lastName} (вік: ${student2.getAge()})`);
console.log("Середня оцінка:", student2.getAverageGrade());
console.log("Середня відвідуваність:", student2.getAttendanceAverage());
console.log("Підсумок:", student2.summary());

console.log(`${student3.firstName} ${student3.lastName} (вік: ${student3.getAge()})`);
console.log("Середня оцінка:", student3.getAverageGrade());
console.log("Середня відвідуваність:", student3.getAttendanceAverage());
console.log("Підсумок:", student3.summary());

