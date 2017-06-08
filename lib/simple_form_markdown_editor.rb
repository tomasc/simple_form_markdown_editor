require 'simple_form'

require 'simple_form_markdown_editor/configuration'
require 'simple_form_markdown_editor/engine'
require 'simple_form_markdown_editor/markdown_editor_input'
require 'simple_form_markdown_editor/renderer'
require 'simple_form_markdown_editor/version'

require 'i18n'

module SimpleFormMarkdownEditor
  def self.dom_class(*args)
    prefix, alts = args.partition { |i| !i.is_a?(Array) }
    prefix = ['simple_form_markdown_editor'] + prefix
    return prefix.compact.join('__') if alts.empty?
    alts.flatten.map do |item|
      prefix += [item]
      prefix.compact.join('__')
    end
  end
end

module SimpleForm
  class FormBuilder
    map_type :markdown_editor, to: SimpleFormMarkdownEditor::MarkdownEditorInput
  end
end

I18n.load_path += Dir.glob(File.join(File.dirname(__FILE__), 'config', 'locales', '*.yml'))
