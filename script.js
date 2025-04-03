document.addEventListener("DOMContentLoaded", function() {
    // Handle contact form submission
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        // Simple validation to ensure all fields are filled
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission (instead of database, just log it)
        console.log("Form submitted:", { name, email, message });

        // Thank the user and reset the form
        alert("Thank you for reaching out! Your message has been received.");
        this.reset();
    });

    // Dynamically load projects into the "Projects" section
    const projects = [
        { title: "Phishing Detection Tool", description: "A tool to identify phishing websites and alerts the user." },
        { title: "Secure Login System", description: "A demo of a secure login and authentication system." },
        { title: "Cybersecurity News Aggregator", description: "A web app that fetches and displays cybersecurity news from various sources." }
    ];

    const projectList = document.querySelector(".project-list");

    // Dynamically create project items
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectDiv);
    });
});
