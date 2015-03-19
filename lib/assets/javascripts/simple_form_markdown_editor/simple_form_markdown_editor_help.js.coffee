# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->

  pluginName = 'simple_form_markdown_editor_help'
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

      @set_section_li @get_section_lis().first()

      @get_section_lis().on 'click', (e) =>
        $li = $(e.currentTarget)
        @set_section_li($li)

      @get_sub_section_lis().on 'click', (e) =>
        $li = $(e.currentTarget)
        @set_sub_section_li($li)

    # ---------------------------------------------------------------------

    get_help_div: -> @$element.find('div.help')

    get_sections_ul: -> @get_help_div().find('ul.sections')
    get_section_lis: -> @get_sections_ul().children('li')
    get_sub_section_ul: (section) -> @get_sub_sections_uls().filter(".#{section}")
    get_sub_sections_uls: -> @get_help_div().find('ul.sub_sections')
    get_sub_section_lis: -> @get_sub_sections_uls().children('li.sub_section')

    get_help_text_divs: -> @get_help_div().find('div.help_text')

    set_section_li: ($li) ->
      $li.siblings('li').removeClass('active')
      $li.addClass('active')
      section = $li.data('toggle')
      $sub_section_ul = @get_sub_section_ul(section)
      @set_sub_section_ul($sub_section_ul)

    set_sub_section_ul: ($ul) ->
      $ul.siblings('ul').removeClass('active')
      $ul.addClass('active')
      $li = $ul.children('li:first')
      @set_sub_section_li($li)

    set_sub_section_li: ($li) ->
      $li.siblings('li').removeClass('active')
      $li.addClass('active')
      $help_text_div = @get_help_text_divs().filter(".#{$li.data('toggle')}")
      @set_help_text_div($help_text_div)

    set_help_text_div: ($div) ->
      $div.siblings('div').removeClass('active')
      $div.addClass('active')

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

  $('div.markdown_editor').simple_form_markdown_editor_help()

  # make sure the plugin is correctly rebound to new elements
  $('body').on 'dom_update', (e) ->
    $('div.markdown_editor').simple_form_markdown_editor_help()
