## Configuration

Translations handled via `I18n`.

### Configuration

#### Global

```ruby
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditor.configure do |c|
  c.buttons = [
    ['h1', 'h2', 'h3']
    ['strong', 'em'],
    ['a', 'img']
  ]
  c.help = false
  c.markdown_engine = :kramdown
end
```

#### Single input

```ruby
= f.input :markdown, as: :markdown_editor, input_html: { buttons: [['h1', 'h2'], ['a', 'img']], help: true, markdown_engine: :kramdown }
```

## Help

Defined in a `I18n` `YAML` along with the functions:

```YAML
en:
  simple_form_markdown_editor:
    tabs:
      edit: Edit
      preview: Preview
      
    buttons:
      h1: Header 1
      h2: Header 2
      h3: Header 3
      a: Link
      img: Image
      
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

Let's keep this very simple (for a start). The buttons are there really for convenience for those not so familiar with Markdown syntax. The buttons only work when a text is selected.
For example, when link button wraps selected text with `[` / `]()` and positions cursor inside the `()`.

## Styling

Extremely basic CSS included, which is easy to extend or override altogteher.

* By default the buttons are labeled with text `B`, `I`, `H1`, …

# Next versions

* Highlighting trailing spaces (for linebreaks)?
