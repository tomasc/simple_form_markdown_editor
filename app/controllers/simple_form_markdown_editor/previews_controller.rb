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
      Renderer.call(preview_params)
    end

    def preview_params
      return unless params[:text].present?
      params.require(:text)
    end
  end
end
