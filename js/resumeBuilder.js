var bio = {
    "name": "Tudor Luca",
    "role": "Android Developer",
    "contacts": {
        "mobile": "+40724565349",
        "email": "luca.mtudor@gmail.com",
        "github": "lucamtudor",
        "twitter": "@lucamtudor",
        "location": "Cluj-Napoca"
    },
    "bioPic": "./images/me.png",
    "welcomeMessage": "I am a passionate developer with very strong work ethics, ready to take on a new challenge every day." +
    "<br>I love to write <span class='welcome-message-highlight'>code</span>, I enjoy good <span class='welcome-message-highlight'>music</span>" +
    " and I like to get the best out of <span class='welcome-message-highlight'>life</span>.",
    skills: ["Android SDK", "Java", "Kotlin", "Gradle", "Git", "JavaScript"],
    display: function () {

        var header = $("#header");

        displayName.call(this);
        displayImage.call(this);
        displayWelcomeMessage.call(this);
        displayContacts.call(this);
        displaySkills.call(this);

        function displayName() {
            var name = HTMLheaderName.replace(placeholder, this.name);
            var role = HTMLheaderRole.replace(placeholder, this.role);
            header.prepend(role);
            header.prepend(name);
        }

        function displayImage() {
            var image = HTMLbioPic.replace(placeholder, this.bioPic);
            header.append(image);
        }

        function displayWelcomeMessage() {
            var welcomeMessage = HTMLwelcomeMsg.replace(placeholder, this.welcomeMessage);
            header.append(welcomeMessage);
        }

        function displayContacts() {
            var topContacts = $("#topContacts");
            var footerContacts = $('#footerContacts');
            var contacts = [];
            contacts.push(HTMLmobile.replace(placeholder, this.contacts.mobile));
            contacts.push(HTMLemail.replace(placeholder, this.contacts.email));
            contacts.push(HTMLgithub.replace(placeholder, this.contacts.github));
            contacts.push(HTMLtwitter.replace(placeholder, this.contacts.twitter));
            contacts.push(HTMLlocation.replace(placeholder, this.contacts.location));

            contacts.forEach(function (contact) {
                topContacts.append(contact);
                footerContacts.append(contact);
            });
        }

        function displaySkills() {
            header.append(HTMLskillsStart);
            var skillsList = $("#skills");

            this.skills.forEach(function (skill) {
                skillsList.append(HTMLskills.replace(placeholder, skill));
            });
        }
    }
};

var work = {
    "jobs": [
        {
            employer: "Smart Care",
            title: "Android Developer Consultant",
            location: "Cluj-Napoca, CJ, RO",
            dates: "October 2014 - Future",
            description: "I am busy helping the SmartCare team to revolutionise the child care industry."
        },
        {
            employer: "Mixbook",
            title: "Android Developer Consultant",
            location: "Cluj-Napoca, CJ, RO",
            dates: "July 2013 - September 2013",
            description: "I worked closely with the Mixbook team to help them bring their awesome \
                photo book services to the Android platform through the Mosaic Photo books app."
        },
        {
            employer: "Tecknoworks",
            title: "Android Developer",
            location: "Cluj-Napoca, CJ, RO",
            dates: "February 2012 - August 2014",
            description: "As an Android Developer, I had worked on a variety of mobile applications, \
                from small to enterprise projects, designed for both smartphones and \
                tablets. I had been collaborating directly with the clients on a daily basis to \
                transform their ideas into cutting-edge products."
        }
    ],
    display: function () {

        var workExperience = $("#workExperience");
        this.jobs.forEach(function (job) {
            workExperience.append(HTMLworkStart);
            var workEntry = $(".work-entry:last");
            var formattedEmployer = HTMLworkEmployer.replace(placeholder, job.employer);
            var formattedTitle = HTMLworkTitle.replace(placeholder, job.title);
            var formattedDates = HTMLworkDates.replace(placeholder, job.dates);
            var formattedLocation = HTMLworkLocation.replace(placeholder, job.location);
            var formattedDescription = HTMLworkDescription.replace(placeholder, job.description);
            workEntry.append(formattedEmployer + formattedTitle);
            workEntry.append(formattedDates);
            workEntry.append(formattedLocation);
            workEntry.append(formattedDescription);
        });
    }
};

