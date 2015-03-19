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

### Configuration

Configuration is possible app-wide (using an initializer) and per input.

#### Global

```ruby
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditor.configure do |c|
  c.buttons = [ %w(h1 h2 h3), %w(strong em), %w(a img) ]
  c.help = false
  c.markdown_engine = :kramdown
  c.markdown = {
    footnotes: true,
    smartypants: true,
    lax_spacing: true,
    escape_html: false
  }
end
```

#### Single input

```ruby
= f.input :markdown, as: :markdown_editor, help: { enabled: true, visible: false }, buttons: [ %w(h1 h2), %w(a img) ]
```

## Todo

* How to make it possible to plug in other render engines?
* How to implement "custom Markdown" (basic gsub)?

