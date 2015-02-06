module SimpleFormMarkdownEditor
  class Configuration

    attr_accessor :commands

    def initialize
      @commands = {
        edit: 'Write',
        preview: 'Preview'
      }
    end

  end
end