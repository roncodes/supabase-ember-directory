import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | directory/listing/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:directory/listing/index');
    assert.ok(route);
  });
});
