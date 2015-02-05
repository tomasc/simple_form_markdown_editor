require "simple_form"
require "simple_form_markdown_editor/configuration"
require "simple_form_markdown_editor/engine"
require "simple_form_markdown_editor/renderer"
require "simple_form_markdown_editor/simple_form_markdown_editor"
require "simple_form_markdown_editor/version"

require "rails-assets-epiceditor"

# ---------------------------------------------------------------------

module SimpleForm
  class FormBuilder
    map_type :epic_editor, to: SimpleFormEpicEditor::EpicEditorInput
  end
end