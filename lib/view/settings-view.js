'use babel';

export default class SettingsView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('java-ide');
    this.element.classList.add('native-key-bindings');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The JavaIde package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);

    const closeBtn = document.createElement("img");
    closeBtn.src = "atom://java-ide/icons/close_btn.png";
    closeBtn.style = "position: absolute; top: -10px; right: -10px;";
    closeBtn.addEventListener("click", function(event) {
        atom.commands.dispatch(atom.views.getView(atom.workspace), "java-ide:settings-close");
    });

    const fieldSet = document.createElement("fieldset");
    fieldSet.style = "display: block;";
    const legend = document.createElement("legend");
    legend.textContent = "Scripts settings";
    fieldSet.appendChild(legend);

    const runField = this.createInputField("run_script", {
      label :"Run script path"
    });
    fieldSet.appendChild(runField);

    this.element.appendChild(fieldSet);
    this.element.appendChild(closeBtn);
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

  createInputField(id, options) {
    const runScriptLabel = document.createElement("label");
    runScriptLabel.id = id + "_label";
    runScriptLabel.setAttribute("for", id);

    const runScript = document.createElement("input");
    runScript.id = id;
    runScript.setAttribute("type", options.type != null ? options.type : "text");
    runScript.setAttribute("tabindxe", "1");

    const runScriptText = document.createElement("span");
    runScriptText.classList.add(id + "-title");
    runScriptText.textContent = options.label + ": ";

    runScriptLabel.appendChild(runScriptText);
    runScriptLabel.appendChild(runScript);

    return runScriptLabel;
  }

}
