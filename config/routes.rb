SimpleFormMarkdownEditor::Engine.routes.draw do
  scope module: :simple_form_markdown_editor do
    post "/preview" => "previews#preview", as: :preview
  end
end