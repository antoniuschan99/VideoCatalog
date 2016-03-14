# Video Catalog

Requirements: Create a catalog page displaying a selection of shomi assets.  They should be displayed in a 5x4 grid displaying the asset box art (image type=1 in the feed).  Pagination should be supported to page through all the results that are returned (20 at a time).   When a user focuses on a specific asset, it should be highlighted in some way and should display the asset metadata (title, duration & release year).  Provide a selector to change the sort between by title, duration & release year.
 
Please use AngularJS and you may use bootstrap for CSS, but please refrain from using any other plugins or libraries.  I've attached the json data you should use in the application.  Please ensure that your code includes at least one service, one controller and one directive.

Note: App boilerplate was taken from  - https://github.com/angular/angular-seed

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> stylesheet
  controllers/
    mainController.js   --> main controller
  directives/
    html/
        grid.html       --> template for the grid
    boxArt.js           --> boxArt directive
    gridControl         --> grid directive
  resources/
    feed.json           --> json data
  services/
    categoryService.js  --> service
  viewModels/           
    mainViewModel.js    --> mainViewModel
  views/               
    main.html           --> main html
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```
