
/*
 *  ger-tasks.js
 *  
 *  GER Tasks, meant to be 'public' and called by user at command line.
 */

module.exports = function (gulp, argv, project_dir, ger_dir) {


//public modules
    var path = require("path")
            , runSequence = require('run-sequence')//force synchronous execution

//private modules
    var requireFrom = require('requirefrom')
            , modules = requireFrom('ger/modules/')
            , package = modules('package.js')(gulp, argv, project_dir, ger_dir)



//task modules
    modules('release-tasks.js')(gulp, argv, project_dir, ger_dir);//expose gulp tasks

    /**
     * 
     * Tasks
     * 
     */
    /**
     * default (TASK)
     *
     * Wrapper 
     * @param string taskName
     * @return function Callback
     */

    gulp.task('ger-task', function default_task(callback) {

        console.log('youve called a task in: ' + __dirname);
        console.log('the version number is: ' + package.gerVersion());

    });

};


