require "simple_form"

require "simple_form_markdown_editor/configuration"
require "simple_form_markdown_editor/engine"
require "simple_form_markdown_editor/renderer"
require "simple_form_markdown_editor/simple_form_markdown_editor"
require "simple_form_markdown_editor/version"

require "i18n"

# ---------------------------------------------------------------------

module SimpleForm
  class FormBuilder
    map_type :markdown_editor, to: SimpleFormMarkdownEditor::MarkdownEditorInput
  end
end

# ---------------------------------------------------------------------

I18n.load_path += Dir.glob(File.join( File.dirname(__FILE__), 'config', 'locales', '*.yml' ))