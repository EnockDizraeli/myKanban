/**
 * Bundle of: vue-smooth-dnd
 * Generated: 2019-10-26
 * Version: 0.8.1
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('smooth-dnd')) :
  typeof define === 'function' && define.amd ? define(['exports', 'smooth-dnd'], factory) :
  (factory((global.VueSmoothDnd = {}),global.SmoothDnD));
}(this, (function (exports,smoothDnd) { 'use strict';

  var isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  function getTagProps (ctx, tagClasses) {
    var tag = ctx.$props.tag;
    if (tag) {
      if (typeof tag === 'string') {
        var result = { value: tag };
        if (tagClasses) {
          result.props = { class: tagClasses };
        }
        return result;
      } else if (typeof tag === 'object') {
        var result$1 = { value: tag.value || 'div', props: tag.props || {} };

        if (tagClasses) {
          if (result$1.props.class) {
            if (isArray(result$1.props.class)) {
              result$1.props.class.push(tagClasses);
            } else {
              result$1.props.class = [tagClasses, result$1.props.class];
            }
          } else {
            result$1.props.class = tagClasses;
          }
        }

        return result$1;
      }
    }
    return { value: 'div' };
  }

  function validateTagProp (tag) {
    if (tag) {
      if (typeof tag === 'string') { return true; }
      if (typeof tag === 'object') {
        if (
          typeof tag.value === 'string' ||
          typeof tag.value === 'function' ||
          typeof tag.value === 'object'
        ) {
          return true;
        }
      }
      return false;
    }
    return true;
  }

  /* eslint-disable curly */

  smoothDnd.smoothDnD.dropHandler = smoothDnd.dropHandlers.reactDropHandler().handler;
  smoothDnd.smoothDnD.wrapChild = false;

  var eventEmitterMap = {
    'drag-start': 'onDragStart',
    'drag-end': 'onDragEnd',
    'drop': 'onDrop',
    'drag-enter': 'onDragEnter',
    'drag-leave': 'onDragLeave',
    'drop-ready': 'onDropReady'
  };

  function getContainerOptions (props, context) {
    var options = Object.keys(props).reduce(function (result, key) {
      var optionName = key;
      var prop = props[optionName];

      if (prop !== undefined) {
        if (typeof prop === 'function') {
          if (eventEmitterMap[optionName]) {
            result[eventEmitterMap[optionName]] = function (params) {
              context.$emit(optionName, params);
            };
          } else {
            result[optionName] = function () {
              var params = [], len = arguments.length;
              while ( len-- ) params[ len ] = arguments[ len ];

              return (prop).apply(void 0, params);
            };
          }
        } else {
          result[optionName] = prop;
        }
      }

      return result;
    }, {});

    return options;
  }

  var mapOptions = function (context) {
    var props = Object.assign({}, context.$props, context.$listeners);
    return getContainerOptions(props, context);
  };

  var Container = {
    name: 'Container',
    mounted: function mounted () {
      this.containerElement = this.$refs.container || this.$el;
      this.container = smoothDnd.smoothDnD(this.containerElement, mapOptions(this));
    },
    updated: function updated () {
      if (
        this.$refs.container !== this.containerElement &&
        this.$el !== this.containerElement
      ) {
        if (this.container) {
          this.container.dispose();
        }
        this.containerElement = this.$refs.container || this.$el;
        this.container = smoothDnd.smoothDnD(this.containerElement, mapOptions(this));
        return;
      }

      this.container.setOptions(mapOptions(this));
    },
    destroyed: function destroyed () {
      if (this.container) {
        this.container.dispose();
      }
    },
    props: {
      behaviour: String,
      groupName: String,
      orientation: String,
      dragHandleSelector: String,
      nonDragAreaSelector: String,
      dragBeginDelay: Number,
      animationDuration: Number,
      autoScrollEnabled: { type: Boolean, default: true },
      lockAxis: String,
      dragClass: String,
      dropClass: String,
      removeOnDropOut: { type: Boolean, default: false },
      'drag-start': Function,
      'drag-end': Function,
      drop: Function,
      getChildPayload: Function,
      shouldAnimateDrop: Function,
      shouldAcceptDrop: Function,
      'drag-enter': Function,
      'drag-leave': Function,
      tag: {
        validator: validateTagProp,
        default: 'div',
      },
      getGhostParent: Function,
      'drop-ready': Function,
      dropPlaceholder: [Object, Boolean]
    },
    render: function (createElement) {
      var tagProps = getTagProps(this);
      return createElement(
        tagProps.value,
        Object.assign({}, { ref: 'container' }, tagProps.props),
        this.$slots.default
      );
    }
  };

  var wrapChild = function (createElement, ctx) {
    var tagProps = getTagProps(ctx, smoothDnd.constants.wrapperClass);
    return createElement(
      tagProps.value,
      Object.assign({}, tagProps.props),
      ctx.$slots.default
    );
  };

  var Draggable = {
    name: 'Draggable',
    props: {
      tag: {
        validator: validateTagProp,
        default: 'div'
      }
    },
    render: function (createElement) {
      return wrapChild(createElement, this);
    }
  };

  Object.keys(smoothDnd).forEach(function (key) { exports[key] = smoothDnd[key]; });
  exports.Container = Container;
  exports.Draggable = Draggable;
  
  Vue.component('Container', Container);
  Vue.component('Draggable', Draggable);

  Object.defineProperty(exports, '__esModule', { value: true });

})));
