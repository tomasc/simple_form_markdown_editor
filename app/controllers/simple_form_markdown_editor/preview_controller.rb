module SimpleFormMarkdownEditor
  class PreviewController

    respond_to :js, :json

    def preview
      markdown = preview_params.markdown
      response = {
        html: SimpleFormMarkdownEditor::Renderer.new(markdown).call
      }
      respond_with response.to_json
    end

    private # =============================================================

    def preview_params
      params.require(:preview).permit(:markdown)
    end

  end
end