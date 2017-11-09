# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->
  pluginName = 'simple_form_markdown_editor__buttons'
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
      @$element.on 'click', '.simple_form_markdown_editor__button[value="help"]', (e) =>
        @$element.trigger('toggle_help')

      @$element.on 'click', '.simple_form_markdown_editor__button:not([value="help"])', (e) =>
        $button = $(e.target)
        command = $button.attr('value')
        @$element.trigger(type: 'execute_command', command: command)

  # ---------------------------------------------------------------------

  $.fn[pluginName] = (options) ->
    args = arguments
    if options is `undefined` or typeof options is "object"
      @each ->
        $.data this, "plugin_" + pluginName, new Plugin(this, options) unless $.data(this, "plugin_" + pluginName)

    else if typeof options is "string" and options[0] isnt "_" and options isnt "init"
      returns = undefined
      @each ->
        instance = $.data(this, "plugin_" + pluginName)
        returns = instance[options].apply(instance, Array::slice.call(args, 1)) if instance instanceof Plugin and typeof instance[options] is "function"
        $.data this, "plugin_" + pluginName, null if options is "destroy"

      (if returns isnt `undefined` then returns else this)
