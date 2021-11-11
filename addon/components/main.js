import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MainComponent extends Component {
  @action onInsert() {
    this.onAction('onInsert', ...arguments);
  }

  @action onAction(actionName, ...params) {
    if (typeof this.args[actionName] === 'function') {
      this.args[actionName](...params);
    }
  }
}
