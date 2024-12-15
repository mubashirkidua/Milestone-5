// Listing element.
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var linkedinElement = document.getElementById('linkedin');
    var mobileElement = document.getElementById('mobile');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var professionalexperienceElement = document.getElementById('professionalexperience');
    var skillsElement = document.getElementById('skills');
    var seminarsandworkshopsElement = document.getElementById('seminarsandworkshops');
    //  
    var usernameElement = document.getElementById("username");
    if (nameElement && emailElement && linkedinElement && mobileElement && addressElement && educationElement &&
        professionalexperienceElement && skillsElement && seminarsandworkshopsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var linkedin = linkedinElement.value;
        var mobile = mobileElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var professionalexperience = professionalexperienceElement.value;
        var skills = skillsElement.value;
        var seminarsandworkshops = seminarsandworkshopsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //  Create Resume Output.
        var resumeOutput = "\n    <h2>Editable Resume</h2>\n    <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name_1, "</span></p>\n    <p><strong>Email:</strong><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><strong>Linkedin:</strong><span contenteditable=\"true\">").concat(linkedin, "</span></p>\n    <p><strong>Mobile:</strong><span contenteditable=\"true\">").concat(mobile, "</span></p>\n    <p><strong>Address:</strong><span contenteditable=\"true\">").concat(address, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Professionalexperience</h3>\n    <p contenteditable=\"true\">").concat(professionalexperience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    <h3>Seminarsandworkshops</h3>\n    <p contenteditable=\"true\">").concat(seminarsandworkshops, "</p>\n       \n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
