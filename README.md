# SimpleForm Markdown Editor

A simple [Markdown](http://daringfireball.net/projects/markdown/) editor inspired by [gollum_editor](https://github.com/samknight/gollum_editor), the editor used for Github's wiki pages.

[Markdown](http://daringfireball.net/projects/markdown/) rendering is handled by [Redcarpet](https://github.com/vmg/redcarpet).

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'simple_form_markdown_editor'
```

And then execute:

```sh
$ bundle
```

Or install it yourself as:

```sh
$ gem install simple_form_markdown_editor
```

## Usage

Require the javascripts in `application.js`:

```jsx
//= require simple_form_markdown_editor
```

And require the stylesheets in `application.css`:

```css
*= require simple_form_markdown_editor
```

Finally mount the engine in your routes:

```ruby
mount SimpleFormMarkdownEditor::Engine => "/"
```

Use in forms:

```slim
= form.input :markdown, as: :markdown_editor
```

## Configuration

Configuration is possible app-wide (using an initializer) and per input.

Refer to [redcarpet](https://github.com/vmg/redcarpet) for a list of available [extensions](https://github.com/vmg/redcarpet#and-its-like-really-simple-to-use) and [render](https://github.com/vmg/redcarpet#darling-i-packed-you-a-couple-renderers-for-lunch) options.

### Global

```ruby
# config/initializers/simple_form_markdown_editor.rb

SimpleFormMarkdownEditor::MarkdownEditorInput.configure do |c|
  c.buttons = [%w(h1 h2 h3), %w(strong em), %w(a img)]
  c.button_definitions = { strong: '**%{str}**' }
  c.help = { enabled: true, visible: false }
  c.extensions = {
    footnotes: true,
    smartypants: true,
    lax_spacing: true,
    escape_html: false
  }
  c.render_class = CustomRenderClass
  c.render_options = {
    no_images: true,
    no_links: true
  }
  c.route = '/custom/preview'
end
```

### Input

```ruby
= f.input :markdown, as: :markdown_editor, buttons: [ %w(h1 h2), %w(a img) ], help: { enabled: true, visible: false }, extensions: { footnotes: true }, render_class: CustomRenderClass, render_options: { no_images: true }, route: '/custom/preview'
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
        title: Blocks
        elements:
          headers:
            title: # Headers
            text: A very good explanation
```


## Testing

The gem includes a rails app for easy testing, simply `cd test/dummy`, `bundle install` and `bundle exec bin/rails s`, then direct your browser to `127.0.0.1:3000` to see the editor in action.

## Todo

* How to make it possible to plug in other render engines?
* Highlighting trailing spaces (for linebreaks)?
* Implement keyboard shortcuts
* Implement Ctrl+z
* Implement install task (create YML and config)?
