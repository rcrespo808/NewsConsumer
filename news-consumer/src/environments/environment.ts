// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  newsSources: {
    theNewsApi: {
      baseUrl: 'https://api.thenewsapi.com/v1',
      token: 'Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U'
    },
    newsApiOrg: {
      baseUrl: 'https://newsapi.org/v2',
      token: 'f10f4341211f466d82f2e909eb926b12'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
