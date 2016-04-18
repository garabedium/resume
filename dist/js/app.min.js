// Custom JS
$(document).ready(function() {

	// Animate header on scroll
	$(window).scroll(function(){

		var header = $('header#nav'); //
		var headerHeight = header.outerHeight() + 25;

		if($(window).scrollTop() > headerHeight ){
			header.addClass('scroll');
		} else {
			header.removeClass('scroll');
		}
	});

}); // end - doc ready

// JSON Data

 	var bio = {
		"name": "Greg",
		"role": "Web Developer",
		"skills": ["HTML5","SASS","Javascript","jQuery","Bootstrap","Foundation","Git","Gulp","Grunt","ExpressionEngine","Wordpress","CraftCMS"],
			// {
			// 	"languages": ["HTML5","CSS3","SASS","jQuery","Javascript"],
			// 	"frameworks": ["Foundation","Bootstrap"],
			// 	"CMS": ["ExpressionEngine","Wordpress","CraftCMS"],
			// 	"tools": ["Git","Gulp","Grunt","Sublime Text"]
			// },
		"welcomeMessage" : "<p>Once upon a time I built websites with framesets and lots of help from Macromedia: Dreamweaver, Fireworks and Flash.</p><p>The web has evolved a great deal since those days and thankfully, so have my skills.</p> ",
		"biopic" : "assets/images/greg.jpg",
		"contacts":
		{
			"mobile": "tel:+55.11.96026.5146",
			"email": "mailto:garabedium@gmail.com",
			"github": "http://github.com/garabedium",
			"linkedin":"http://linkedin.com/in/garabedium",
			"location": "Sao Paulo, Brazil"
		},
		"display": function(){

			var bioName = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
			var bioMsg  = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			var bioPic  = HTMLbioPic.replace("%data%", bio.biopic);

			$("#title").append(bioPic, bioName);
			$("#summary").prepend(bioMsg);

			if ( Object.keys(bio.contacts).length > 0 ){
				$("footer .contact").prepend(HTMLcontactStart);
				$("header#nav").append(HTMLcontactStart);

				for ( var contact in bio.contacts ){
					if ( bio.contacts.hasOwnProperty(contact) ){
						var bioContact = HTMLcontactItem.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
						$(".contact-info").append(bioContact);

				    }
				}
			}

			if (bio.skills.length > 0){
				$("#skills").append(HTMLskillsStart);
				bio.skills.forEach(function(skill) {
					var bioSkill = HTMLskills.replace("%data%", skill);
					$("#skills-list").append(bioSkill);
				});
			}
		}
	}; bio.display();

	var work = {
		"jobs": [
		{
			"employer": "Freelance Web Developer",
			"title": "@Self-Employed",
			"location": "Sao Paulo, Brazil", //\343
			"dates": "2012 - Present",
			"description": "ExpressionEngine builds. Front-end development.",
			//"description": ["ExpressionEngine builds","Front-end development for agencies: entire sites, landing pages, emails"],
			"url":"http://garabedium.com/"
		},
		{
			"employer": "Sampa Housing",
			"title": "Tech & Marketing Director",
			"location": "Sao Paulo, Brazil",
			"dates": "2012 - 2015",
			"description": "Managed website. Designed and developed property lead generation site",
			//"description": ["Managed booking website front end, led redesign effort","Designed and developed property lead generation site","Created business solutions to aid a staff of 10 employees"],
			"url":"http://sampahousing.com/"
		},
		{
			"employer": "Blue State Digital",
			"title": "Digital Project Manager",
			"location": "Washington DC, USA",
			"dates": "2009 - 2012",
			"description": "Managed website and app builds. Designed project scopes and budgets.",
			//"descriptionLong": ["Managed website, app, and social projects, from concept to launch","Designed project timelines and budgets","Built, maintained, and expanded client relationships"],
			"url":"http://bluestatedigital.com/"
		}
	],
		"display": function(){

			work.jobs.forEach(function(job){

				$("#work").append(HTMLworkStart);

				var workEntry = $('.work-entry:last');
				var workEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#",job.url);
				var workTitle = HTMLworkTitle.replace("%data%", job.title);
				var workLocation = HTMLworkLocation.replace("%data%", job.location);
				var workDates = HTMLworkDates.replace("%data%", job.dates);
				var workDescription = HTMLworkDescription.replace("%data%", job.description);

				workEntry.append(workDates, workLocation, workEmployer, workTitle, workDescription);

					// workEntry.append(HTMLworkDescriptionStart);

					// job.description.forEach(function(item){
					// 	var descriptionItem = HTMLworkDescription.replace("%data%", item);
					// 	$(".description-items:last").append(descriptionItem);
					// });
			});
		}
	}; work.display();

	var education = {
		"schools": [
			{
				"name": "FAAP",
				"location": "Sao Paulo, Brazil",
				"degree": "Portugu\352s",
				"majors": ["Portugu\352s Para Estrangeiros"],
				"date": "2012 - 2013",
				"url":"http://www.faap.com.br",
			},
			{
				"name": "Providence College",
				"location": "Providence, RI",
				"degree": "Bachelor of Arts",
				"majors": ["Political Science"],
				"date": "2004 - 2008",
				"url":"http://www.providence.edu/",
			},
			{
				"name": "Stellenbosch University",
				"location": "Stellenbosch, South Africa",
				"degree": "NA",
				"majors": ["Political Science"],
				"date": "2006 - 2007",
				"url":"http://www.sun.ac.za/"
			}
		],
		"onlineCourses": [
			{
				"school": "Udacity",
				"title": "Front-End Web Developer Nanodegree (FEND)",
				"date": "2016",
				"url": "http://udacity.com/",
				"courseURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
		],
		"display": function(){

			for ( var school in education.schools ){

				$("#education").append(HTMLschoolStart);

				var educationEntry = $('.education-entry:last');

				var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%link%", education.schools[school].url);
				var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree) + HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
				var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

				educationEntry.append(schoolLocation, schoolName, schoolDegree, schoolDates);
			}

			for ( var course in education.onlineCourses ) {

				$("#education").append(HTMLonlineClasses);
			    $("#education").append(HTMLschoolStart);

			    var educationEntry = $('.education-entry:last');

			    var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school).replace("%link%", education.onlineCourses[course].url);
			    var courseTitle = HTMLonlineCourse.replace("%data%", education.onlineCourses[course].title).replace("%link%", education.onlineCourses[course].courseURL);
			    var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
				//var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			    educationEntry.append(courseSchool, courseTitle, courseDates);
			}
		}
	}; education.display();

	var projects = {
		"projects": [
		{
			"title": "Dandara Careers",
			"images": ["assets/images/project-dandara-large@desktop.jpg"],
			//"assets/images/project-dandara-1","assets/images/project-dandara-2","assets/images/project-dandara-3"],
			"dates": "2014",
			"titleShort":"dandara",
			"role": ["ExpressionEngine integration","Limited front-end development with <a href='http://killerbyt.es/' target='_blank' title='KillerBytes'>KillerBytes</a>"],
			"description": "Careers site where users can search for and apply for jobs. Search by categories",
			//"description":["Careers site where users can search for and apply for jobs","Search by categories"],
			"url":"http://dandaracareers.com/"
		},
		{
			"title": "FTE Leaders",
			"images": ["assets/images/project-fteleaders-large@desktop.jpg"],
			//,"assets/images/project-fteleaders-1","assets/images/project-fteleaders-2","assets/images/project-fteleaders-3"],
			"dates": "2013",
			"titleShort": "fteleaders",
			"role": ["ExpressionEngine integration","Limited front-end development with <a href='http://trumedia.io/' target='_blank'>TruMedia</a>"],
			"description":"Large site with diverse templates. Faceted search.",
			//"description":["Large site with diverse templates","Faceted category search","Custom events template with Google Maps integration"],
			"url":"http://fteleaders.org/"
		},
		{
			"title": "AKC Humane Fund",
			"images": ["assets/images/project-akc-large@desktop.jpg"],
			//,"assets/images/project-akc-1","assets/images/project-akc-2"],
			"dates": "2013",
			"titleShort": "akc",
			"role": ["ExpressionEngine integration","Front-end development + Bootstrap"],
			"description": "Donation site for American Kennel Club",
			//"description":["Donation site for American Kennel Club","Blog with Disqus comments"],
			"url":"http://akchumanefund.org/"
		},
		{
			"title": "AmoBikes",
			"images": ["assets/images/project-amobikes-large@desktop.jpg"],
			"dates": "2016",
			"titleShort":"amobikes", // used for article class and images
			"role": ["Design","Front-end development + Foundation 5"],
			"description": "Splash site for personal biking project in Brazil",
			//"description":["Splash site for personal biking project in Brazil.","AJAX form submission","Mailchimp integration"],
			"url":"http://amobikes.com/"
		},
		{
			"title": "Sampa Corretores",
			"images": ["assets/images/project-sampahousing-large@desktop.jpg"],
			//,"assets/images/project-sampahousing-1","assets/images/project-sampahousing-2"],
			"dates": "2015",
			"titleShort": "sampahousing",
			"role": ["Design","ExpressionEngine integration","Front-end development + Foundation 5"],
			"description":"Realtors can register and manage properties. Admins can approve and deny property listings.",
			//"description":["Realtors can register and manage properties","Admins can approve or deny property listings"],
			"url":"http://contact.sampahousing.com/corretores/"
		}
	],
		"display": function(){

			for( var project in projects.projects ) {

				var projectEntry = HTMLprojectStart.replace("%class%", projects.projects[project].titleShort);
				$("main.portfolio section").append(projectEntry);
				$(".project:last").append(HTMLprojectContent);

				// Project Content Column
				var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-content:last").append(projectTitle);

				// Project Role
				if ( projects.projects[project].role.length > 0 ){

					$(".project-content:last").append(HTMLprojectRole, HTMLprojectRoleStart);

					projects.projects[project].role.forEach(function(item){
						projectRole = HTMLprojectList.replace("%data%", item);
						$(".role:last").append(projectRole);
					});

				}

				// Project Description

				//$(".project-content:last").append(HTMLprojectHighlightsStart);
				var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-content:last").append(projectDescription);

				// if ( projects.projects[project].description.length > 0 ){
				// 	$(".project-content:last").append(HTMLprojectHighlights, HTMLprojectHighlightsStart);
				// 	projects.projects[project].description.forEach(function(item){
				// 		projectHighlights = HTMLprojectList.replace("%data%", item);
				// 		$(".highlights:last").append(projectHighlights);
				// 	});
				// }

				//var projectImages = HTMLprojectImage.replace("%link%", projects.projects[project].url).replace("%title%", projects.projects[project].title).replace(/\%data%/g, projects.projects[project].titleShort);
				//$(".project-images:last").append(projectImages);

				// Images
				if (projects.projects[project].images.length > 0){

					$(".project:last").prepend(HTMLprojectImagesStart);
					//$(".project-images:last").prepend(HTMLprojectImage);

					projects.projects[project].images.forEach(function(item){
						var projectImage = HTMLprojectImage.replace("%data%", item).replace("%title%", projects.projects[project].title);
						$(".project-images:last").append(projectImage);
					});
				}

				var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				var projectUrl = HTMLprojectURL.replace("%data%", projects.projects[project].url).replace("%title%", projects.projects[project].title);
				$(".project-images:last").append(projectUrl, projectDates);


			}
		}
	}; projects.display();

$("#mapDiv").append(googleMap);

// Initialize Foundation
$(document).foundation();
