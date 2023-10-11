const assert = require('assert');
const app = require('../../src/app');

describe('\'Hr Analytics And Reporting\' service', () => {
  it('registered the service', () => {
    const service = app.service('Hr Analytics And Reporting');

    assert.ok(service, 'Registered the service (Hr Analytics And Reporting)');
  });
});
