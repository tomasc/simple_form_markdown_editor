SimpleFormMarkdownEditor::Engine.routes.draw do
  scope module: :simple_form_markdown_editor do
    put '/preview' => 'previews#preview', as: :preview
  end
end
