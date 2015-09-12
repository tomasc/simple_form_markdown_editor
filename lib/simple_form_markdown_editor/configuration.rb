module SimpleFormMarkdownEditor
  class Configuration
    attr_accessor :buttons
    attr_accessor :extensions
    attr_accessor :help
    attr_accessor :render_options
    attr_accessor :route

    # =====================================================================

    def buttons
      @buttons ||= [
        %w(h1 h2 h3),
        %w(a img),
        %w(strong em code),
        %w(ul ol blockquote hr),
        %w(help)
      ]
    end

    def extensions
      @extensions ||= {
        footnotes: true,
        highlight: true,
        space_after_headers: true,
        strikethrough: true,
        superscript: true
      }
    end

    def help
      @help ||= {
        enabled: true,
        visible: false
      }
    end

    def render_options
      @render_options ||= {}
    end

    def route
      @route ||= Engine.routes.url_helpers.preview_path
    end
  end
end
