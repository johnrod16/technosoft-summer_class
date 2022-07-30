const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

    // Array of course-objects
    const courseDetails = [
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


class Students extends Members {

    static #idValue = 0;
    #student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0,
        sPayment : 0
    }

    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super();
        if (studentAge >= 16 && this.#isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.#isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.#student.sCourseDetails.courseName = courseData.courseName;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sBalance = courseData.price;
            this.#student.sId = ++Students.#idValue;
            console.log(`\nThank you for enrolling.\nYour id value is ${this.#student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails() {
        console.log(`\nStudent details:\nId: ${this.#student.sId}`);
        super.showMyDetails();
        console.log(`Course name: ${this.#student.sCourseDetails.courseName}\nBalance: $${this.#student.sBalance}\n`);
        // console.log(this.student);
    }

    /**
     * we want course-object which has name as checkForCourse
     */
    #isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }
    
    /**
        changeCourse
        submitDocuments
        makePayment
        dropOut
        orderBooks
    */


    static messageFromClass2022(msg) {
        console.log(`\nMessage to institute from the Class of 2022:\n${msg}\n`);
    }

    /**
     * changeCourse
     * 
     * input: newCourseName
     * 
     * if newCourseName is valid AND student is not already enrolled in the course
     *      then change the course name
     *      update the course-length as per the new course-length
     *      update the course-price as per the new course-price
     *      update the student-balance as per the new course-price
     * 
     * if newCourseName is invalid
     *      then print msg -> Invalid course name
     * 
     * if student is already enrolled in the course
     *      then print -> You are already enrolled in the course
     * 
     */

    newCourseName (studentCourse) {
        if (this.#isCourseNameValid(studentCourse) && constructor === 0) {
            this.#student.sCourseDetails.courseName = courseData.courseName;
            this.#student.sCourseDetails.coursePrice = courseData.price;
            this.#student.sCourseDetails.courseLength = courseData.length;
            this.#student.sBalance = courseData.price;
        } else if 
            (console.log(`\nCourse name invalid\n`)) {
        } else 
            (console.log("\nStudent already enrolled in class"));
        }
    





    /**
     * makePayment
     * 
     * input : amount
     * 
     * if amount is > 0 and less or equal to balance
     *      print -> Thank you for making payment of $amount
     *      and update the student balance.
     *      if balance is zero, print -> No more payment required.
     *      else -> Updated balance is $balance
     * 
     * if amount is invalid
     *      print -> Invalid amount. Your balance is $balance
     * 
     */

        makePayment (amount) {
            let amount = 0
                if (amount > 0 && this.#student.sPayment <= sBalance) {
                    console.log(`\nThank you for making payment of ${sPayment}`);
                  return this.#student.sBalance
                } else if (this.#student.sBalance === 0){
                    console.log(`\nNo more payment required`);
                } else (console.log(`${this.#student.sBalance}`));
            }
}
module.exports = Students