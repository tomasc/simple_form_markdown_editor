module SimpleFormMarkdownEditor
  class Configuration

    attr_accessor :buttons
    attr_accessor :extensions
    attr_accessor :help
    attr_accessor :render_options

    def initialize
      @buttons = [%w(h1 h2 h3), %w(a img), %w(strong em code), %w(ul ol blockquote hr), %w(help)]
      @help = {
        enabled: true,
        visible: false
      }
      @extensions = {
        footnotes: true,
        highlight: true,
        space_after_headers: true,
        strikethrough: true,
        superscript: true
      }
      @render_options = {}
    end

  end
end