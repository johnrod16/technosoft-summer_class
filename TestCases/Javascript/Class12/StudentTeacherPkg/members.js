class Members {

    member = {
        name: '',
        age: 0,
        location: ''
    }

    showMyDetails() {
        console.log(`Name: ${this.member.name}\nAge: ${this.member.age}\nLocation: ${this.member.location}`);
        // console.log(this.member);
    }


}
module.exports = Members;