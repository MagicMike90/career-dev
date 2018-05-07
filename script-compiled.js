/**
 * Module dependencies.
 */

import app from './config/express';
import errorHandler from 'errorhandler';

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});
