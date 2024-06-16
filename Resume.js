
document.addEventListener('DOMContentLoaded', function() {
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');
    const addWorkButton = document.getElementById('addWork');
    const addEducationButton = document.getElementById('addEducation');
    const addSkillButton = document.getElementById('addSkill');
    const printResumeButton = document.getElementById('printResume');

    addWorkButton.addEventListener('click', function() {
        addWorkExperience();
    });

    addEducationButton.addEventListener('click', function() {
        addEducation();
    });

    addSkillButton.addEventListener('click', function() {
        addSkill();
    });

    resumeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        generateResume();
    });

    printResumeButton.addEventListener('click', function() {
        window.print();
    });

    function addWorkExperience() {
        const workDiv = document.createElement('div');
        workDiv.className = 'work-entry';
        workDiv.innerHTML = `
            <input type="text" class="company" placeholder="Company" required>
            <input type="text" class="role" placeholder="Role" required>
            <input type="text" class="duration" placeholder="Duration" required>
            <textarea class="description" placeholder="Description" required></textarea>
            <button type="button" class="remove-work">Remove</button>
        `;
        workDiv.querySelector('.remove-work').addEventListener('click', function() {
            workDiv.remove();
        });
        document.getElementById('workExperience').appendChild(workDiv);
    }

    function addEducation() {
        const educationDiv = document.createElement('div');
        educationDiv.className = 'education-entry';
        educationDiv.innerHTML = `
            <input type="text" class="institution" placeholder="Institution" required>
            <input type="text" class="degree" placeholder="Degree" required>
            <input type="text" class="ed-duration" placeholder="Duration" required>
            <button type="button" class="remove-education">Remove</button>
        `;
        educationDiv.querySelector('.remove-education').addEventListener('click', function() {
            educationDiv.remove();
        });
        document.getElementById('education').appendChild(educationDiv);
    }

    function addSkill() {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-entry';
        skillDiv.innerHTML = `
            <input type="text" class="skill" placeholder="Skill" required>
            <button type="button" class="remove-skill">Remove</button>
        `;
        skillDiv.querySelector('.remove-skill').addEventListener('click', function() {
            skillDiv.remove();
        });
        document.getElementById('skills').appendChild(skillDiv);
    }

    function generateResume() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;

        let workExperienceHTML = '';
        document.querySelectorAll('.work-entry').forEach(function(entry) {
            const company = entry.querySelector('.company').value;
            const role = entry.querySelector('.role').value;
            const duration = entry.querySelector('.duration').value;
            const description = entry.querySelector('.description').value;
            workExperienceHTML += `
                <div class="work-entry-output">
                    <h3>${role} at ${company}</h3>
                    <p>${duration}</p>
                    <p>${description}</p>
                </div>
            `;
        });

        let educationHTML = '';
        document.querySelectorAll('.education-entry').forEach(function(entry) {
            const institution = entry.querySelector('.institution').value;
            const degree = entry.querySelector('.degree').value;
            const duration = entry.querySelector('.ed-duration').value;
            educationHTML += `
                <div class="education-entry-output">
                    <h3>${degree}, ${institution}</h3>
                    <p>${duration}</p>
                </div>
            `;
        });

        let skillsHTML = '';
        document.querySelectorAll('.skill-entry').forEach(function(entry) {
            const skill = entry.querySelector('.skill').value;
            skillsHTML += `<span class="skill-output">${skill}</span> `;
        });

        resumeOutput.innerHTML = `
            <h1>${name}</h1>
            <p>${email} | ${phone}</p>
            <h2>Summary</h2>
            <p>${summary}</p>
            <h2>Work Experience</h2>
            ${workExperienceHTML}
            <h2>Education</h2>
            ${educationHTML}
            <h2>Skills</h2>
            <p>${skillsHTML}</p>
        `;
    }
});
