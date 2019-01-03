export default class Plugin
  @register: ->
    klass = this
    defaults = this.defaults ? {}
    name = defaults.name or= /function ([^(]*)/.exec( klass+"" )[1] # WARNING: this corresponds to the class, and does not respect namespace!
    options = Array.prototype.slice.call(arguments)[1..]
    selector = arguments[0] ? klass.selector
    @init_plugin(klass, name)

  @init_plugin: (klass, name) ->
    return if $.fn[name] != undefined
    
    $.fn[name] = (options) ->
      args = arguments
      dataKey = "plugin_#{name}"

      if options is `undefined` or typeof options is "object"
        @each ->
          @.pluginInstances or= {}
          unless @.pluginInstances[dataKey]
            instance = new klass(@, options)
            @.pluginInstances[dataKey] = instance

      else if (typeof options is 'string') and (options[0] isnt '_') and (options isnt 'init')
        returns = undefined
        @each ->
          @.pluginInstances or= {}
          instance = @.pluginInstances[dataKey]
          returns = instance[options].apply(instance, Array::slice.call(args, 1)) if (instance instanceof klass) and (typeof instance[options] is 'function')
          @.pluginInstances[dataKey] = null if options is 'destroy'
        if (returns isnt `undefined`) then returns else @

  constructor: (@element, options) ->
    @options = $.extend {}, @constructor.defaults, options
    @$element = $(@element)
    @init()
