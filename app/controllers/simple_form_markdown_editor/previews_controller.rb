module SimpleFormMarkdownEditor
  class PreviewsController < ActionController::Base

    protect_from_forgery with: :exception

    respond_to :html

    def preview
      respond_to do |format|
        format.html { render text: SimpleFormMarkdownEditor::Renderer.call(preview_params) }
      end
    end

    private # =============================================================

    def preview_params
      return unless params[:text].present?
      params.require(:text)
    end

  end
end
