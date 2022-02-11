const Strapi = require('strapi');
const http = require('http');
let instance;
async function setupStrapi() {
  if (!instance) {
    /** the following code is copied from `./node_modules/strapi/lib/Strapi.js` */
    await Strapi().load();
    instance = strapi; // strapi is now global
    await instance.app
      .use(instance.router.routes()) // populate KOA routes
      .use(instance.router.allowedMethods()); // populate KOA methods
    instance.server = http.createServer(instance.app.callback());
  }
  return instance;
}

/**
 * Grants database `permissions` table that role can access an endpoint/controllers
 *
 * @param {int} roleID, 1 Autentihected, 2 Public, etc
 * @param {string} value, in form or dot string eg `"permissions.users-permissions.controllers.auth.changepassword"`
 * @param {boolean} enabled, default true
 * @param {string} policy, default ''
 */
const grantPrivilege = async (
  roleID = 1,
  value,
  enabled = true,
  policy = ""
) => {
  const updateObj = value
    .split(".")
    .reduceRight((obj, next) => ({ [next]: obj }), { enabled, policy });

  return await strapi.plugins["users-permissions"].services.userspermissions.updateRole(roleID, updateObj);
};

module.exports = {
  setupStrapi,
  grantPrivilege
};