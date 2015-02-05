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

      # @get_textarea().hide()

      # ---------------------------------------------------------------------

      # @get_toolbar_ul().children('li:first').addClass('active')

      # @get_toolbar_lis().on 'click', (event) ->
      #   $li = $(event.currentTarget)
      #   $li.siblings('li').removeClass('active')
      #   $li.addClass('active')
      #   e[$li.data('toggle')]()

    # ---------------------------------------------------------------------

    # get_editor_wrapper: -> @$element.children('div.editor:first')
    # get_editor_toolbar: -> @$element.children('div.toolbar:first')
    # get_textarea: -> @$element.children('textarea:first')
    # get_toolbar_ul: -> @get_editor_toolbar().children('ul:first')
    # get_toolbar_lis: -> @get_toolbar_ul().children('li')

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

  $('div.simple_form_markdown_editor').simple_form_markdown_editor()

  # make sure the plugin is correctly rebound to new elements
  $('body').on 'dom_update', (e) ->
    $('div.simple_form_markdown_editor').simple_form_markdown_editor()
