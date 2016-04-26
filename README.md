# 2016-mrfrontend-website

This is the repo for creating the new website of the Mr Frontend Community

*Features*
- Gulp
- Bower
- Sass
- Browser Sync
- Automated Bower injection (wiredep)
- Automated CSS & JS injection (gulp-inject)
- Automated CSS & JS concatenation (gulp-useref)
- CSS Autoprefixer (gulp-autoprefixer)
- Minified CSS (gulp-csso)
- Minified HTML (gulp-html-minify)
- Minified JS (gulp-uglify)
- Sourcemaps (gulp-sourcemaps)
- ESlint (gulp-eslint)

*Prerequisites*
1. Node & NPM: https://nodejs.org
2. Bower: npm install -g bower

*Install*
- npm install
- bower install

*Development*
All the development files can be found in the /src folder.
Base files are imported in style.scss. Page specific styles can be added in the sass/pages folder. These sass files get injected automatically by Gulp commands. 

*Gulp commands*
- gulp - Make production build in /dist folder
- gulp serve - Launch development build with browser-sync
- gulp serve:dist - Launch production build with browser-sync