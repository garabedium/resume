// MVC Resume
/*
	Model: data.json
	Views: Bio, Work, Portfolio etc.
	Control: Communicates between model and views
*/

// Control
var control = {
	init: function(){
		viewBio.init();
		viewJobs.init();
		viewEducation.init();
		viewPortfolio.init();
		this.scrollHeader();
	},
	getData: function() {
	    return $.ajax({
			url: 'dist/js/data.min.json',
			method: 'GET',
			format: 'json',
			dataType: 'json',
	    });
	},
	scrollHeader: function(){
		$(window).scroll(function(){
			var header, headerHeight;
			header = $('header#nav'); //
			headerHeight = header.outerHeight() + 25;
			if($(window).scrollTop() > headerHeight ){
				header.addClass('scroll');
			} else {
				header.removeClass('scroll');
			}
		});
	}
};
// Views
var viewBio = {
	init: function(){
		this.render();
	},
	render: function(){
		var ajaxBio = control.getData().done();
		ajaxBio.done(function(data){
			var bio, bioName, bioMsg, bioPic;

			bio = data.bio;
			//bioName = HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role);
			bioMsg  = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			//bioPic  = HTMLbioPic.replace("%data%", bio.biopic);

			$("#title").append(bioPic, bioName);
			$("#summary").prepend(bioMsg);

			if (bio.skills.length > 0){
				$("#skills").append(HTMLskillsStart);
				bio.skills.forEach(function(skill) {
					var bioSkill = HTMLskills.replace("%data%", skill);
					$("#skills-list").append(bioSkill);
				});
			}
		});
	},
};
var viewJobs = {
	init: function(){
		this.render();
	},
	render: function(){
		var ajaxJobs = control.getData().done();

		ajaxJobs.done(function(data){
			var jobs, workEntry, workEmployer, workTitle, workLocation, workDates, workDescription;
			jobs = data.jobs;

			jobs.forEach(function(job){

				$("#work").append(HTMLworkStart);
				workEntry = $('.work-entry:last');
				workEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#",job.url);
				workTitle = HTMLworkTitle.replace("%data%", job.title);
				workLocation = HTMLworkLocation.replace("%data%", job.location);
				workDates = HTMLworkDates.replace("%data%", job.dates);
				workDescription = HTMLworkDescription.replace("%data%", job.description);

				workEntry.append(workDates, workLocation, workEmployer, workTitle, workDescription);
			});
		});
	}
};
var viewEducation = {
	init: function(){
		this.render();
	},
	render: function(){
		var ajaxEdu = control.getData().done();
		ajaxEdu.done(function(data){
			var schools, educationEntry, schoolName, schoolLocation, schoolDegree, schoolDates;
				schools = data.education;
			for ( var school in schools ){
				$("#education").append(HTMLschoolStart);
				educationEntry = $('.education-entry:last');
				schoolName = HTMLschoolName.replace("%data%", schools[school].name).replace("%link%", schools[school].url);
				schoolDegree = HTMLschoolDegree.replace("%data%", schools[school].degree) + HTMLschoolMajor.replace("%data%", schools[school].majors);
				schoolDates = HTMLschoolDates.replace("%data%", schools[school].date);
				schoolLocation = HTMLschoolLocation.replace("%data%", schools[school].location);
				educationEntry.append(schoolLocation, schoolName, schoolDegree, schoolDates);
			}
		});
	}
};
var viewPortfolio = {
	init: function(){
		this.render();
	},
	render: function(){
		var ajaxProjects = control.getData().done();

		ajaxProjects.done(function(data){
			var projects = data.projects;

			for( var project in projects ) {

				var projectEntry = HTMLprojectStart.replace("%class%", projects[project].titleShort);
				$("main.portfolio section").append(projectEntry);
				$(".project:last").append(HTMLprojectContent);

				// Project Content Column
				var projectTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
				$(".project-content:last").append(projectTitle);

				// Project Role
				if ( projects[project].role.length > 0 ){
					$(".project-content:last").append(HTMLprojectRole, HTMLprojectRoleStart);
					projects[project].role.forEach(function(item){
						projectRole = HTMLprojectList.replace("%data%", item);
						$(".role:last").append(projectRole);
					});
				}

				// Project Description
				var projectDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
				$(".project-content:last").append(projectDescription);

				// Images
				if (projects[project].images.length > 0){
					$(".project:last").prepend(HTMLprojectImagesStart);
					projects[project].images.forEach(function(item){
						var projectImage = HTMLprojectImage.replace("%data%", item).replace("%title%", projects[project].title);
						$(".project-images:last").append(projectImage);
					});
				}

				var projectDates = HTMLprojectDates.replace("%data%", projects[project].dates);
				var projectUrl = HTMLprojectURL.replace("%data%", projects[project].url).replace("%title%", projects[project].title);
				$(".project-images:last").append(projectUrl, projectDates);

			}
		});
	},
};

// Initialize controller
control.init();