module SimpleFormMarkdownEditor
  class Configuration
    attr_accessor :buttons
    attr_accessor :button_definitions
    attr_accessor :extensions
    attr_accessor :help
    attr_accessor :render_class
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

    def button_definitions
      @button_definitions ||= {
        strong: '**%{str}**',
        em: '*%{str}*',
        code: '`%{str}`',
        hr: '%{str}***',
        ul: '* %{str}',
        ol: '1. %{str}',
        blockquote: '> %{str}',
        h1: '# %{str}',
        h2: '## %{str}',
        h3: '### %{str}',
        h4: '#### %{str}',
        h5: '##### %{str}',
        h6: '###### %{str}',
        a: '[%{str}](|)',
        img: '![%{str}](|)'
      }
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

    def render_class
      @render_class ||= Redcarpet::Render::HTML
    end

    def render_options
      @render_options ||= {}
    end

    def route
      @route ||= Engine.routes.url_helpers.preview_path
    end
  end
end
