Rails.application.routes.draw do
  root to: 'editor_tests#new'
  resources :editor_tests, only: [:new, :create]
  mount SimpleFormMarkdownEditor::Engine => "/"
end