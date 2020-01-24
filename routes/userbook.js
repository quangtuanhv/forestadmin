const express = require('express');
const { PermissionMiddlewareCreator } = require('forest-express-sequelize');
const { userbook } = require('../models');

const router = express.Router();
const permissionMiddlewareCreator = new PermissionMiddlewareCreator('userbook');

// This file contains the logic of every route in Forest Admin for the collection userbook:
// - Native routes are already generated but can be extended/overriden - Learn how to extend a route here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/extend-a-route
// - Smart action routes will need to be added as you create new Smart Actions - Learn how to create a Smart Action here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/actions/create-and-manage-smart-actions

// Create a Userbook
router.post('/userbook', permissionMiddlewareCreator.create(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#create-a-record
  next();
});

// Update a Userbook
router.put('/userbook/:recordId', permissionMiddlewareCreator.update(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#update-a-record
  next();
});

// Delete a Userbook
router.delete('/userbook/:recordId', permissionMiddlewareCreator.delete(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#delete-a-record
  next();
});

// Get a list of Userbooks
router.get('/userbook', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-list-of-records
  next();
});

// Get a number of Userbooks
router.get('/userbook/count', permissionMiddlewareCreator.list(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-number-of-records
  next();
});

// Get a Userbook
router.get('/userbook/:recordId', permissionMiddlewareCreator.details(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#get-a-record
  next();
});

// Export a list of Userbooks
router.get('/userbook.csv', permissionMiddlewareCreator.export(), (request, response, next) => {
  // Learn what this route does here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/routes/default-routes#export-a-list-of-records
  next();
});

module.exports = router;
