// Listing element.

    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();


     const nameElement = document.getElementById('name') as HTMLInputElement;
     const emailElement = document.getElementById('email') as HTMLInputElement;
     const linkedinElement = document.getElementById('linkedin') as HTMLInputElement;
     const mobileElement = document.getElementById('mobile') as HTMLInputElement;
     const addressElement = document.getElementById('address') as HTMLInputElement;
     const educationElement = document.getElementById('education') as HTMLInputElement;
     const professionalexperienceElement = document.getElementById('professionalexperience') as HTMLInputElement;
     const skillsElement = document.getElementById('skills') as HTMLInputElement;
     const seminarsandworkshopsElement = document.getElementById('seminarsandworkshops') as HTMLInputElement;

    //  
      const usernameElement = document.getElementById(
        "username"
      ) as HTMLInputElement;

       if (nameElement && emailElement && linkedinElement && mobileElement && addressElement && educationElement &&
        professionalexperienceElement && skillsElement && seminarsandworkshopsElement &&

        usernameElement
        
    ) {

            const name = nameElement.value;
            const email = emailElement.value;
            const linkedin = linkedinElement.value;
            const mobile = mobileElement.value;
            const address = addressElement.value;
            const education = educationElement.value;
            const professionalexperience = professionalexperienceElement.value;
            const skills  = skillsElement.value;
            const seminarsandworkshops = seminarsandworkshopsElement.value;

            const username = usernameElement.value;
            const uniquePath =  `resumes/${username.replace(/\s+/g, '_')}_cv.html`
        
    //  Create Resume Output.

    const resumeOutput = `
    <h2>Editable Resume</h2>
    <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
    <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
    <p><strong>Linkedin:</strong><span contenteditable="true">${linkedin}</span></p>
    <p><strong>Mobile:</strong><span contenteditable="true">${mobile}</span></p>
    <p><strong>Address:</strong><span contenteditable="true">${address}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Professionalexperience</h3>
    <p contenteditable="true">${professionalexperience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    <h3>Seminarsandworkshops</h3>
    <p contenteditable="true">${seminarsandworkshops}</p>
       
    `;

    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your 2024 Resume';

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;

     resumeOutputElement.appendChild(downloadLink)

    } else {
        console.error('the resume output elements are missing')
    }
    } else {
        console.error('one or more output elements are missing')
    }

});
