module SimpleFormMarkdownEditor
  class Configuration

    attr_accessor :commands

    # TODO: Make everything customizable!

    def initialize
      @commands = {
        edit: 'Write',
        preview: 'Preview'
      }
    end

  end
end