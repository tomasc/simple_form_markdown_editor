require 'simple_form'
require 'i18n'

module SimpleFormMarkdownEditor
  class MarkdownEditorInput < SimpleForm::Inputs::Base

    class << self
      attr_accessor :configuration

      def configure
        @configuration ||= Configuration.new
        yield @configuration
      end

      def configuration
        @configuration ||= Configuration.new
      end
    end

    # =====================================================================

    def input wrapper_options
      merged_input_options = merge_wrapper_options(input_html_options, wrapper_options)
      template.content_tag(:div, merged_input_options) do
        header + help + editor + preview
      end
    end

    private # =============================================================

    def input_html_options
      super.merge!(data_preview_url: SimpleFormMarkdownEditor::Engine.routes.url_helpers.preview_path)
    end

    def input_html_classes
      super.push('simple_form_markdown_editor')
    end

    def header
      template.content_tag :div, class: 'header' do
        tabs + buttons
      end.html_safe
    end

    # ---------------------------------------------------------------------

    def tabs
      template.content_tag :div, class: 'editor_tabs' do
        template.content_tag :ul, class: 'tabs' do
          tab_list.collect do |t|
            tab(t)
          end.flatten.join.html_safe
        end
      end
    end

    def tab_list
      %w(edit preview)
    end

    def tab t
      template.content_tag :li, class: ['tab', t.to_s.underscore.downcase], data: { command: t.to_s } do
        template.content_tag :span, I18n.t(t.to_sym, scope: 'simple_form_markdown_editor.tabs'), class: t.to_s.underscore.downcase
      end
    end

    # ---------------------------------------------------------------------

    def buttons
      template.content_tag :div, class: 'buttons' do
        button_groups
      end
    end

    def button_groups
      template.content_tag :ul, class: 'button_groups' do
        button_list.collect do |group|
          button_group(group)
        end.flatten.join.html_safe
      end
    end

    def button_group g
      template.content_tag :li, class: 'button_group', data: { buttons: g.join(' ') } do
        template.content_tag :ul, class: 'buttons' do
          g.collect do |b|
            button(b)
          end.flatten.join.html_safe
        end
      end
    end

    def button b
      return if b == 'help' && !help_enabled?
      template.content_tag :li, class: ['button', b], data: { toggle: b } do
        template.content_tag :button, I18n.t(b.to_sym, scope: 'simple_form_markdown_editor.buttons'), class: b, value: b, role: '', state: '', name: '', type: 'button'
      end
    end

    def button_list
      # p options[:help][:enabled]
      res = options[:buttons].presence || SimpleFormMarkdownEditor::MarkdownEditorInput.configuration.buttons
      p res
      res
    end

    # ---------------------------------------------------------------------

    def editor
      template.content_tag :div, class: %w(editor) do
        @builder.text_area(attribute_name, input_html_options).html_safe
      end
    end

    def preview
      template.content_tag :div, I18n.t(:loading, scope: 'simple_form_markdown_editor'), class: %w(preview)
    end

    # ---------------------------------------------------------------------

    def help
      return unless help_enabled?
      template.content_tag :div, class: %w(help), data: { visible: help_visible? } do
        template.content_tag :div, class: %w(help_wrapper) do
          help_sections + help_sub_sections + help_texts
        end
      end
    end

    def help_sections
      template.content_tag :ul, class: %w(sections) do
        i18n_help.map do |section, content|
          help_section(section, content)
        end.flatten.join.html_safe
      end
    end

    def help_section section, content
      return unless content[:title]
      template.content_tag :li, class: ['section', section.to_s], data: { toggle: section.to_s } do
        template.content_tag :span, content[:title].to_s, class: section.to_s
      end.html_safe
    end

    def help_sub_sections
      i18n_help.map do |section, content|
        template.content_tag :ul, class: ['sub_sections', section.to_s] do
          content[:elements].map do |section, content|
            help_sub_section(section, content)
          end.flatten.join.html_safe
        end
      end.flatten.join.html_safe
    end

    def help_sub_section section, content
      return unless content[:title]
      template.content_tag :li, class: ['sub_section', section.to_s], data: { toggle: section.to_s } do
        template.content_tag :span, content[:title].to_s, class: section.to_s
      end.html_safe
    end

    def help_texts
      i18n_help.map do |section, content|
        content[:elements].map do |element, content|
          template.content_tag :div, class: ['help_text', element.to_s], data: { section: section.to_s, sub_section: element.to_s } do
            content[:text]
          end
        end
      end.flatten.join.html_safe
    end

    def i18n_help
      I18n.t(:help, scope: 'simple_form_markdown_editor')
    end

    def help_enabled?
      return SimpleFormMarkdownEditor::MarkdownEditorInput.configuration.help.fetch(:enabled, false) if options.fetch(:help, {}).fetch(:enabled, nil).nil?
      options[:help][:enabled]
    end

    def help_visible?
      return SimpleFormMarkdownEditor::MarkdownEditorInput.configuration.help.fetch(:visible, false) if options.fetch(:help, {}).fetch(:visible, nil).nil?
      options[:help][:visible]
    end

  end
end