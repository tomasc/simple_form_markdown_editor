require 'redcarpet'

module SimpleFormMarkdownEditor
  class Renderer

    def self.call(*args)
      new(*args).call
    end

    # =====================================================================

    attr_reader :str

    def initialize str
      @str = str
    end

    def call
      return unless @str.present?
      markdown_renderer.render(@str).html_safe
    end

    private # =============================================================

    def markdown_renderer
      Redcarpet::Markdown.new(
        Redcarpet::Render::HTML.new(self.class.configuration.render_options),
        self.class.configuration.extensions
      )
    end

    # ---------------------------------------------------------------------

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

  end

  # ---------------------------------------------------------------------

end
