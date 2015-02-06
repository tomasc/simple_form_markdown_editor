module SimpleFormMarkdownEditor
  class Configuration

    attr_accessor :commands
    attr_accessor :extensions
    attr_accessor :render_options

    def initialize
      @commands = {
        edit: 'Write',
        preview: 'Preview'
      }
      @extensions = {
        autolink: true,
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