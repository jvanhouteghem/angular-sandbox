# angular2-sandbox
Step 2 : First page
--

Note : only 'src' folder will be display in github. To complete the project just use the other files in step1.

Ok our start page is ugly, we only have a "app works" text and a white background.

Lets start by create the html skeleton which will contains : 
- A navigation bar
- A main horizontal div
- A secondary horizontal div 

### 2.1 Navigation bar
- Add this code in app.component.html file : 
```
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```
- Boostrap is not imported.
The ugly way : import boostrap in index.html with : <br/>```<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">```

The good way : (source - [angular-cli documentation](https://github.com/angular/angular-cli))
``` 
First install Bootstrap from npm:

npm install bootstrap@next

Finally add the Bootstrap CSS to the apps[0].styles array:

"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "styles.css"
]

Restart ng serve if you're running it, and Bootstrap 4 should be working on your app.

```
NB : Don't import script, just the bootstrap.css.