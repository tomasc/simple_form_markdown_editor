import Plugin from './plugin'

export default class Help extends Plugin
  @defaults =
    name: 'simple_form_markdown_editor__help'
    debug: false
    section_is_active_class: 'simple_form_markdown_editor__help__section__is_active'
    sub_section_is_active_class: 'simple_form_markdown_editor__help__sub_section__is_active'
    sub_section_item_is_active_class: 'simple_form_markdown_editor__help__sub_section__item__is_active'
    help_text_is_active_class: 'simple_form_markdown_editor__help__text__is_active'

  init: ->
    $initial_section = @get_sections().first()
    @set_section($initial_section)

    @$element.on 'click.SimpleFormMarkdownEditor__Help', '.simple_form_markdown_editor__help__section', (e) =>
      e.preventDefault()
      @set_section($(e.currentTarget))

    @$element.on 'click.SimpleFormMarkdownEditor__Help', '.simple_form_markdown_editor__help__sub_section__item', (e) =>
      e.preventDefault()
      @set_sub_section_item($(e.currentTarget))

  destroy: ->
    @$element.off '.SimpleFormMarkdownEditor__Help'

  get_help_text: (sub_section_name) -> @get_help_texts().filter("[data-sub-section='#{sub_section_name}']")
  get_help_texts: -> @$element.find('.simple_form_markdown_editor__help__text')
  get_sections: -> @$element.find('.simple_form_markdown_editor__help__section')
  get_sub_section: (section_name) -> @get_sub_sections().filter("[data-section='#{section_name}']")
  get_sub_section_items: -> @$element.find('.simple_form_markdown_editor__help__sub_section__item')
  get_sub_sections: -> @$element.find('.simple_form_markdown_editor__help__sub_section')

  set_section: ($section) ->
    $section.siblings().removeClass(@options.section_is_active_class)
    $section.addClass(@options.section_is_active_class)
    section_name = $section.data('section')
    $sub_section = @get_sub_section(section_name)
    @set_sub_section($sub_section)

  set_sub_section: ($sub_section) ->
    $sub_section.siblings().removeClass(@options.sub_section_is_active_class)
    $sub_section.addClass(@options.sub_section_is_active_class)
    $sub_section_item = $sub_section.find('.simple_form_markdown_editor__help__sub_section__item').first()
    @set_sub_section_item($sub_section_item)

  set_sub_section_item: ($sub_section_item) ->
    $sub_section_item.siblings().removeClass(@options.sub_section_item_is_active_class)
    $sub_section_item.addClass(@options.sub_section_item_is_active_class)
    sub_section_name = $sub_section_item.data('sub-section')
    $help_text = @get_help_text(sub_section_name)
    @set_help_text($help_text)

  set_help_text: ($help_text) ->
    $help_text.siblings().removeClass(@options.help_text_is_active_class)
    $help_text.addClass(@options.help_text_is_active_class)
