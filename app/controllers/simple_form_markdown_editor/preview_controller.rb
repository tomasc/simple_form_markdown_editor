module SimpleFormMarkdownEditor
  class PreviewController

    respond_to :js, :json

    # ---------------------------------------------------------------------
    
    def preview
      markdown = preview_params.markdown
      respond_with( html: SimpleFormMarkdownEditor::Renderer.call(markdown) )
    end

    private # =============================================================

    def preview_params
      params.require(:preview).permit(:markdown)
    end

  end
end