require "simple_form"
require "simple_form_markdown_editor/configuration"
require "simple_form_markdown_editor/engine"
require "simple_form_markdown_editor/renderer"
require "simple_form_markdown_editor/simple_form_markdown_editor"
require "simple_form_markdown_editor/version"

# ---------------------------------------------------------------------

module SimpleForm
  class FormBuilder
    map_type :markdown_editor, to: SimpleFormMarkdownEditor::MarkdownEditorInput
  end
end