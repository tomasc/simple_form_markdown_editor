# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->
  pluginName = 'simple_form_markdown_editor__tabs'
  defaults =
    debug: false
    is_active_class: 'simple_form_markdown_editor__tab__is_active'

  class Plugin
    constructor: (@element, options) ->
      @settings = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      @set_active_tab(@get_edit_tab())

      @$element.on 'click', '.simple_form_markdown_editor__tab', (e) =>
        @set_active_tab($(e.target))

      @$element.on 'click', '.simple_form_markdown_editor__tab__edit', (e) =>
        @$element.trigger('show_editor')

      @$element.on 'click', '.simple_form_markdown_editor__tab__preview', (e) =>
        @$element.trigger('show_preview')

    # ---------------------------------------------------------------------

    get_edit_tab: -> @$element.find('.simple_form_markdown_editor__tab__edit')
    get_preview_tab: -> @$element.find('.simple_form_markdown_editor__tab__preview')
    get_tabs: -> @$element.find('.simple_form_markdown_editor__tab')

    # ---------------------------------------------------------------------

    set_active_tab: ($tab) ->
      @get_tabs().removeClass(@settings.is_active_class)
      $tab.addClass(@settings.is_active_class)

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
