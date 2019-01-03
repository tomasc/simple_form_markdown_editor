import Plugin from './plugin'

export default class Preview extends Plugin
  @defaults =
    name: 'simple_form_markdown_editor__preview'
    debug: false

  init: ->
    @$element.on 'show_preview', (e) =>
      e.stopPropagation()
      content = e.html or "<p>" + @get_nothing_to_preview_text() + "</p>"
      @$element.html(content)

  get_nothing_to_preview_text: ->
    @$element.data('nothing-to-preview-text') or 'Nothing to preview.'
