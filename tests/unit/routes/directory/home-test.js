import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | directory/home', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:directory/home');
    assert.ok(route);
  });
});
