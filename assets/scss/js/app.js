//$(document).foundation();
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

	// Testing:
	//var footer = $('footer').outerHeight();

}); // end - doc ready

// JSON Data

 	var bio = {
		"name": "Greg",
		"role": "Web Developer",
		"skills":
			{
				"languages": ["HTML5","CSS3","SASS","jQuery","Javascript"],
				"frameworks": ["Foundation","Bootstrap"],
				"CMS": ["ExpressionEngine","Wordpress","CraftCMS"],
				"tools": ["Git","Gulp","Grunt","Sublime Text"]
			},
		"welcomeMessage" : "<p>Once upon a time I built websites with framesets and lots of help from Macromedia: Dreamweaver, Fireworks and Flash.</p><p>The web has evolved a great deal since those days and thankfully, so have my skills.</p> ",
		"biopic" : "https://pixabay.com/static/uploads/photo/2016/03/13/03/37/hot-air-balloons-1253229_960_720.jpg",
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
			//$("#header").prepend(bioName, bioRole, bioMsg, bioPic);

			$("#title").append(bioName);
			$("#summary").prepend(bioMsg);

			if ( Object.keys(bio.contacts).length > 0 ){
				$("footer .contact").prepend(HTMLcontactStart);

				for ( contact in bio.contacts ){
					if ( bio.contacts.hasOwnProperty(contact) ){
						var bioContact = HTMLcontactItem.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
						$(".contact-info").append(bioContact);
				    }
				}
			}

			if ( Object.keys (bio.skills).length > 0 ){

				$("#skills").append(HTMLskillsStart);

				for ( skill in bio.skills ){
					if ( bio.skills.hasOwnProperty(skill) ){
						var bioSkill = HTMLskills.replace("%label%", skill).replace("%data%", bio.skills[skill].join(', '));
						$("#skills-list").append(bioSkill);
				    }
				}
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
			"description": ["ExpressionEngine builds","Front-end development for agencies: entire sites, landing pages, emails"],
			"url":"http://garabedium.com/"
		},
		{
			"employer": "Sampa Housing",
			"title": "Tech & Marketing Director",
			"location": "Sao Paulo, Brazil",
			"dates": "2012 - 2015",
			"description": ["Managed booking website front end, led redesign effort","Designed and developed property lead generation site","Created business solutions to aid a staff of 10 employees"],
			"url":"http://sampahousing.com/"
		},
		{
			"employer": "Blue State Digital",
			"title": "Digital Project Manager",
			"location": "Washington DC, USA",
			"dates": "2009 - 2012",
			"description": ["Managed website, app, and social projects, from concept to launch","Designed project timelines and budgets","Built, maintained, and expanded client relationships"],
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
				//var workDescription = HTMLworkDescription.replace("%data%", job.description);

				workEntry.append(workDates, workLocation, workEmployer, workTitle);

	 			//if (job.description.length > 0){

					workEntry.append(HTMLworkDescriptionStart);

					job.description.forEach(function(item){
						var descriptionItem = HTMLworkDescription.replace("%data%", item);
						$(".description-items:last").append(descriptionItem);
					});
				//}

			});
		}
	}; work.display();

	var education = {
		"schools": [
			{
				"name": "FAAP",
				"location": "Sao Paulo, Brazil",
				"degree": "Portugu\352s",
				"major": "Portugu\352s Para Estrangeiros",
				"dates": "2012 - 2013",
				"url":"http://www.faap.com.br",
			},
			{
				"name": "Providence College",
				"location": "Providence, RI",
				"degree": "Bachelor of Arts",
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
				"school": "Udacity",
				"title": "Front-End Web Developer Nanodegree (FEND)",
				"dates": 2016,
				"url": "http://udacity.com/",
				"courseURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
		],
		"display": function(){

			for( school in education.schools ){

				$("#education").append(HTMLschoolStart);

				var educationEntry = $('.education-entry:last');

				var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%link%", education.schools[school].url);
				var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree) + HTMLschoolMajor.replace("%data%", education.schools[school].major);
				var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				//var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

				educationEntry.append(schoolLocation, schoolName, schoolDegree, schoolDates);
			}

			for ( course in education.onlineCourses ) {

				$("#education").append(HTMLonlineClasses);
			    $("#education").append(HTMLschoolStart);

			    var educationEntry = $('.education-entry:last');

			    var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school).replace("%link%", education.onlineCourses[course].url);
			    var courseTitle = HTMLonlineCourse.replace("%data%", education.onlineCourses[course].title).replace("%link%", education.onlineCourses[course].courseURL);
			    var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				//var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			    educationEntry.append(courseSchool, courseTitle, courseDates);
			}
		}
	}; education.display();

	var projects = {
		"projects": [
		{
			"title": "AmoBikes",
			"titleShort":"amobikes", // used for article class and images
			"role": ["Design","Front-end development Foundation 5"],
			"highlights":["Splash site for personal biking project in Brazil.","AJAX form submission","Mailchimp integration"],
			"url":"http://amobikes.com/"
		},
		{
			"title": "Dandara Careers",
			"titleShort":"dandara", // used for article class and images
			"role": ["ExpressionEngine integration","Limited front-end development with <a href='http://killerbyt.es/' target='_blank' title='KillerBytes'>KillerBytes</a>"],
			"highlights":["Careers site where users can search for and apply for jobs","Search by categories"],
			"url":"http://dandaracareers.com/"
		},
		{
			"title": "FTE Leaders",
			"titleShort":"fteleaders", // used for article class and images
			"role": ["ExpressionEngine integration","Limited front-end development with <a href='http://trumedia.io/' target='_blank'>TruMedia</a>"],
			"highlights":["Large site with diverse templates","Faceted category search","Custom events template with Google Maps integration"],
			"url":"http://fteleaders.org/"
		},
		{
			"title": "AKC Humane Fund",
			"titleShort":"akc", // used for article class and images
			"role": ["ExpressionEngine integration","Front-end development + Bootstrap"],
			"highlights":["Donation site for American Kennel Club","Blog with Disqus comments"],
			"url":"http://akchumanefund.org/"
		},
		{
			"title": "Sampa Corretores",
			"titleShort":"sampahousing", // used for article class and images
			"role": ["Design","ExpressionEngine integration","Front-end development + Foundation 5"],
			"highlights":["Realtors can register and manage properties","Admins can approve or deny property listings"],
			"url":"http://contact.sampahousing.com/corretores/"
		}
	],
		"display": function(){

			for(project in projects.projects){

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

				// Project Highlights
				if ( projects.projects[project].highlights.length > 0 ){

					$(".project-content:last").append(HTMLprojectHighlights, HTMLprojectHighlightsStart);

					projects.projects[project].highlights.forEach(function(item){
						projectHighlights = HTMLprojectList.replace("%data%", item);
						$(".highlights:last").append(projectHighlights);
					});
				}

				// Project Images Column
				$(".project:last").prepend(HTMLprojectImages);
				var projectImages = HTMLprojectImage.replace("%link%", projects.projects[project].url).replace("%title%", projects.projects[project].title).replace(/\%data%/g, projects.projects[project].titleShort);
				$(".project-images:last").append(projectImages);

				var projectUrl = HTMLprojectURL.replace("%data%", projects.projects[project].url).replace("%title%", projects.projects[project].title);
				$(".project-images:last").append(projectUrl);

			}
		}
	}; projects.display();

$("#mapDiv").append(googleMap);

