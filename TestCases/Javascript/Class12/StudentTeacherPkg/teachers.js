const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

const courseDetailsTeacher = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]

const msf = new MyStringFunctions
class Teachers extends Members {

    static idValue = 0;
    teacher = {
        tId : 0,
        tCourseDetails : {
            courseName : '',
            courseLength : 0
        },
        tSalary : 0
    }


    #isCourseNameValid(checkForCourse) {
        return courseDetailsTeacher.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }


    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */
    //hiring(teacherName, teacherAge, teacherCountry, teacherCourseName) {
        constructor(teacherName, teacherAge, teacherCountry, teacherCourse) {
            super();
            if (teacherAge >= 21 && this.#isCourseNameValid(teacherCourse) && teacherCountry.toLowerCase().localeCompare('usa') === 0 ) {
                const courseData = this.#isCourseNameValid(teacherCourse);
                this.member.name = MyStringFunctions.toTitleCase(teacherName);
                this.member.age = teacherAge;
                this.member.location = teacherCountry.toUpperCase();
                this.teacher.tCourseDetails.courseName = courseData.courseName;
                this.teacher.tCourseDetails.courseLength = courseData.length;
                this.teacher.tId = ++Teachers.idValue;
                console.log(`\nThank you for enrolling.\nYour id value is ${this.teacher.tId}\n`);
            } else {
                console.log("\nDO NOT ENROLL");
            }
        }
    



        showMyDetailsTeacher() {
            console.log(`\nTeacher details:\nId: ${this.teacher.tId}`);
            super.showMyDetails();
            console.log(`Course name: ${this.teacher.tCourseDetails.courseName}\nSalary: $${this.teacher.tSalary}\n`);
            //console.log(this.teacher);
        }


    //changeTeachingCourse() {
        // code
    //}










    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
    
    //addGrade() {
        // code
    //}









    /**
     * removeGrade
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */
    
    //removeGrade() {
        // code
    //}

}

module.exports = Teachers
