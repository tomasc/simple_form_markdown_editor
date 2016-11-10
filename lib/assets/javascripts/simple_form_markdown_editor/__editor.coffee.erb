# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->
  pluginName = 'simple_form_markdown_editor__editor'
  defaults =
    debug: false

  class Plugin
    constructor: (@element, options) ->
      @settings = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      @$element.on 'execute_command_definition', (e) =>
        e.stopPropagation()
        command = e.command
        definition = e.definition
        @execute_command_definition(command, definition)

    # ---------------------------------------------------------------------

    get_textarea: -> @$element.find 'textarea'
    get_val: -> @get_textarea().val()
    get_selection: ->
      $e = @get_textarea()
      {
        start: $e[0].selectionStart
        end: $e[0].selectionEnd
        length: $e[0].selectionEnd - $e[0].selectionStart
        text: $e.val().substring($e[0].selectionStart, $e[0].selectionEnd)
      }

    # ---------------------------------------------------------------------

    execute_command_definition: (command, definition) ->
      selection = @get_selection()
      replacement = definition.replace('%{str}', selection.text)
      caret_pos = replacement.indexOf('|')
      start = selection.start
      end = selection.start + replacement.length
      if caret_pos > -1
        replacement = replacement.replace(/\|/g, '')
        start = selection.start + caret_pos
        end = selection.start + caret_pos
      @replace_selection(replacement)
      @set_selection(start, end)

    set_selection: (start, end) ->
      $e = @get_textarea()
      $e.focus()
      $e[0].selectionStart = start
      $e[0].selectionEnd = end

    replace_selection: (string) ->
      $e = @get_textarea()
      start = $e[0].selectionStart
      end = $e[0].selectionEnd
      val = $e.val()
      $e.val(val.substring(0, start) + string + val.substring(end, val.length))

  # ---------------------------------------------------------------------

  $.fn[pluginName] = (options) ->
    args = arguments
    if options is `undefined` or typeof options is "object"
      @each ->
        $.data this, "plugin_" + pluginName, new Plugin(this, options)  unless $.data(this, "plugin_" + pluginName)

    else if typeof options is "string" and options[0] isnt "_" and options isnt "init"
      returns = undefined
      @each ->
        instance = $.data(this, "plugin_" + pluginName)
        returns = instance[options].apply(instance, Array::slice.call(args, 1))  if instance instanceof Plugin and typeof instance[options] is "function"
        $.data this, "plugin_" + pluginName, null  if options is "destroy"

      (if returns isnt `undefined` then returns else this)
