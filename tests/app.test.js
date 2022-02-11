const fs = require('fs');
const { setupStrapi } = require('./helpers/strapi');
/** this code is called once before any test */
// Set timeout. This prevents Jest from timing out in API Calls
// Increase the value if there is a timeout issue
jest.setTimeout(15000)
beforeAll(async () => {
    await setupStrapi();
});
/** this code is called after all the tests are finished */
afterAll(async () => {
    const dbSettings = strapi.config.get('database.connections.default.settings');
    //close server to release the db-file
    await strapi.destroy();
    //This will delete test database after all tests
    if (dbSettings && dbSettings.filename) {
        const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
        if (fs.existsSync(tmpDbFile)) {
            fs.unlinkSync(tmpDbFile);
        }
    }
});
//Run test to make sure Strapi is defined.
it('strapi is defined', () => {
    expect(strapi).toBeDefined();
});

//Include test of User 
require('./unit/user');
//Include test of API Author
require('./unit/api/author')