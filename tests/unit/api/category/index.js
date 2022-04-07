const request = require('supertest');
const upload = require('../../../components/upload')
const { grantPrivilege } = require('../../../helpers/strapi')

beforeAll(async () => {
    await grantPrivilege(2, "permissions.application.controllers.category.findOne");  // Gives Public access to endpoint 
});

it('should return Category name', async () => {
    // Category mock data
    const mockCategoryData = {
        name: 'Unit Test Category',
        slug: 'unit-test-category'
    };

    /** Creates a new category an push to database */
    const category = await strapi.services.category.create({
        ...mockCategoryData
    })
    await request(strapi.server) // app server is an instance of Class: http.Server
        .get('/categories/1')
        .set('accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(data => {
            expect(data.body).toBeDefined();
            expect(data.body.id).toBe(category.id);
            expect(data.body.name).toBe(category.name);
            expect(data.body.posts).toBeDefined();
          //  expect(data.body.picture.url).toBe(author.picture.url);
        });
})