require 'simple_form'
require 'i18n'

module SimpleFormMarkdownEditor
  class MarkdownEditorInput < SimpleForm::Inputs::Base

    class << self
      attr_accessor :configuration

      def configure
        @configuration ||= Configuration.new
        yield @configuration
      end

      def configuration
        @configuration ||= Configuration.new
      end
    end

    # =====================================================================

    def input wrapper_options
      input_html_options['data-preview-url'] = SimpleFormMarkdownEditor::Engine.routes.url_helpers.preview_path
      header + help + text_area + preview
    end

    private # =============================================================

    def header
      template.content_tag :div, class: 'header' do
        tabs + buttons
      end.html_safe
    end

    def tabs
      template.content_tag :ul, class: 'tabs' do
        tab_list.collect do |t|
          tab(t)
        end.flatten.join.html_safe
      end
    end

    def tab_list
      %w(edit preview)
    end

    def tab t
      template.content_tag :li, class: ['tab', t.to_s.underscore.downcase], data: { command: t.to_s } do
        template.content_tag :span, I18n.t(t.to_sym, scope: 'simple_form_markdown_editor.tabs'), class: t.to_s.underscore.downcase
      end
    end

    def buttons
      template.content_tag :ul, class: 'buttons' do
        button_list.map do |b, t|
          button(b, t)
        end.flatten.join.html_safe
      end
    end

    def button_list
      options[:buttons] || SimpleFormMarkdownEditor::MarkdownEditorInput.configuration.buttons
    end

    def button(b, t)
      template.content_tag :li, class: ['button', b.to_s], data: { toggle: b.to_s } do
        template.content_tag :span, t.to_s, class: b.to_s
      end
    end

    def text_area
      template.content_tag :div, class: %w(editor) do
        @builder.text_area(attribute_name, input_html_options).html_safe
      end
    end

    def preview
      template.content_tag :div, I18n.t(:loading, scope: 'simple_form_markdown_editor'), class: %w(preview)
    end

    def help
      template.content_tag :div, class: %w(help) do
        help_sections + help_sub_sections + help_description
      end
    end

    def help_sections
      template.content_tag :ul, class: %w(sections) do
        i18n_help.map do |k, v|
          help_section(k, v)
        end.flatten.join.html_safe
      end
    end

    def help_sub_sections
      template.content_tag :ul, class: %w(sub_sections) do
        i18n_help[i18n_help.keys.first][:elements].map do |k, v|
          help_section(k, v)
        end.flatten.join.html_safe
      end
    end

    def help_section(k, v)
      template.content_tag :li, class: ['section', k.to_s] do
        template.content_tag :span, v[:title].to_s, data: { toggle: k.to_s }
      end
    end

    def help_description
      template.content_tag :div, class: ['help_text'] do
        template.simple_format(i18n_help[:block_elements][:elements][:paragraphs][:text])
      end
    end

    def i18n_help
      I18n.t(:help, scope: 'simple_form_markdown_editor')
    end

  end
end