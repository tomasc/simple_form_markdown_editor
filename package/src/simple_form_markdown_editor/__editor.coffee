import Plugin from './plugin'

export default class Editor extends Plugin
  @defaults =
    name: 'simple_form_markdown_editor__editor'
    debug: false

  init: ->
    @$element.on 'execute_command_definition.SimpleFormMarkdownEditor__Editor', (e) =>
      e.stopPropagation()
      command = e.command
      definition = e.definition
      @execute_command_definition(command, definition)

  destroy: ->
    @$element.off '.SimpleFormMarkdownEditor__Editor'

  get_textarea: -> @$element.find 'textarea'
  get_val: -> @get_textarea().val()
  get_selection: ->
    $e = @get_textarea()
    {
      start: $e[0].selectionStart
      end: $e[0].selectionEnd
      length: $e[0].selectionEnd - $e[0].selectionStart
      text: $e.val().substring($e[0].selectionStart, $e[0].selectionEnd)
    }

  execute_command_definition: (command, definition) ->
    selection = @get_selection()
    replacement = definition.replace('%{str}', selection.text)
    caret_pos = replacement.indexOf('|')
    start = selection.start
    end = selection.start + replacement.length
    if caret_pos > -1
      replacement = replacement.replace(/\|/g, '')
      start = selection.start + caret_pos
      end = selection.start + caret_pos
    @replace_selection(replacement)
    @set_selection(start, end)

  set_selection: (start, end) ->
    $e = @get_textarea()
    $e.focus()
    $e[0].selectionStart = start
    $e[0].selectionEnd = end

  replace_selection: (string) ->
    $e = @get_textarea()
    start = $e[0].selectionStart
    end = $e[0].selectionEnd
    val = $e.val()
    $e.val(val.substring(0, start) + string + val.substring(end, val.length))
