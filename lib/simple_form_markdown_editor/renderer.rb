# SimpleFormMarkdownEditor::Renderer.call("_bold_")
# => <strong>bold</strong>

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
        to_html
      end
      
      private # =============================================================
      
      def to_html
        # TODO: turn @str to html
      end
      
  end
end
