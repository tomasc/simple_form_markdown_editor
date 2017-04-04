module SimpleFormMarkdownEditor
  class PreviewsController < ActionController::Base
    protect_from_forgery with: :exception

    respond_to :html

    def preview
      respond_to do |format|
        format.html { render plain: text_preview }
      end
    end

    private

    # overwrite this in your own controller
    def text_preview
      Renderer.call(text, { render_class: render_class, extensions: extensions })
    end

    def text
      preview_params[:text] || ''
    end

    def options
      preview_params[:options]
    end

    def render_class
      options[:render_class].present? ? options[:render_class].constantize : MarkdownEditorInput.configuration.render_class
    end

    def extensions
      options[:extensions] || MarkdownEditorInput.configuration.extensions
    end

    def render_options
      options[:render_options] || MarkdownEditorInput.configuration.render_options
    end

    def preview_params
      params.permit(:text)
      params.permit(:options)
      params[:options].permit!
      params
    end
  end
end
