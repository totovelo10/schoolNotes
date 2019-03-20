// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAhnkrdlGV96G16cHhNRS-eKPXzF6N4wvw',
    authDomain: 'schoolnotes-fc26d.firebaseapp.com',
    databaseURL: 'https://schoolnotes-fc26d.firebaseio.com',
    projectId: 'schoolnotes-fc26d',
    storageBucket: 'schoolnotes-fc26d.appspot.com',
    messagingSenderId: '840351142557'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
