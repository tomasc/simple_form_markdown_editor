# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->

  pluginName = 'simple_form_markdown_editor_buttons'
  defaults =
    debug: false
    definitions:
      'strong':     '**%{str}**'
      'em':         '*%{str}*'
      'code':       '`%{str}`'
      'hr':         '%{str}\n***'
      'ul':         '* %{str}'
      'ol':         '1. %{str}'
      'blockquote': '> %{str}'
      'h1':         '# %{str}'
      'h2':         '## %{str}'
      'h3':         '### %{str}'
      'h4':         '#### %{str}'
      'h5':         '##### %{str}'
      'h6':         '###### %{str}'
      'a':          '[%{str}](|)'
      'img':        '![%{str}](|)'

  # ---------------------------------------------------------------------

  class Plugin
    constructor: (@element, options) ->
      @settings = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      console.log 'init' if @settings.debug

      if @get_help_div().attr('data-visible') == 'true'
        @get_help_button().addClass('active')

      @get_help_button().on 'click', (e) =>
        $(e.currentTarget).toggleClass('active')
        @toggle_help_visibility()

      @get_command_buttons().on 'click', (e) =>
        $btn = $(e.currentTarget)
        cmd = $btn.attr('value')
        @execute_command(cmd)

    # ---------------------------------------------------------------------

    get_textarea: -> @get_editor_div().children('textarea')
    get_editor_div: -> @$element.children('div.editor')
    get_header_div: -> @$element.children('div.header:first')
    get_help_div: -> @$element.children('div.help')
    get_button_groups_ul: -> @get_header_div().find('ul.button_groups')
    get_button_group_lis: -> @get_button_groups_ul().children('li.button_group')
    get_buttons_uls: -> @get_button_group_lis().children('ul.buttons')
    get_button_lis: -> @get_buttons_uls().children('li.button')
    get_buttons: -> @get_button_lis().children('button')
    get_command_buttons: -> @get_buttons().not(@get_help_button())
    get_help_button: -> @get_buttons().filter('.help')

    execute_command: (cmd) ->
      $textarea = @get_textarea()
      selection = @get_selection($textarea)
      definition = @settings.definitions[cmd]
      replacement = definition.replace('%{str}', selection.text)
      caret_pos = replacement.indexOf('|')
      start = selection.start
      end = selection.start + replacement.length
      if caret_pos > -1
        replacement = replacement.replace(/\|/g, '')
        start = selection.start + caret_pos
        end = selection.start + caret_pos
      @replace_selection($textarea, replacement)
      @set_selection($textarea, start, end)

    get_selection: ($e) ->
      {
        start: $e[0].selectionStart
        end: $e[0].selectionEnd
        length: $e[0].selectionEnd - $e[0].selectionStart
        text: $e.val().substring($e[0].selectionStart, $e[0].selectionEnd)
      }

    set_selection: ($e, start, end) ->
      $e.focus()
      $e[0].selectionStart = start
      $e[0].selectionEnd = end

    replace_selection: ($e, string) ->
      start = $e[0].selectionStart
      end = $e[0].selectionEnd
      val = $e.val()
      $e.val(val.substring(0, start) + string + val.substring(end, val.length))

    toggle_help_visibility: ->
      visible = @get_help_div().attr('data-visible')
      @get_help_div().attr 'data-visible', if visible == 'true' then 'false' else 'true'

  # ---------------------------------------------------------------------

  # A really lightweight plugin wrapper around the constructor,
  # preventing against multiple instantiations and allowing any
  # public function (ie. a function whose name doesn't start
  # with an underscore) to be called via the jQuery plugin,
  # e.g. $(element).defaultPluginName('functionName', arg1, arg2)

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

# =====================================================================

$ ->

  $('div.markdown_editor').simple_form_markdown_editor_buttons()

  # make sure the plugin is correctly rebound to new elements
  $('body').on 'dom_update', (e) ->
    $('div.markdown_editor').simple_form_markdown_editor_buttons()
