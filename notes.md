## Configuration
Maybe it would be good to configure the strings with `I18n` and make the configuration of the `gem` about buttons (functions) and rendering?

### Configuration both in app and input

#### For the whole app
```
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditorInput.configure do |c|
  c.functions = [
    ['h1', 'h2', 'h3']
    ['strong', 'em'],
    ['a', 'img']
  ]
end
```

#### For a single input
```
= f.input :markdown, as: :markdown_editor, input_html: { functions: [['h1', 'h2'], ['a', 'img']] }
```

Arrays would group the buttons.

### How to do:
* Help included/excluded
* Help hidden/shown per default

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
