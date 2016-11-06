# angular2-sandbox
Step 1 : Create a project with Angular CLI (In progress)

1.1 - Create project
- ng new angular2-sandbox-step1
- cd angular2-sandbox-step1
- ng serve
- Check localhost:4200 in your navigator

2.2 - Try production mode
By default Angular CLI create a big project (200 Mo...).
You start in development mod, to try it in production you have to use the command `ng build --prod`.
This command creates a 'dist' folder which contains a 7Mo bundle of the project.

dist
 |___ favicon.ico
 |___ index.html
 |___ inline.d41d8cd98f00b204e980.bundle.map
 |___ inline.js
 |___ main.94dd5c76eae2fa8b8aaf.bundle.js
 |___ main.94dd5c76eae2fa8b8aaf.bundle.js.gz
 |___ main.94dd5c76eae2fa8b8aaf.bundle.map
 |___ styles.defd4e11283d3aa66903.bundle.js
 |___ styles.defd4e11283d3aa66903.bundle.map

