```bash
ng new banking-mfe --create-application=false  

ng g application bank-shall --routing --style=scss --standalone
ng g application insurance-mfe --routing --style=scss --standalone
ng g application bank-mfe --routing --style=scss --standalone
```

## Intall Native Federation in the shell application using the following command

```bash
npm install -D @angular-architects/native-federation

ng g @angular-architects/native-federation:init --project bank-shell --port 4200 --type dynamic-host
ng g @angular-architects/native-federation:init --project insurance-mfe --port 42001 --type remote  
ng g @angular-architects/native-federation:init --project loan-mfe --port 42001 --type remote
```

## create route for expose federation.config.mjs in the remote application and add the following code

```bash
exposes: {
    './Component': './projects/loan-mfe/src/app/app.ts',
    './Routes': './projects/loan-mfe/src/app/app.routes.ts',
  },

  exposes: {
    './Component': './projects/insurance-mfe/src/app/app.ts',
    './Routes': './projects/insurance-mfe/src/app/app.routes.ts',
  },
```
## Edit generated federation.mainfest.json in bank-shall

```bash
{
  "loanMfe": "http://localhost:42001/remoteEntry.json",
  "insuranceMfe": "http://localhost:42002/remoteEntry.json"
}

export const routes: Routes = [
  {
    path: 'loans',
    loadChildren: () => loadRemoteModule('loan-mfe', './Routes').then((m) => m.routes),
  },
  {
    path: 'insurance',
    loadChildren: () => loadRemoteModule('insurance-mfe', './Routes').then((m) => m.routes),
  },
];
```
## Run All Projects using the following command
ng serve bank-shall
ng serve loan-mfe
ng serve insurance-mfe