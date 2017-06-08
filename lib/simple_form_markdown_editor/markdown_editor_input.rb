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

    def input(wrapper_options)
      attrs = merge_wrapper_options(input_html_options, wrapper_options)
      attrs[:class] = [SimpleFormMarkdownEditor.dom_class, SimpleFormMarkdownEditor.dom_class(:is_editor)]
      attrs[:class] << SimpleFormMarkdownEditor.dom_class(:is_help) if help_visible?
      attrs[:data] ||= {}
      attrs[:data][:preview_path] = preview_path
      attrs[:data][:options] = { render_class: render_class, render_options: render_options, extensions: extensions }

      template.content_tag :div, attrs do
        template.concat header
        template.concat help
        template.concat editor
        template.concat preview
      end
    end

    private # =============================================================

    def preview_path
      options.fetch(:route, MarkdownEditorInput.configuration.route)
    end

    def render_class
      options.fetch(:render_class, MarkdownEditorInput.configuration.render_class)
    end

    def render_options
      options.fetch(:render_options, MarkdownEditorInput.configuration.render_options)
    end

    def extensions
      options.fetch(:extensions, MarkdownEditorInput.configuration.extensions)
    end

    def header
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:header) do
        tabs + buttons
      end.html_safe
    end

    # ---------------------------------------------------------------------

    def tabs
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:tabs) do
        tab_list.map { |t| tab(t) }.flatten.join.html_safe
      end
    end

    def tab_list
      %w(edit preview)
    end

    def tab(name)
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class([:tab, name]) do
        template.content_tag(:span, I18n.t(name, scope: 'simple_form_markdown_editor.tabs'))
      end
    end

    # ---------------------------------------------------------------------

    def buttons
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:buttons) do
        button_list.map { |group| button_group(group) }.flatten.join.html_safe
      end
    end

    def button_group(g)
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:button_group), data: { buttons: g.join(' ') } do
        g.map { |b| button(b) }.flatten.join.html_safe
      end
    end

    def button(b)
      return if b == 'help' && !help_enabled?
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:button_wrapper) do
        template.content_tag(
          :button,
          I18n.t(b, scope: 'simple_form_markdown_editor.buttons'),
          class: SimpleFormMarkdownEditor.dom_class(:button),
          name: '',
          role: '',
          state: '',
          type: 'button',
          value: b
        )
      end
    end

    def button_list
      options[:buttons].presence || MarkdownEditorInput.configuration.buttons
    end

    # ---------------------------------------------------------------------

    def editor
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:editor) do
        @builder.text_area(attribute_name, input_html_options).html_safe
      end
    end

    def preview
      template.content_tag(
        :div,
        I18n.t(:loading, scope: 'simple_form_markdown_editor'),
        class: SimpleFormMarkdownEditor.dom_class(:preview),
        data: { nothing_to_preview_text: I18n.t(:nothing_to_preview, scope: 'simple_form_markdown_editor') }
      )
    end

    # ---------------------------------------------------------------------

    def help
      return unless help_enabled?
      template.content_tag :div, class: SimpleFormMarkdownEditor.dom_class(:help) do
        help_sections + help_sub_sections + help_texts
      end
    end

    def help_sections
      template.content_tag :ul, class: SimpleFormMarkdownEditor.dom_class(:help, :sections) do
        i18n_help.map { |section, content| help_section(section, content) }.flatten.join.html_safe
      end
    end

    def help_section(section, content)
      return unless content[:title]
      template.content_tag :li, class: SimpleFormMarkdownEditor.dom_class(:help, :section), data: { section: section } do
        template.content_tag :a, content[:title], class: section, href: '#'
      end.html_safe
    end

    def help_sub_sections
      template.content_tag :ul, class: SimpleFormMarkdownEditor.dom_class(:help, :sub_sections) do
        i18n_help.map do |section, content|
          template.content_tag :li, class: SimpleFormMarkdownEditor.dom_class(:help, :sub_section), data: { section: section } do
            template.content_tag :ul, class: SimpleFormMarkdownEditor.dom_class(:help, :sub_section, :items) do
              content[:elements].map { |sec, con| help_sub_section_item(sec, con) }.flatten.join.html_safe
            end
          end
        end.flatten.join.html_safe
      end
    end

    def help_sub_section_item(sub_section, content)
      return unless content[:title]
      template.content_tag :li, class: SimpleFormMarkdownEditor.dom_class(:help, :sub_section, :item), data: { sub_section: sub_section } do
        template.content_tag :a, content[:title], href: '#'
      end.html_safe
    end

    def help_texts
      template.content_tag :ul, class: SimpleFormMarkdownEditor.dom_class(:help, :texts) do
        i18n_help.map do |section, content|
          content[:elements].map do |el, con|
            template.content_tag :li, class: SimpleFormMarkdownEditor.dom_class(:help, :text), data: { section: section, sub_section: el } do
              Renderer.call(con[:text], render_class: render_class, render_options: render_options, extensions: extensions)
            end
          end
        end.flatten.join.html_safe
      end
    end

    # ---------------------------------------------------------------------

    def i18n_help
      I18n.t(:help, scope: 'simple_form_markdown_editor')
    end

    def help_enabled?
      enabled_in_options = options.fetch(:help, {}).fetch(:enabled, nil)
      enabled_in_config = MarkdownEditorInput.configuration.help.fetch(:enabled, false)

      return enabled_in_config if enabled_in_options.nil?

      enabled_in_options
    end

    def help_visible?
      visible_in_options = options.fetch(:help, {}).fetch(:visible, nil)
      visible_in_config = MarkdownEditorInput.configuration.help.fetch(:visible, false)

      return visible_in_config if visible_in_options.nil?

      visible_in_options
    end
  end
end
