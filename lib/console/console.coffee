{ShellRunner} = require './shell-runner';

module.exports = class Console
  constructor : () ->
    @stdout = (code) ->
      removeItem(shellId);
