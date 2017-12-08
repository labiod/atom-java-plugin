ShellRunner = require './shell-runner';

module.exports =  class ConsoleManager
    constructor : () ->
      @consoleList = new Array()

    sendCommand: (command, args, stout, stderr) ->
      console.log("Active console :" + @consoleList.length)
      shellId = @createShellId()
      parent = this;
      exit = (code) ->
        parent.removeItem(shellId);
      shell = new ShellRunner(command, args, stdout, stderr, exit)
      @consoleList.push(shell)

    killLast : () ->
      lastPos = @consoleList.length - 1;
      if (lastPos >= 0)
        @consoleList[lastPos].kill();
        @removeItem(lastPos);

    removeItem : (idToRemove) ->
      copyArray = @consoleList;
      console.log("remove console at index #{idToRemove}")
      @consoleList = @consoleList.filter (x) -> copyArray.indexOf(x) != idToRemove
      console.log("Active console :" + @consoleList.length)

    createShellId : () ->
      return @consoleList.length;
