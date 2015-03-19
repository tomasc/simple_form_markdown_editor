# SimpleForm Markdown Editor

A simple [Markdown](http://daringfireball.net/projects/markdown/) editor inspired by the Github comment editor.

[Markdown](http://daringfireball.net/projects/markdown/) rendering is handled by [Redcarpet](https://github.com/vmg/redcarpet).

## Installation

Add this line to your application's Gemfile:

    gem 'simple_form_markdown_editor'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install simple_form_markdown_editor

## Usage

Require the javascripts in `application.js`:

    //= require simple_form_markdown_editor

And require the stylesheets in `application.css`:

    *= require simple_form_markdown_editor

Finally mount the engine in your routes:

    mount SimpleFormMarkdownEditor::Engine => "/"

Use in forms:

    = form.input :markdown, as: :markdown_editor

## Configuration

Configuration is possible app-wide (using an initializer) and per input.

Refer to [redcarpet](https://github.com/vmg/redcarpet) for a list of available [extensions](https://github.com/vmg/redcarpet#and-its-like-really-simple-to-use) and [render](https://github.com/vmg/redcarpet#darling-i-packed-you-a-couple-renderers-for-lunch) options.

### Global

```ruby
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditor.configure do |c|
  c.buttons = [ %w(h1 h2 h3), %w(strong em), %w(a img) ]
  c.help = { enabled: true, visible: false }
  c.extensions = {
    footnotes: true,
    smartypants: true,
    lax_spacing: true,
    escape_html: false
  }
  c.render_options = {
    :no_images,
    :no_links
  }
end
```

### Input

```ruby
= f.input :markdown, as: :markdown_editor, help: { enabled: true, visible: false }, buttons: [ %w(h1 h2), %w(a img) ]
```

## Internationalization

All strings (buttons, help etc.) are defined in a `I18n` `YAML` file along with buttons and tabs. This can easily be overridden and extended to other languages:

```YAML
# simple_form_markdown_editor.en.yml

en:
  simple_form_markdown_editor:
    tabs:
      edit: Write
      preview: Sneak peek
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
            text: Some description
```


## Todo

* How to make it possible to plug in other render engines?
* How to implement "custom Markdown" (basic gsub)?
* Highlighting trailing spaces (for linebreaks)?
* Implement keyboard shortcuts
* Implement Ctrl+z
* Implement install task (create YML and config)?