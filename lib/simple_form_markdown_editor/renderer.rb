require 'redcarpet'

module SimpleFormMarkdownEditor
  class Renderer < Struct.new :str, :options
    def self.call(*args)
      new(*args).call
    end

    def initialize(str, options = {})
      super(str, options)
    end

    def render_class
      options.fetch(:render_class, MarkdownEditorInput.configuration.render_class)
    end

    def render_options
      options.fetch(:render_options, MarkdownEditorInput.configuration.render_options)
    end

    def extensions
      options.fetch(:extensions, MarkdownEditorInput.configuration.extensions)
    end

    def call
      return unless str.present?
      markdown_renderer.render(str).html_safe
    end

    private

    def markdown_renderer
      Redcarpet::Markdown.new(render_class.new(render_options), extensions)
    end
  end
end
