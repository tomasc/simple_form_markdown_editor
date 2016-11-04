module SimpleFormMarkdownEditor
  class PreviewsController < ActionController::Base
    protect_from_forgery with: :exception
    respond_to :html

    def preview
      respond_to do |format|
        format.html { render text: text_preview }
      end
    end

    private # =============================================================

    # overwrite this in your own controller
    def text_preview
      Renderer.call(text, { render_class: render_class, extensions: extensions })
    end

    def text
      params.require(:text)
    end

    def options
      params.fetch(:options, {})
    end

    def render_class
      options.fetch(:render_class, nil).to_s.safe_constantize
    end

    def extensions
      options.fetch(:extensions, {})
    end
  end
end
