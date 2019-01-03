import Plugin from './plugin'

import Buttons from './__buttons'
import Editor from './__editor'
import Help from './__help'
import Preview from './__preview'
import Tabs from './__tabs'

export default class SimpleFormMarkdownEditor extends Plugin
  @defaults =
    debug: false
    name: 'simple_form_markdown_editor'
    definitions:
      strong: '**%{str}**',
      em: '*%{str}*',
      code: '`%{str}`',
      hr: '%{str}***',
      ul: '* %{str}',
      ol: '1. %{str}',
      blockquote: '> %{str}',
      h1: '# %{str}',
      h2: '## %{str}',
      h3: '### %{str}',
      h4: '#### %{str}',
      h5: '##### %{str}',
      h6: '###### %{str}',
      a: '[%{str}](|)',
      img: '![%{str}](|)'
    is_editor_class: 'simple_form_markdown_editor__is_editor'
    is_help_class: 'simple_form_markdown_editor__is_help'

  init: ->
    @Buttons = new Buttons(@get_buttons()[0])
    @Editor = new Editor(@get_editor()[0])
    @Help = new Help(@get_help()[0])
    @Preview = new Preview(@get_preview()[0])
    @Tabs = new Tabs(@get_tabs()[0])

    @$element.on 'show_editor.SimpleFormMarkdownEditor', (e) =>
      e.stopPropagation()
      @$element.addClass(@options.is_editor_class)

    @$element.on 'show_preview.SimpleFormMarkdownEditor', (e) =>
      e.stopPropagation()
      @$element.removeClass(@options.is_editor_class)

    @$element.on 'show_preview.SimpleFormMarkdownEditor', (e) =>
      e.stopPropagation()
      options = @get_options()
      val = @Editor.get_val()
      $.ajax
        type: 'POST'
        url: @get_preview_path()
        data:
          _method: 'PUT'
          text: val
          options: options
        success: (html) =>
          @get_preview().trigger(type: 'show_preview', html: html)

    @$element.on 'toggle_help.SimpleFormMarkdownEditor', (e) =>
      e.stopPropagation()
      @$element.toggleClass(@options.is_help_class)

    @$element.on 'execute_command.SimpleFormMarkdownEditor', (e) =>
      e.stopPropagation()
      command = e.command
      definition = @options.definitions[command]
      @get_editor().trigger
        type: 'execute_command_definition'
        command: command
        definition: definition

  destroy: ->
    @Buttons.destroy() if @Buttons
    @Editor.destroy() if @Editor
    @Help.destroy() if @Help
    @Preview.destroy() if @Preview
    @Tabs.destroy() if @Tabs
    @$element.off '.SimpleFormMarkdownEditor'

  get_buttons: -> @$element.find('.simple_form_markdown_editor__buttons')
  get_editor: -> @$element.find('.simple_form_markdown_editor__editor')
  get_help: -> @$element.find('.simple_form_markdown_editor__help')
  get_preview: -> @$element.find('.simple_form_markdown_editor__preview')
  get_tabs: -> @$element.find('.simple_form_markdown_editor__tabs')

  get_options: -> @$element.data('options')
  get_preview_path: -> @$element.data('preview-path')
