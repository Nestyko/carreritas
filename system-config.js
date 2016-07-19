// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    "materialize": "vendor/materialize-css",
    "angular2-materialize": "vendor/angular2-materialize",
    "jquery": "vendor/jquery",
    "angular2-localstorage": "vendor/angular2-localstorage/dist",
};
/** User packages configuration. */
var packages = {
    'materialize': {
        "format": "global",
        "main": "dist/js/materialize",
        "defaultExtension": "js"
    },
    'angular2-materialize': {
        "main": "dist/index",
        "defaultExtension": "js"
    },
    'angular2-localstorage': {
        "defaultExtension": "js"
    },
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/corredor',
    'app/timer',
    'app/corredor-detail',
    'app/clock',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=tmp\broccoli_type_script_compiler-input_base_path-oW4KyL4h.tmp\0\src\system-config.js.map