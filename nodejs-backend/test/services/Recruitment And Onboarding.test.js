const assert = require('assert');
const app = require('../../src/app');

describe('\'Recruitment And Onboarding\' service', () => {
  it('registered the service', () => {
    const service = app.service('Recruitment And Onboarding');

    assert.ok(service, 'Registered the service (Recruitment And Onboarding)');
  });
});
