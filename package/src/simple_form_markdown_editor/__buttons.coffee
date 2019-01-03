import Plugin from './plugin'

export default class Buttons extends Plugin
  @defaults =
    debug: false
    name: 'simple_form_markdown_editor__buttons'

  init: ->
    @$element.on 'click.SimpleFormMarkdownEditor__Buttons', '.simple_form_markdown_editor__button[value="help"]', (e) =>
      @$element.trigger('toggle_help')

    @$element.on 'click.SimpleFormMarkdownEditor__Buttons', '.simple_form_markdown_editor__button:not([value="help"])', (e) =>
      $button = $(e.target)
      command = $button.attr('value')
      @$element.trigger(type: 'execute_command', command: command)

  destroy: ->
    @$element.off '.SimpleFormMarkdownEditor__Buttons'
