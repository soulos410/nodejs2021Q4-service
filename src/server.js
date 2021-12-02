const config = require('./common/config');
const Application = require('./app');

Application.app.listen(config.PORT, () =>
  console.info(`App is running on http://localhost:${config.PORT}`)
);
