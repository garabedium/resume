$(document).ready(function(){$(window).scroll(function(){var e=$("header#nav"),t=e.outerHeight()+25;$(window).scrollTop()>t?e.addClass("scroll"):e.removeClass("scroll")})});var bio={name:"Greg",role:"Web Developer",skills:{languages:["HTML5","CSS3","SASS","jQuery","Javascript"],frameworks:["Foundation","Bootstrap"],CMS:["ExpressionEngine","Wordpress","CraftCMS"],tools:["Git","Gulp","Grunt","Sublime Text"]},welcomeMessage:"<p>Once upon a time I built websites with framesets and lots of help from Macromedia: Dreamweaver, Fireworks and Flash.</p><p>The web has evolved a great deal since those days and thankfully, so have my skills.</p> ",contacts:{mobile:"tel:+55.11.96026.5146",email:"mailto:garabedium@gmail.com",github:"http://github.com/garabedium",linkedin:"http://linkedin.com/in/garabedium",location:"Sao Paulo, Brazil"},display:function(){var e=HTMLheaderName.replace("%data%",bio.name)+HTMLheaderRole.replace("%data%",bio.role),t=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);HTMLbioPic.replace("%data%",bio.biopic);if($("#title").append(e),$("#summary").prepend(t),Object.keys(bio.contacts).length>0){$("footer .contact").prepend(HTMLcontactStart);for(contact in bio.contacts)if(bio.contacts.hasOwnProperty(contact)){var o=HTMLcontactItem.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);$(".contact-info").append(o)}}if(Object.keys(bio.skills).length>0){$("#skills").append(HTMLskillsStart);for(skill in bio.skills)if(bio.skills.hasOwnProperty(skill)){var a=HTMLskills.replace("%label%",skill).replace("%data%",bio.skills[skill].join(", "));$("#skills-list").append(a)}}}};bio.display();var work={jobs:[{employer:"Freelance Web Developer",title:"@Self-Employed",location:"Sao Paulo, Brazil",dates:"2012 - Present",description:["ExpressionEngine builds","Front-end development for agencies: entire sites, landing pages, emails"],url:"http://garabedium.com/"},{employer:"Sampa Housing",title:"Tech & Marketing Director",location:"Sao Paulo, Brazil",dates:"2012 - 2015",description:["Managed booking website front end, led redesign effort","Designed and developed property lead generation site","Created business solutions to aid a staff of 10 employees"],url:"http://sampahousing.com/"},{employer:"Blue State Digital",title:"Digital Project Manager",location:"Washington DC, USA",dates:"2009 - 2012",description:["Managed website, app, and social projects, from concept to launch","Designed project timelines and budgets","Built, maintained, and expanded client relationships"],url:"http://bluestatedigital.com/"}],display:function(){work.jobs.forEach(function(e){$("#work").append(HTMLworkStart);var t=$(".work-entry:last"),o=HTMLworkEmployer.replace("%data%",e.employer).replace("#",e.url),a=HTMLworkTitle.replace("%data%",e.title),r=HTMLworkLocation.replace("%data%",e.location),i=HTMLworkDates.replace("%data%",e.dates);t.append(i,r,o,a),t.append(HTMLworkDescriptionStart),e.description.forEach(function(e){var t=HTMLworkDescription.replace("%data%",e);$(".description-items:last").append(t)})})}};work.display();var education={schools:[{name:"FAAP",location:"Sao Paulo, Brazil",degree:"Português",major:"Português Para Estrangeiros",dates:"2012 - 2013",url:"http://www.faap.com.br"},{name:"Providence College",location:"Providence, RI",degree:"Bachelor of Arts",major:"Political Science",dates:"2004 - 2008",url:"http://www.providence.edu/"},{name:"Stellenbosch University",location:"Stellenbosch, South Africa",degree:"NA",major:"Political Science",dates:2007,url:"http://www.sun.ac.za/"}],onlineCourses:[{school:"Udacity",title:"Front-End Web Developer Nanodegree (FEND)",dates:2016,url:"http://udacity.com/",courseURL:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"}],display:function(){for(school in education.schools){$("#education").append(HTMLschoolStart);var e=$(".education-entry:last"),t=HTMLschoolName.replace("%data%",education.schools[school].name).replace("%link%",education.schools[school].url),o=HTMLschoolDegree.replace("%data%",education.schools[school].degree)+HTMLschoolMajor.replace("%data%",education.schools[school].major),a=HTMLschoolDates.replace("%data%",education.schools[school].dates),r=HTMLschoolLocation.replace("%data%",education.schools[school].location);e.append(r,t,o,a)}for(course in education.onlineCourses){$("#education").append(HTMLonlineClasses),$("#education").append(HTMLschoolStart);var e=$(".education-entry:last"),i=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school).replace("%link%",education.onlineCourses[course].url),l=HTMLonlineCourse.replace("%data%",education.onlineCourses[course].title).replace("%link%",education.onlineCourses[course].courseURL),s=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);e.append(i,l,s)}}};education.display();var projects={projects:[{title:"AmoBikes",titleShort:"amobikes",role:["Design","Front-end development Foundation 5"],highlights:["Splash site for personal biking project in Brazil.","AJAX form submission","Mailchimp integration"],url:"http://amobikes.com/"},{title:"Dandara Careers",titleShort:"dandara",role:["ExpressionEngine integration","Limited front-end development with <a href='http://killerbyt.es/' target='_blank' title='KillerBytes'>KillerBytes</a>"],highlights:["Careers site where users can search for and apply for jobs","Search by categories"],url:"http://dandaracareers.com/"},{title:"FTE Leaders",titleShort:"fteleaders",role:["ExpressionEngine integration","Limited front-end development with <a href='http://trumedia.io/' target='_blank'>TruMedia</a>"],highlights:["Large site with diverse templates","Faceted category search","Custom events template with Google Maps integration"],url:"http://fteleaders.org/"},{title:"AKC Humane Fund",titleShort:"akc",role:["ExpressionEngine integration","Front-end development + Bootstrap"],highlights:["Donation site for American Kennel Club","Blog with Disqus comments"],url:"http://akchumanefund.org/"},{title:"Sampa Corretores",titleShort:"sampahousing",role:["Design","ExpressionEngine integration","Front-end development + Foundation 5"],highlights:["Realtors can register and manage properties","Admins can approve or deny property listings"],url:"http://contact.sampahousing.com/corretores/"}],display:function(){for(project in projects.projects){var e=HTMLprojectStart.replace("%class%",projects.projects[project].titleShort);$("main.portfolio section").append(e),$(".project:last").append(HTMLprojectContent);var t=HTMLprojectTitle.replace("%data%",projects.projects[project].title);$(".project-content:last").append(t),projects.projects[project].role.length>0&&($(".project-content:last").append(HTMLprojectRole,HTMLprojectRoleStart),projects.projects[project].role.forEach(function(e){projectRole=HTMLprojectList.replace("%data%",e),$(".role:last").append(projectRole)})),projects.projects[project].highlights.length>0&&($(".project-content:last").append(HTMLprojectHighlights,HTMLprojectHighlightsStart),projects.projects[project].highlights.forEach(function(e){projectHighlights=HTMLprojectList.replace("%data%",e),$(".highlights:last").append(projectHighlights)})),$(".project:last").prepend(HTMLprojectImages);var o=HTMLprojectImage.replace("%link%",projects.projects[project].url).replace("%title%",projects.projects[project].title).replace(/\%data%/g,projects.projects[project].titleShort);$(".project-images:last").append(o);var a=HTMLprojectURL.replace("%data%",projects.projects[project].url).replace("%title%",projects.projects[project].title);$(".project-images:last").append(a)}}};projects.display(),$("#mapDiv").append(googleMap);