
/**
 * Package Module
 * package.js
 * 
 * Package.json functions
 * 
 */
module.exports = function (gulp, argv, project_dir, ger_dir) {


//public modules
    var path = require("path")
            , fs = require('fs') //file system library

//private modules

    var requireFrom = require('requirefrom')
            , modules = requireFrom('ger/modules/')






    /**
     * Get the GER Package.json object
     *
     * Returns the package.json global object
     * @param void
     * @return object The object parsed from package.json
     */

    module.getPackage = function () {
       var package_path=path.join(ger_dir , 'package.json');
        if (fs.existsSync(package_path)) {
            return JSON.parse(fs.readFileSync(package_path), 'utf8');
        } else {

            throw new Error('Missing GER package.json.')
        }
    }

    /**
     * Get GER Version
     *
     * @param void
     * @return string The current version from GER package.json
     */
    module.getVersion = function () {
        // We parse the json file instead of using require because require caches
        // multiple calls so the version number won't be updated
        return  module.getPackage().version;
    }


    return module;
}