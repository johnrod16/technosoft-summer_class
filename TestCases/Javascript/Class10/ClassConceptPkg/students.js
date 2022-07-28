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


class Students {

    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
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
    enrollment(studentName, studentAge, studentCountry, studentCourse) {
        const msf = new MyStringFunctions();
        // if (age < 16) {
        //     console.log('Student has to be of 16 or above');
        // } else if ()
        if (studentAge >= 16 && this.isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.isCourseNameValid(studentCourse);
            this.student.sName = msf.toTitleCase(studentName);
            this.student.sAge = studentAge;
            this.student.sCountry = studentCountry;
            this.student.sCourseDetails.courseName = courseData.courseName;
            this.student.sCourseDetails.coursePrice = courseData.price;
            this.student.sCourseDetails.courseLength = courseData.length;
            this.student.sBalance = courseData.price;
            this.student.sId = ++this.idValue;
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    showMyDetails() {
        console.log(this.student);
    }

    /**
     * we want course-object which has name as checkForCourse
     */
    isCourseNameValid(checkForCourse) {
        return courseDetails.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }

    /**
    * we want course-object which has name as checkForCourse
    */
    // isCourseNameValid(checkForCourse) {
    //     let matchedCourseObject;
    //     for (const courseOject of courseDetails) {
    //         if (courseOject.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0) {
    //             matchedCourseObject = courseOject;
    //             break;
    //         }
    //     }
    //     return matchedCourseObject;
    // }

    /*
        Array of course-objects
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

        pick an course-object from array
        if (course-object.courseName === checkForCourse)
            return course-object

        arrayName[0].courseName === checkForCourse
            return arrayName[0]

        arrayName[1].courseName === checkForCourse
            return arrayName[1]

    */


}
module.exports = Students;