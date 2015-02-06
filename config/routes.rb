# NOTE: Is this the best way to do it? Users will have to mount the engine. Alternative?

SimpleFormMarkdownEditor::Engine.routes.draw do
  scope module: :simple_form_markdown_editor do
    post "/preview" => "previews#preview", as: :preview
  end
end