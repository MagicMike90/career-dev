/**
 * Module dependencies.
 */

const express = require('./express');
require('./config/mongoose');
const errorHandler = require('errorhandler');
const config = require('./config/config.js');

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || config.get('server:port');
express.set('port', port);


/**
 * Error Handler. Provides full stack - remove for production
 */
express.use(errorHandler());



/**
 * Start Express server.
 */
express.listen(express.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    express.get("port"),
    express.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
