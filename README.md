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