var projects = {
    "projects": [
        {
            title: "DayCare Management System",
            dates: "April 2014 - Future",
            description: "A management system for daycare centers.",
            images: [
                "http://smart.care/wp-content/uploads/2015/01/Feature-interface-3.png",
                "http://smart.care/wp-content/uploads/2015/01/Feature-child-family-tracking-2.png",
                "http://smart.care/wp-content/uploads/2015/01/Feature-mobile-childcare-intuit-4.png",
                "http://smart.care/wp-content/uploads/2015/01/Feature-marketing-3.png",
                "http://smart.care/wp-content/uploads/2015/01/Feature-billing-schedule-4.png",
                "http://smart.care/wp-content/uploads/2014/12/Feature-SignIn-SignOut-a-3.png"
            ]
        },
        {
            title: "Mosaic",
            dates: "July 2013 - September 2013",
            description: "Create a printed photo book from your Android phone or tablet in a snap.  \
                Arrives in 4 days. It’s the easiest way to create a personalized photo album or  \
                photo gift for family and friends with the pictures on your phone.",
            images: [
                "https://lh4.ggpht.com/njxORYEYWmS9gk9hUjxWs2yQDGlMDfIU5Rq-JXNZMwTNY--VeFpjPiwg0AxkaBz8bAE=h400-rw",
                "https://lh5.ggpht.com/kzFQ6-y4VBHi5LGP2g0sskAWrPq-O4Y84xYc3rn98X2t0q5TLnoc1Kzp23NqxM7kyAHH=h400-rw",
                "https://lh5.ggpht.com/q3L6OaJfZdF7ktqAma7CCJ7wprhSUairYRDVKMtI0GCJeplaa3ulHoeGe6jpO6kBDQ=h400-rw",
                "https://lh4.ggpht.com/iSyUUG_iWLMNCrdIBtoCmMhfQ7_899bfUV3Keaoxmo1L9ht9zK0mAvGlv7I_mGl3l-I=h400-rw",
                "https://lh5.ggpht.com/ah-Q3zaL3rd46CLY3uBHu4AMPjMP7HaZ-CuXsAXgzb8RKolG-ixXAsRaLxFugQi_WyE=h400-rw"
            ]
        }
    ],
    display: function () {
        var section = $("#projects");
        this.projects.forEach(function (project) {
            section.append(HTMLprojectStart);
            var entry = $(".project-entry:last");
            entry.append(HTMLprojectTitle.replace(placeholder, project.title));
            entry.append(HTMLprojectDates.replace(placeholder, project.dates));
            entry.append(HTMLprojectDescription.replace(placeholder, project.description));
            project.images.forEach(function (imagePath) {
                entry.append(HTMLprojectImage.replace(placeholder, imagePath));
            })
        })
    }
};

var education = {
    "schools": [
        {
            "name": "Technical University of Cluj-Napoca",
            "location": "Cluj-Napoca, CJ, RO",
            "degree": "BA",
            "majors": ["Automation and Applied Informatics"],
            "dates": 2015,
            "url": "http://www.utcluj.ro/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud245"
        }
    ],
    display: function () {
        var education = $('#education');
        education.append(HTMLschoolStart);

        this.schools.forEach(function (school) {
            var schoolEntry = $('.education-entry:last');
            var schoolName = $($.parseHTML(HTMLschoolName.replace(placeholder, school.name) + HTMLschoolDegree.replace(placeholder, school.degree)));
            schoolEntry.append(schoolName.attr("href", school.url));
            schoolEntry.append(HTMLschoolDates.replace(placeholder, school.dates));
            schoolEntry.append(HTMLschoolLocation.replace(placeholder, school.location));

            school.majors.forEach(function (major) {
                schoolEntry.append(HTMLschoolMajor.replace(placeholder, major));
            });

            education.append(schoolEntry);
        });

        education.append(HTMLonlineClasses);
        education.append(HTMLschoolStart);

        this.onlineCourses.forEach(function (course) {
            var courseEntry = $('.education-entry:last');
            var courseName = $($.parseHTML(HTMLonlineTitle.replace(placeholder, course.title) + HTMLonlineSchool.replace(placeholder, course.school)));
            var courseUrl = $($.parseHTML(HTMLonlineURL.replace(placeholder, course.url)));
            courseEntry.append(courseName.attr("href", course.url));
            courseEntry.append(HTMLonlineDates.replace(placeholder, course.dates));
            courseEntry.append(courseUrl.attr("href", course.url));
        })
    }
};

var placeholder = "%data%";

function capitalizeFirstLetter(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function inName(fullName) {
    fullName = typeof fullName !== 'undefined' ? fullName : bio.name;
    var name = fullName.trim().split(" ");
    var firstName = capitalizeFirstLetter(name[0]);
    var lastName = name[1].toUpperCase();
    return firstName + " " + lastName;
}

bio.display();
work.display();
projects.display();
education.display();

//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
