# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simple_form_markdown_editor/version'

Gem::Specification.new do |spec|
  spec.name          = 'simple_form_markdown_editor'
  spec.version       = SimpleFormMarkdownEditor::VERSION
  spec.authors       = ['Tomas Celizna', 'Asger Behncke Jacobsen']
  spec.email         = ['mail@tomascelizna.com', 'asger@8kilo.com']
  spec.summary       = 'Simple Markdown editor (inspired by GitHub editor).'
  spec.description   = 'Simple Markdown editor (inspired by GitHub editor).'
  spec.homepage      = 'https://github.com/tomasc/simple_form_markdown_editor'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_dependency 'rails', '>= 4.2'
  spec.add_dependency 'simple_form', '>= 3.0.2'
  spec.add_dependency 'slim'
  spec.add_dependency 'redcarpet'
  spec.add_dependency 'responders'

  spec.add_development_dependency 'bundler', '~> 1.6'
  spec.add_development_dependency 'minitest', '~> 5.0'
  spec.add_development_dependency 'minitest-rails'
  spec.add_development_dependency 'rake', '~> 10.0'
end
