'use babel';

import JavaIdeView from './view/java-ide-view';
import ToolbarView from './view/toolbar-view';
import { CompositeDisposable } from 'atom';

export default {

  javaIdeView: null,
  toolbarView: null,
  subscriptions: null,

  activate(state) {
    console.log("activate");
    this.javaIdeView = new JavaIdeView(state.javaIdeViewState);
    this.toolbarView = new ToolbarView(state.toolbarViewState);

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:run': () => this.runAction()
    }));

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:stop': () => this.stopAction()
    }));

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:show': () => this.showToolbar()
    }));
  },

  deactivate() {
    this.toolbarView.destroy();
    this.subscriptions.dispose();
    this.javaIdeView.destroy();
  },

  serialize() {
    return {
      javaIdeViewState: this.javaIdeView.serialize(),
      toolbarViewState: this.toolbarView.serialize()
    };
  },

  showToolbar() {
    console.log("show toolbar");
    return (
      this.toolbarView.isVisible() ?
      this.toolbarView.hide() :
      this.toolbarView.show()
    );
  },

  runAction() {
    alert("run action");
  },

  stopAction() {
    alert("stop action");
  }

};
