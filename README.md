# SimpleForm Markdown Editor

A simple Markdown editor inspired by the Github comment editor.

## Installation

Add this line to your application's Gemfile:

    gem 'simple_form_markdown_editor'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install simple_form_markdown_editor

To make it work you need to require the javascripts in `application.js`:

    //= require simple_form_markdown_editor

And require the stylesheets in `application.css`:

    *= require simple_form_markdown_editor

Finally you need to mount the engine in your routes:

    mount SimpleFormMarkdownEditor::Engine => "/"

## Usage

Use in forms:

    = form.input :markdown, as: :markdown_editor