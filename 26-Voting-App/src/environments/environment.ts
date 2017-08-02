// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverApiUrl: 'http://localhost:3000/',
  gitHubAuth: {
    id: '7bd89ce4a19214be7f6a',
    secret: '30a4a2e9a88ad778f4b1902081e72af4dfc90581',
    callbackUrl: 'http://localhost:3000'
  }
};
