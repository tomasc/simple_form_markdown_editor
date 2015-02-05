module SimpleFormMarkdownEditor
  class PreviewController

    def preview
      respond_to do |format|
        format.html SimpleFormMarkdownEditor::Renderer.call(preview_params.markdown)
      end
    end

    private # =============================================================

    def preview_params
      params.require(:preview).permit(:markdown)
    end

  end
end