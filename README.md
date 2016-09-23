# Resume Site
* Javascript MVC practice that I used for my personal site: garabedium.com
* Responsive framework: Foundation 6 + SASS
* Build Tool: Grunt used to generate responsive images
* Build Tool: Gulp used to compile SASS: assets/scss/*

## Structure
* Model: Site content stored in assets/js/data.json
* Views/Control: Stored in assets/js/app.js
* HTML Templates: Stored in assets/js/helper.js

## How it Works
* control.GetData uses AJAX to query data from data.json
* Views call getData, wrap necessary data  with templates from helper.js and append to HTML

## Credits:

#### Responsive images with scrset
A different version of the resume site used image slideshows and srcset to smartly load different image sizes
* https://responsiveimages.org/
* https://builtvisible.com/responsive-images-for-busy-people-a-quick-primer/

#### Scroll detection
* http://stackoverflow.com/questions/17454059/how-to-detect-if-user-scroll-a-certain-distance

#### Regex refresher
* http://stackoverflow.com/questions/13574980/jquery-replace-all-instances-of-a-character-in-a-string

#### Grunt
Site was initially compiled using Grunt, then moved over to Gulp. I kept the responsive image task for kicks.
* http://gruntjs.com/getting-started
* https://24ways.org/2013/grunt-is-not-weird-and-hard/
* http://udacity.github.io/responsive-images/Gruntfile.js
* https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/

#### Gulp
* https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js
* http://www.sitepoint.com/introduction-gulp-js/