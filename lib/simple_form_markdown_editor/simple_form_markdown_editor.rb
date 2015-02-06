require 'simple_form'

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

    def input
      input_html_options['data-preview-url'] = SimpleFormMarkdownEditor::Engine.routes.url_helpers.preview_path
      toolbar + text_area + preview + help
    end

    private # =============================================================

    def toolbar
      template.content_tag :div, class: 'toolbar' do
        commands
      end.html_safe
    end

    def commands
      template.content_tag :ul, class: 'commands' do
        command_list.map do |c, t|
          command(c, t)
        end.flatten.join.html_safe
      end
    end

    def command_list
      options[:commands] || SimpleFormMarkdownEditor::MarkdownEditorInput.configuration.commands
    end

    def command(c, t)
      template.content_tag :li, class: c.to_s.underscore.downcase, data: { toggle: c.to_s } do
        template.content_tag :span, t.to_s, class: c.to_s.underscore.downcase
      end
    end

    def text_area
      template.content_tag :div, class: %w(editor) do
        @builder.text_area(attribute_name, input_html_options).html_safe
      end
    end

    def preview
      template.content_tag :div, 'Loading preview ...', class: %w(preview)
    end

    def help
      template.content_tag :div, class: %w(help) do
        # NOTE: How to add this / make it configurable?
        # * Locales
        # * ?
        'foo'
      end
    end

  end
end