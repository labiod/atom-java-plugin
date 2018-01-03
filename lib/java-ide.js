'use babel';

import SettingsView from './view/settings-view';
import ToolbarView from './view/toolbar-view';
import { CompositeDisposable } from 'atom';

export default {

  settingsView: null,
  modalPanel: null,
  toolbarView: null,
  subscriptions: null,

  activate(state) {
    console.log("activate");
    this.settingsView = new SettingsView(state.settingsViewState);
    this.toolbarView = new ToolbarView(state.toolbarViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.settingsView.getElement(),
      visible: false
    });

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

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:settings-open': () => this.showSettings()
    }));

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:settings-close': () => this.hideSettings()
    }));

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'java-ide:reload': () => atom.reload()
    }));
  },

  deactivate() {
    this.toolbarView.destroy();
    this.subscriptions.dispose();
    this.javaIdeView.destroy();
  },

  serialize() {
    return {
      settingsViewState: this.settingsView.serialize(),
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

  showSettings() {
      this.modalPanel.show();
  },

  hideSettings() {
      this.modalPanel.hide();
  },

  runAction() {
    alert("run action");
  },

  stopAction() {
    alert("stop action");
  }

};
