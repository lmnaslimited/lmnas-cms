const request = require('supertest');
const upload = require('../../../components/upload')
const { grantPrivilege } = require('../../../helpers/strapi')

beforeAll(async () => {
    await grantPrivilege(2, "permissions.application.controllers.author.findOne");  // Gives Public access to endpoint  
});

it('should return Author name and Image', async () => {
    const image = await upload('/public/uploads/tests/author-mock-image.png')
    // Product mock data
    const mockAuthorData = {
        name: 'Unit Test Author',
        picture: image
    };

    /** Creates a new author an push to database */
    const author = await strapi.services.author.create({
        ...mockAuthorData
    })
    await request(strapi.server) // app server is an instance of Class: http.Server
        .get('/authors/1')
        .set('accept', 'application/json')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .then(data => {
            expect(data.body).toBeDefined();
            expect(data.body.id).toBe(author.id);
            expect(data.body.name).toBe(author.name);
            expect(data.body.picture).toBeDefined();
            expect(data.body.picture.url).toBe(author.picture.url);
        });
})