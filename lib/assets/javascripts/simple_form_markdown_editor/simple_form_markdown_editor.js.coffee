# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->

  pluginName = 'simple_form_markdown_editor'
  defaults =
    debug: false

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

      @get_edit_tab().addClass('active')

      console.log @get_textarea().attr('data-preview-url')

      @get_toolbar_lis().on 'click', (e) =>
        @get_toolbar_lis().removeClass('active')
        $(e.currentTarget).addClass('active')
        @$element.attr('data-toggled', $(e.currentTarget).data('toggle'))

      @get_preview_tab().on 'click', (e) =>
        $.ajax(
          context: @element
          type: 'POST'
          url: @get_textarea().attr('data-preview-url')
          data: text: @get_textarea().val()
          success: (html) =>
            @get_preview_div().html html or '<p>Nothing to preview</p>'
        )

    # ---------------------------------------------------------------------

    get_editor_wrapper: -> @$element.children('div.editor:first')
    get_textarea: -> @get_editor_div().children('textarea')
    get_preview_div: -> @$element.children('div.preview')
    get_editor_div: -> @$element.children('div.editor')
    get_toolbar: -> @$element.children('div.toolbar:first')
    get_preview_tab: -> @get_toolbar_lis().filter('.preview')
    get_edit_tab: -> @get_toolbar_lis().filter('.edit')
    get_toolbar_ul: -> @get_toolbar().children('ul:first')
    get_toolbar_lis: -> @get_toolbar_ul().children('li')

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

  $('div.markdown_editor').simple_form_markdown_editor()

  # make sure the plugin is correctly rebound to new elements
  $('body').on 'dom_update', (e) ->
    $('div.markdown_editor').simple_form_markdown_editor()
