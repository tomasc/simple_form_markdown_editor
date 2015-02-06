# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_form_markdown_editor/version'

Gem::Specification.new do |spec|
  spec.name          = "simple_form_markdown_editor"
  spec.version       = SimpleFormMarkdownEditor::VERSION
  spec.authors       = ["Tomáš Celizna", "Asger Behncke Jacobsen"]
  spec.email         = ["tomas.celizna@gmail.com", "asger@"]
  spec.summary       = %q{Simple Markdown editor inspired by Github.}
  spec.description   = %q{Simple Markdown editor inspired by Github.}
  spec.homepage      = "https://github.com/tomasc/simple_form_markdown_editor"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "rails", ">= 3.1"
  spec.add_dependency "simple_form", ">= 3.0.2"
  spec.add_dependency "redcarpet"

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
