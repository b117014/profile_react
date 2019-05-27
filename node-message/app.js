const express  =  require('express'),
      bodyParser  =  require('body-parser'),
      mongoose    =  require('mongoose'),
      cors       =  require('cors'),
      morgan     =   require('morgan'),
      app       =   express();


    app.use(cors())                 // for cross server means when we ajax request from different url for the safety server could not find request in cross server so we use cors so that it can be called ajax request in cross server
    app.use(morgan('tiny'));



    app.listen(7000);