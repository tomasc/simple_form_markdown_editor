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
      markdown_renderer.render(@str).html_safe
    end

    private # =============================================================

    def markdown_renderer
      # Redcarpet::Markdown.new(
      #   Redcarpet::Render::HTML.new(self.class.configuration.render_options),
      #   self.class.configuration.extensions
      # )

      Redcarpet::Markdown.new(Redcarpet::Render::HTML.new)
    end

    # ---------------------------------------------------------------------

    # class << self
    #   attr_accessor :configuration

    #   def configure
    #     @configuration ||= Configuration.new
    #     yield @configuration
    #   end

    #   def configuration
    #     @configuration ||= Configuration.new
    #   end
    # end

  end

  # ---------------------------------------------------------------------

  # class Configuration
  #   attr_accessor :extensions
  #   attr_accessor :render_options

  #   def initialize
  #     @extensions = {
  #       autolink: true,
  #       footnotes: true,
  #       highlight: true,
  #       space_after_headers: true,
  #       strikethrough: true,
  #       superscript: true
  #     }
  #     @render_options = {}
  #   end
  # end

  # ---------------------------------------------------------------------

end
