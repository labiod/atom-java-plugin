{BufferedProcess} = require 'atom'

module.exports =  class ShellRunner
    constructor : (@command, @args, stdout, stderr, exit) ->
      options =
      cwd: atom.project.getPaths()
      env: process.env

      # Contrived example
      @bufferedProcess = new BufferedProcess({command, args, options, stdout, stderr, exit})

    kill : () ->
      @bufferedProcess.kill();
