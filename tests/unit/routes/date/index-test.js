import { module, test } from 'qunit';
import { setupTest } from 'project-2-big-chungus/tests/helpers';

module('Unit | Route | date/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:date/index');
    assert.ok(route);
  });
});
