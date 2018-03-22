- Follow this [Article](https://scotch.io/tutorials/making-a-restful-api-with-hapi-js#toc-introduction-to-the-restful-architecture).

## Modules required to build enterprise level application using node js

- [x] [Babel](https://babeljs.io/) - Support for es6 syntax (very simple configuration for now)
- [x] [Hapi Js](https://hapijs.com/) - Create REST API with Hapi Js
- [x] [Knex](http://knexjs.org/) - SQL query builder for js
- [x] [Good](https://github.com/hapijs/good) - Logger
- [x] [Config](https://www.npmjs.com/package/config) - Configure your app for different environments
- [ ] [Joi](https://github.com/hapijs/joi)- Object schema validation
- [ ] [Dotenv](https://www.npmjs.com/package/dotenv) - Manage ENV variables
- [ ] [Boom](https://github.com/jaredhanson/passport) - HTTP friendly error response.
- [x] [Synk](https://snyk.io/) - Dependencies security
- [ ] [Authentication](https://github.com/jaredhanson/passport) - Authenticaiton library

## Directory Structure

Initial directory structure, we will modify it in future.

```sh
.                  
├── bootstrap.js   
├── knexfile.js    
├── node_modules            
├── package.json   
├── src            
│   ├── app        
│   │   ├── controllers                
│   │   │   └── demo_controller.js    
│   │   └── models 
│   ├── config     
│   │   ├── logger.js                  
│   │   └── routes.js                  
│   ├── db         
│   │   ├── migrations                 
│   │   │   ├── 20180322191853_create_users.js                                
│   │   │   ├── 20180322191859_create_demos.js                                
│   │   │   └── 20180322195427_add_created_at_to_demos.js                     
│   │   └── seeds  
│   │       ├── 01_users.js            
│   │       └── 02_demos.js            
│   └── index.js   
└── yarn.lock      

9 directories, 14 files         
```
 
