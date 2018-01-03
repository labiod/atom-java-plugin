'use babel';

export default class ToolbarView {

  constructor(serializedState) {
    // Create root element

    this.element = document.createElement('div');
    this.element.style = "background: #3c3f41; padding: 2px 0 2px 10px;";
    this.element.classList.add('toolbar');
    this.loadView();

    this.topPanel = atom.workspace.addHeaderPanel({
      item: this.element,
      visible: false
    });

  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  loadView() {

    const runImg = document.createElement('img');
    runImg.src = "atom://java-ide/icons/run.png";
    runImg.classList.add('run_action');
    runImg.addEventListener("click", function(event) {
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:run");
    }, false);

    // Create stop element
    const stopImg = document.createElement('img');
    stopImg.src = "atom://java-ide/icons/stop.png";
    stopImg.classList.add('stop_action');
    stopImg.addEventListener("click", function(event) {
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:stop");
    }, false);

    // Create open file element
    const openTerminalImg = document.createElement('img');
    openTerminalImg.src = "atom://java-ide/icons/open.png";
    openTerminalImg.classList.add('open_action');
    openTerminalImg.addEventListener("click", function(event) {
      // console.log("open terminal");
      // this.consoleManager.killLast();

      atom.confirm({
        message: " How you feeling/",
        detailedMessage: "Be honest.",
        buttons: {
          Good: () => window.alert("good to hear"),
          Bad: () => window.alert("bummer")
        }
      });
    }, false);

    // Create open file element
    const copyImg = document.createElement('img');
    copyImg.src = "atom://java-ide/icons/copy.png";
    copyImg.classList.add('open_action');
    copyImg.addEventListener("click", function(event) {
      // console.log("open terminal");
      // this.consoleManager.killLast();

      atom.confirm({
        message: " How you feeling/",
        detailedMessage: "Be honest.",
        buttons: {
          Good: () => window.alert("good to hear"),
          Bad: () => window.alert("bummer")
        }
      });
    }, false);

    // Create settings element
    const settingsImg = document.createElement('img');
    settingsImg.src = "atom://java-ide/icons/settings.png";
    settingsImg.classList.add('open_action');
    settingsImg.addEventListener("click", function(event) {
      // console.log("open terminal");
      // this.consoleManager.killLast();
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:settings-open");
    }, false);

    // Create reload element
    const reload = document.createElement('img');
    reload.src = "atom://java-ide/icons/reload.png";
    reload.classList.add('reload_action');
    reload.addEventListener("click", function(event) {
      console.log("test");
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:reload");
    }, false);

    this.element.appendChild(this.createSeparator());
    this.element.appendChild(openTerminalImg);
    this.element.appendChild(copyImg);
    this.element.appendChild(this.createSeparator());
    this.element.appendChild(runImg);
    this.element.appendChild(stopImg);
    this.element.appendChild(this.createSeparator());
    this.element.appendChild(settingsImg);
    this.element.appendChild(reload);
  }

  isVisible() {
    return this.topPanel.isVisible();
  }

  show() {
    this.topPanel.show();
  }

  hide() {
    this.topPanel.hide();
  }

  createSeparator() {
    const separator = document.createElement("img");
    separator.src = "atom://java-ide/icons/separator.png";
    separator.classList.add('separator');
    return separator;
  }
}
