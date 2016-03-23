// JSON

 	var bio = {
		"name": "Greg",
		"role": "Developer",
		"skills": ["GitHub","Gulp","Javascript"],
		"welcomeMessage" : "Welcome to the jungle.",
		"biopic" : "https://pixabay.com/static/uploads/photo/2016/03/13/03/37/hot-air-balloons-1253229_960_720.jpg",
		"contacts":
		{
			"mobile": "555-444-4321",
			"email": "greg@lorem.com",
			"github": "garabedium",
			"location": "Sao Paulo, Brazil"
		},
		"display": function(){

			var bioName = HTMLheaderName.replace("%data%", bio.name);
			var bioRole = HTMLheaderRole.replace("%data%", bio.role);
			var bioMsg  = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			var bioPic  = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").prepend(bioName, bioRole, bioMsg, bioPic);

			if ( Object.keys(bio.contacts).length > 0 ){

				for ( contact in bio.contacts ){
					if ( bio.contacts.hasOwnProperty(contact) ){
						var bioContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
						$("#topContacts").append(bioContact);
				    }
				};

			}

			if (bio.skills.length > 0){

				$("#header").append(HTMLskillsStart);

				bio.skills.forEach(function(skill){
					var bioSkill = HTMLskills.replace("%data%", skill);
					$("#skills").append(bioSkill);
				});
			}
		}
	}; bio.display();

	var work = {
		"jobs": [
		{
			"employer": "Sampa Housing",
			"title": "Tech Director",
			"location": "Sao Paulo, Brazil",
			"dates": "2012 - 2015",
			"description": "Lorem the ipsum.",
			"url":"http://sampahousing.com/"
		},
		{
			"employer": "Blue State Digital",
			"title": "Project Manager",
			"location": "Washington DC USA",
			"dates": "2009 - 2012",
			"description": "Ipsum lrem dolum dolit p.",
			"url":"http://bluestatedigital.com/"
		}
	],
		"display": function(){

			work.jobs.forEach(function(job){

				$("#workExperience").append(HTMLworkStart);

				var workEntry = $('.work-entry:last');
				var workEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer).replace("#",job.url) + HTMLworkTitle.replace("%data%", job.title);
				var workLocation = HTMLworkLocation.replace("%data%", job.location);
				var workDates = HTMLworkDates.replace("%data%", job.dates);
				var workDescription = HTMLworkDescription.replace("%data%", job.description);

				workEntry.append(workLocation, workEmployerTitle, workDates, workDescription);

			});
		}
	}; work.display();


	var projects = {
		"projects": [
		{
			"title": "AmoBikes",
			"dates": "Present",
			"images": ["http://placehold.it/350x150","http://placehold.it/350x150","http://placehold.it/350x150"],
			"description": "Lorem ipsum."
		},
		{
			"title": "FTE Leaders",
			"dates": 2013,
			"images": ["http://placehold.it/350x150","http://placehold.it/350x150","http://placehold.it/350x150"],
			"description": "Ipsum the lorem."
		}
	],
		"display": function(){

			for(project in projects.projects){
				$("#projects").append(HTMLprojectStart);

				var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(projectTitle);

				var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(projectDates);

				var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(projectDescription);

				if ( projects.projects[project].images.length > 0 ) {
					for(image in projects.projects[project].images){
						var projectImage = HTMLprojectImage.replace( "%data%", projects.projects[project].images[image] );
						$("project-entry:last").append(projectImage);
					}
				}
			}
		}
	}; projects.display();

	var education = {
		"schools": [
			{
				"name": "Fundação Armando Alvares Penteado (FAAP)",
				"location": "São Paulo, Brazil",
				"degree": "Português",
				"major": "Português Para Estrangeiros",
				"dates": "2012 - 2013",
				"url":"http://www.faap.com.br",
			},
			{
				"name": "Providence College",
				"location": "Providence, RI",
				"degree": "BA",
				"major": "Political Science",
				"dates": "2004 - 2008",
				"url":"http://www.providence.edu/",
			},
			{
				"name": "Stellenbosch University",
				"location": "Stellenbosch, South Africa",
				"degree": "NA",
				"major": "Political Science",
				"dates": 2007,
				"url":"http://www.sun.ac.za/"
			}
		],
		"onlineCourses": [
			{
				"title": "Front-End Web Developer Nanodegree",
				"school": "Udacity",
				"dates": 2016,
				"url": "http://udacity.com/"
			}
		],
		"display": function(){

			for( school in education.schools ){

				$("#education").append(HTMLschoolStart);

				var educationEntry = $('.education-entry:last');

				var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

				educationEntry.append(schoolName, schoolDates, schoolLocation, schoolMajor);
			}

			for ( course in education.onlineCourses ) {

				$("#education").append(HTMLonlineClasses);
			    $("#education").append(HTMLschoolStart);

			    var educationEntry = $('.education-entry:last');

			    var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			    var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			    educationEntry.append(courseTitle, courseDates, courseURL);
			}
		}
	}; education.display();


$("#mapDiv").append(googleMap);




