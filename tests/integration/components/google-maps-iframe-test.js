import { module, test } from 'qunit';
import { setupRenderingTest } from 'project-2-big-chungus/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | google-maps-iframe', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GoogleMapsIframe />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GoogleMapsIframe>
        template block text
      </GoogleMapsIframe>
    `);

    assert.dom().hasText('template block text');
  });
});
