# Pool pros test

## how to view
you can view a live version of the site at my personal domain, [here](https://www.jackie-robson.com)
or you can clone the repository and serve to a local server or naigate to index.html and view in your web browser. (if viewing in web browser chrome may throw COR{cross origin request} issue) 

### local server
to serve the app to a local server you can navigate to the root directory (pool-pros) using your command line and then use one of the following commands
* node app.js - this will serve the app to port 3000 
* npm run compile - this will run the command to recompile the app and apply any changes to templates and template partial, tell the SASS css preprocesser to watch for changes and launch the server on port 3000
* npm run styles - this will run the command to make sass watch for changes and will launch the server on port 3000

### make changes to the app
* when making changes to the templates and partials a re-compile will be required after each change
* changes to javasrcipt files do not require a re-compile
* if you ran the compile or styles commands styles can be changed with out recompiling. 

#### unfortunately the filter options are not working at the moment.
