# https://github.com/jquery-boilerplate/jquery-boilerplate/
do ($ = jQuery, window, document) ->
  pluginName = 'simple_form_markdown_editor__help'
  defaults =
    debug: false
    section_is_active_class: 'simple_form_markdown_editor__help__section__is_active'
    sub_section_is_active_class: 'simple_form_markdown_editor__help__sub_section__is_active'
    sub_section_item_is_active_class: 'simple_form_markdown_editor__help__sub_section__item__is_active'
    help_text_is_active_class: 'simple_form_markdown_editor__help__text__is_active'

  class Plugin
    constructor: (@element, options) ->
      @settings = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()

    init: ->
      $initial_section = @get_sections().first()
      @set_section($initial_section)

      @$element.on 'click', '.simple_form_markdown_editor__help__section', (e) =>
        e.preventDefault()
        @set_section($(e.target))

      @$element.on 'click', '.simple_form_markdown_editor__help__sub_section__item', (e) =>
        e.preventDefault()
        @set_sub_section_item($(e.target))

    # ---------------------------------------------------------------------

    get_help_text: (sub_section_name) -> @get_help_texts().filter("[data-sub-section='#{sub_section_name}']")
    get_help_texts: -> @$element.find('.simple_form_markdown_editor__help__text')
    get_sections: -> @$element.find('.simple_form_markdown_editor__help__section')
    get_sub_section: (section_name) -> @get_sub_sections().filter("[data-section='#{section_name}']")
    get_sub_section_items: -> @$element.find('.simple_form_markdown_editor__help__sub_section__item')
    get_sub_sections: -> @$element.find('.simple_form_markdown_editor__help__sub_section')

    # ---------------------------------------------------------------------

    set_section: ($section) ->
      $section.siblings().removeClass(@settings.section_is_active_class)
      $section.addClass(@settings.section_is_active_class)
      section_name = $section.data('section')
      $sub_section = @get_sub_section(section_name)
      @set_sub_section($sub_section)

    set_sub_section: ($sub_section) ->
      $sub_section.siblings().removeClass(@settings.sub_section_is_active_class)
      $sub_section.addClass(@settings.sub_section_is_active_class)
      $sub_section_item = $sub_section.find('.simple_form_markdown_editor__help__sub_section__item').first()
      @set_sub_section_item($sub_section_item)

    set_sub_section_item: ($sub_section_item) ->
      $sub_section_item.siblings().removeClass(@settings.sub_section_item_is_active_class)
      $sub_section_item.addClass(@settings.sub_section_item_is_active_class)
      sub_section_name = $sub_section_item.data('sub-section')
      $help_text = @get_help_text(sub_section_name)
      @set_help_text($help_text)

    set_help_text: ($help_text) ->
      $help_text.siblings().removeClass(@settings.help_text_is_active_class)
      $help_text.addClass(@settings.help_text_is_active_class)

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
