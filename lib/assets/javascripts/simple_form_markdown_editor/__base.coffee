do ($ = jQuery, window, document) ->
  pluginName = 'simple_form_markdown_editor'
  defaults =
    debug: false
    definitions:
      strong: '**%{str}**',
      em: '*%{str}*',
      code: '`%{str}`',
      hr: '%{str}***',
      ul: '* %{str}',
      ol: '1. %{str}',
      blockquote: '> %{str}',
      h1: '# %{str}',
      h2: '## %{str}',
      h3: '### %{str}',
      h4: '#### %{str}',
      h5: '##### %{str}',
      h6: '###### %{str}',
      a: '[%{str}](|)',
      img: '![%{str}](|)'
    is_editor_class: 'simple_form_markdown_editor__is_editor'
    is_help_class: 'simple_form_markdown_editor__is_help'

  class Plugin
    constructor: (@element, options) ->
      @settings = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      @get_buttons().simple_form_markdown_editor__buttons()
      @get_editor().simple_form_markdown_editor__editor()
      @get_help().simple_form_markdown_editor__help()
      @get_preview().simple_form_markdown_editor__preview()
      @get_tabs().simple_form_markdown_editor__tabs()

      @$element.on 'show_editor', (e) =>
        e.stopPropagation()
        @$element.addClass(@settings.is_editor_class)

      @$element.on 'show_preview', (e) =>
        e.stopPropagation()
        @$element.removeClass(@settings.is_editor_class)

      @$element.on 'show_preview', (e) =>
        e.stopPropagation()
        options = @get_options()
        val = @get_editor().simple_form_markdown_editor__editor('get_val')
        $.ajax
          type: 'POST'
          url: @get_preview_path()
          data:
            _method: 'PUT'
            text: val
            options: options
          success: (html) =>
            @get_preview().trigger(type: 'show_preview', html: html)

      @$element.on 'toggle_help', (e) =>
        e.stopPropagation()
        @$element.toggleClass(@settings.is_help_class)

      @$element.on 'execute_command', (e) =>
        e.stopPropagation()
        command = e.command
        definition = @settings.definitions[command]
        @get_editor().trigger
          type: 'execute_command_definition'
          command: command
          definition: definition

    # ---------------------------------------------------------------------

    get_buttons: -> @$element.find('.simple_form_markdown_editor__buttons')
    get_editor: -> @$element.find('.simple_form_markdown_editor__editor')
    get_help: -> @$element.find('.simple_form_markdown_editor__help')
    get_preview: -> @$element.find('.simple_form_markdown_editor__preview')
    get_tabs: -> @$element.find('.simple_form_markdown_editor__tabs')

    get_options: -> @$element.data('options')
    get_preview_path: -> @$element.data('preview-path')

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
