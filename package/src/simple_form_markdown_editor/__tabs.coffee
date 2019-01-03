import Plugin from './plugin'

export default class Tabs extends Plugin
  @defaults =
    name: 'simple_form_markdown_editor__tabs'
    debug: false
    is_active_class: 'simple_form_markdown_editor__tab__is_active'

  init: ->
    @set_active_tab(@get_edit_tab())

    @$element.on 'click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab', (e) =>
      @set_active_tab($(e.currentTarget))

    @$element.on 'click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab__edit', (e) =>
      @$element.trigger('show_editor')

    @$element.on 'click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab__preview', (e) =>
      @$element.trigger('show_preview')

  destroy: ->
    @$element.off '.SimpleFormMarkdownEditor__Tabs'

  get_edit_tab: -> @$element.find('.simple_form_markdown_editor__tab__edit')
  get_preview_tab: -> @$element.find('.simple_form_markdown_editor__tab__preview')
  get_tabs: -> @$element.find('.simple_form_markdown_editor__tab')

  set_active_tab: ($tab) ->
    @get_tabs().removeClass(@options.is_active_class)
    $tab.addClass(@options.is_active_class)
