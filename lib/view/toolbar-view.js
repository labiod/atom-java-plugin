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
    runImg.src = "atom://first/icons/run.png";
    runImg.classList.add('run_action');
    runImg.consoleManager = this.consoleManager;
    runImg.addEventListener("click", function(event) {
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:run");
    }, false);

    // Create stop element
    const stopImg = document.createElement('img');
    stopImg.src = "atom://first/icons/stop.png";
    stopImg.classList.add('stop_action');
    stopImg.consoleManager = this.consoleManager;
    stopImg.addEventListener("click", function(event) {
      atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:stop");
    }, false);

    // Create stop element
    const openTerminalImg = document.createElement('img');
    openTerminalImg.src = "atom://first/icons/open.png";
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

    this.element.appendChild(openTerminalImg);
    this.element.appendChild(runImg);
    this.element.appendChild(stopImg);
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
}
