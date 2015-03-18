## Configuration

Translations handled via `I18n`.

### Configuration

#### Global

```
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditorInput.configure do |c|
  c.buttons = [
    ['h1', 'h2', 'h3']
    ['strong', 'em'],
    ['a', 'img']
  ]
  c.help = false
end
```

#### Single input
```
= f.input :markdown, as: :markdown_editor, input_html: { buttons: [['h1', 'h2'], ['a', 'img']], help: true }
```

## Help

Could be defined in a `I18n` `YAML` along with the functions:

```YAML
en:
  simple_form_markdown_editor:
    toolbar:
      edit: Write
      preview: View
    functions:
      h1: header 1
      h2: header 2
      h3: header 3
      a: link
      img: image
    help:
      block_elements:
        title: Block Elements
        elements:
          headers:
            title: Headers
            description: Some description
      span_elements:
        title: Span Elements
```


## Interaction

### Links
If text is selected it should wrap it with `[` / `]()` and position the cursor inside the `()`
If no text is selected it should show a modal/inline form

## Styling

* Use [font awesome](http://fortawesome.github.io/Font-Awesome/)? How to do it together with the YAML?
* Highlighting trailing spaces (for linebreaks)?

## Rendering
It should be easy to configure and add "custom" markdown rendering.

* Decouple the rendering config from the view config?
