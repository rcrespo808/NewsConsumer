const theNewsApi = {
  baseUrl: 'https://api.thenewsapi.com/v1',
  token: 'Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U'
};

export const environment = {
  production: true,
  newsApi: theNewsApi,
  newsSources: {
    theNewsApi,
    newsApiOrg: {
      baseUrl: 'https://newsapi.org/v2',
      token: 'f10f4341211f466d82f2e909eb926b12'
    }
  }
};
