/* ================================================
        DON'T MANUALLY EDIT THIS FILE
================================================ */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * PlainOverlay
 * https://anseki.github.io/plain-overlay/
 *
 * Copyright (c) 2018 anseki
 * Licensed under the MIT license.
 */

import CSSPrefix from 'cssprefix';
import AnimEvent from 'anim-event';
import mClassList from 'm-class-list';
import TimedTransition from 'timed-transition';
/* Static ESM */ /* import CSS_TEXT from './default.scss' */ var CSS_TEXT = ".plainoverlay,.plainoverlay:not(.plainoverlay-hide) .plainoverlay-builtin-face_01{-webkit-tap-highlight-color:transparent;transform:translateZ(0);box-shadow:0 0 1px transparent}.plainoverlay{position:absolute;left:0;top:0;overflow:hidden;background-color:rgba(136,136,136,0.6);cursor:wait;z-index:9000;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:200ms;-moz-transition-duration:200ms;-o-transition-duration:200ms;transition-duration:200ms;-webkit-transition-timing-function:linear;-moz-transition-timing-function:linear;-o-transition-timing-function:linear;transition-timing-function:linear;opacity:0}.plainoverlay.plainoverlay-show{opacity:1}.plainoverlay.plainoverlay-force{-webkit-transition-property:none;-moz-transition-property:none;-o-transition-property:none;transition-property:none}.plainoverlay.plainoverlay-hide{display:none}.plainoverlay.plainoverlay-doc{position:fixed;left:-200px;top:-200px;overflow:visible;padding:200px;width:100vw;height:100vh}.plainoverlay-body{width:100%;height:100%;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}.plainoverlay.plainoverlay-doc .plainoverlay-body{width:100vw;height:100vh}.plainoverlay-builtin-face{width:90%;height:90%;max-width:320px;max-height:320px}#plainoverlay-builtin-face-defs{width:0;height:0;position:fixed;left:-100px;top:-100px}#plainoverlay-builtin-face_01 circle,#plainoverlay-builtin-face_01 path{fill:none;stroke-width:40px}#plainoverlay-builtin-face_01 circle{stroke:#fff;opacity:0.25}#plainoverlay-builtin-face_01 path{stroke-linecap:round}.plainoverlay:not(.plainoverlay-hide) .plainoverlay-builtin-face_01{-webkit-animation-name:plainoverlay-builtin-face_01-spin;-moz-animation-name:plainoverlay-builtin-face_01-spin;-ms-animation-name:plainoverlay-builtin-face_01-spin;-o-animation-name:plainoverlay-builtin-face_01-spin;animation-name:plainoverlay-builtin-face_01-spin;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;-o-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite}@-moz-keyframes plainoverlay-builtin-face_01-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes plainoverlay-builtin-face_01-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes plainoverlay-builtin-face_01-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes plainoverlay-builtin-face_01-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes plainoverlay-builtin-face_01-spin{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}";
// [FACE]
/* Static ESM */ /* import FACE_DEFS from './face.html?tag=defs' */ var FACE_DEFS = "<svg id=\"plainoverlay-builtin-face-defs\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"><defs><linearGradient id=\"plainoverlay-builtin-face_01-grad\" gradientUnits=\"userSpaceOnUse\" x1=\"160\" y1=\"20\" x2=\"300\" y2=\"160\"><stop offset=\"0\" stop-color=\"#fff\" stop-opacity=\"0\"/><stop offset=\"0.2\" stop-color=\"#fff\" stop-opacity=\"0.1\"/><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"1\"/></linearGradient><g id=\"plainoverlay-builtin-face_01\"><circle cx=\"160\" cy=\"160\" r=\"140\"/><path d=\"M160 20a140 140 0 0 1 140 140\" stroke=\"url('#plainoverlay-builtin-face_01-grad')\"/></g></defs></svg>";
/* Static ESM */ /* import FACE_01 from './face.html?tag=face_01' */ var FACE_01 = "<svg class=\"plainoverlay-builtin-face plainoverlay-builtin-face_01\" version=\"1.1\" viewBox=\"0 0 320 320\"><use xlink:href=\"#plainoverlay-builtin-face_01\"/></svg>";
// [/FACE]
mClassList.ignoreNative = true;

var APP_ID = 'plainoverlay',
    STYLE_ELEMENT_ID = APP_ID + '-style',
    STYLE_CLASS = APP_ID,
    STYLE_CLASS_DOC = APP_ID + '-doc',
    STYLE_CLASS_SHOW = APP_ID + '-show',
    STYLE_CLASS_HIDE = APP_ID + '-hide',
    STYLE_CLASS_FORCE = APP_ID + '-force',
    STYLE_CLASS_BODY = APP_ID + '-body',
    FACE_DEFS_ELEMENT_ID = APP_ID + '-builtin-face-defs',
    STATE_HIDDEN = 0,
    STATE_SHOWING = 1,
    STATE_SHOWN = 2,
    STATE_HIDING = 3,

// DURATION = 2500, // COPY: default.scss
DURATION = 200,
    // COPY: default.scss
TOLERANCE = 0.5,
    IS_TRIDENT = !!document.uniqueID,
    IS_EDGE = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style && !window.navigator.msPointerEnabled,
    IS_BLINK = !!(window.chrome && window.chrome.webstore),
    isObject = function () {
  var toString = {}.toString,
      fnToString = {}.hasOwnProperty.toString,
      objFnString = fnToString.call(Object);
  return function (obj) {
    var proto = void 0,
        constr = void 0;
    return obj && toString.call(obj) === '[object Object]' && (!(proto = Object.getPrototypeOf(obj)) || (constr = proto.hasOwnProperty('constructor') && proto.constructor) && typeof constr === 'function' && fnToString.call(constr) === objFnString);
  };
}(),
    isFinite = Number.isFinite || function (value) {
  return typeof value === 'number' && window.isFinite(value);
},


/**
 * An object that has properties of instance.
 * @typedef {Object} props
 * @property {Element} elmTarget - Target element.
 * @property {Element} elmTargetBody - Target body element.
 * @property {Element} elmOverlay - Overlay element.
 * @property {Element} elmOverlayBody - Overlay body element.
 * @property {boolean} isDoc - `true` if target is document.
 * @property {Window} window - Window that conatins target element.
 * @property {HTMLDocument} document - Document that conatins target element.
 * @property {TimedTransition} transition - TimedTransition instance.
 * @property {number} state - Current state.
 * @property {Object} options - Options.
 */

/** @type {Object.<_id: number, props>} */
insProps = {};

var insId = 0;

function forceReflow(target) {
  // Trident and Blink bug (reflow like `offsetWidth` can't update)
  setTimeout(function () {
    var parent = target.parentNode,
        next = target.nextSibling;
    // It has to be removed first for Blink.
    parent.insertBefore(parent.removeChild(target), next);
  }, 0);
}

/**
 * Set style properties while saving current properties.
 * @param {Element} element - Target element.
 * @param {Object} styleProps - New style properties.
 * @param {(Object|null)} savedStyleProps - Current style properties holder.
 * @param {Array} [propNames] - Names of target properties.
 * @returns {Element} Target element itself.
 */
function setStyle(element, styleProps, savedStyleProps, propNames) {
  var style = element.style;
  (propNames || Object.keys(styleProps)).forEach(function (prop) {
    if (styleProps[prop] != null) {
      if (savedStyleProps && savedStyleProps[prop] == null) {
        savedStyleProps[prop] = style[prop];
      }
      style[prop] = styleProps[prop];
      styleProps[prop] = null;
    }
  });
  return element;
}

/**
 * Restore saved style properties.
 * @param {Element} element - Target element.
 * @param {Object} savedStyleProps - Saved style properties.
 * @param {Array} [propNames] - Names of properties that is restored.
 * @returns {Element} Target element itself.
 */
function restoreStyle(element, savedStyleProps, propNames) {
  return setStyle(element, savedStyleProps, null, propNames);
}

/**
 * An object that simulates `DOMRect` to indicate a bounding-box.
 * @typedef {Object} BBox
 * @property {(number|null)} left - document coordinate
 * @property {(number|null)} top - document coordinate
 * @property {(number|null)} right - document coordinate
 * @property {(number|null)} bottom - document coordinate
 * @property {(number|null)} width
 * @property {(number|null)} height
 */

/**
 * Get an element's bounding-box that contains coordinates relative to the element's document or window.
 * @param {Element} element - Target element.
 * @param {Window} [window] - Whether it's relative to the element's window, or document.
 * @returns {(BBox|null)} A bounding-box or null when failed.
 */
function getBBox(element, window) {
  var rect = element.getBoundingClientRect(),
      bBox = { left: rect.left, top: rect.top,
    right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height };
  if (window) {
    bBox.left += window.pageXOffset;
    bBox.right += window.pageXOffset;
    bBox.top += window.pageYOffset;
    bBox.bottom += window.pageYOffset;
  }
  return bBox;
}

function scrollLeft(element, isDoc, window, value) {
  if (isDoc) {
    var target = window;
    if (value != null) {
      target.scrollTo(value, target.pageYOffset);
    }
    return target.pageXOffset;
  } else {
    var _target = element;
    if (value != null) {
      _target.scrollLeft = value;
    }
    return _target.scrollLeft;
  }
}

function scrollTop(element, isDoc, window, value) {
  if (isDoc) {
    var target = window;
    if (value != null) {
      target.scrollTo(target.pageXOffset, value);
    }
    return target.pageYOffset;
  } else {
    var _target2 = element;
    if (value != null) {
      _target2.scrollTop = value;
    }
    return _target2.scrollTop;
  }
}

function resizeTarget(props, width, height) {
  var elmTargetBody = props.elmTargetBody;

  var rect = elmTargetBody.getBoundingClientRect();
  if (Math.abs(rect.width - width) < TOLERANCE && Math.abs(rect.height - height) < TOLERANCE) {
    return;
  }

  var targetBodyCmpStyle = props.window.getComputedStyle(elmTargetBody, ''),
      boxSizing = targetBodyCmpStyle.boxSizing,
      includeProps = boxSizing === 'border-box' ? [] : boxSizing === 'padding-box' ? ['border'] : ['border', 'padding'],
      // content-box

  PROP_NAMES = {
    border: {
      width: ['borderLeftWidth', 'borderRightWidth'],
      height: ['borderTopWidth', 'borderBottomWidth']
    },
    padding: {
      width: ['paddingLeft', 'paddingRight'],
      height: ['paddingTop', 'paddingBottom']
    }
  },
      values = ['width', 'height'].reduce(function (values, dir) {
    includeProps.forEach(function (part) {
      PROP_NAMES[part][dir].forEach(function (propName) {
        values[dir] -= parseFloat(targetBodyCmpStyle[propName]);
      });
    });
    return values;
  }, { width: width, height: height });

  // Since the `width` and `height` might change each other, fix both.
  setStyle(elmTargetBody, {
    // The value might be negative number when size is too small.
    width: values.width > 0 ? values.width + 'px' : 0,
    height: values.height > 0 ? values.height + 'px' : 0
  }, props.savedStyleTargetBody);

  // In some browsers, getComputedStyle might return computed values that is not px instead of used values.
  var fixStyle = {};
  rect = elmTargetBody.getBoundingClientRect();
  if (Math.abs(rect.width - width) >= TOLERANCE) {
    fixStyle.width = values.width - (rect.width - width) + 'px';
  }
  if (rect.height !== height) {
    fixStyle.height = values.height - (rect.height - height) + 'px';
  }
  setStyle(elmTargetBody, fixStyle, props.savedStyleTargetBody);
}

// Trident and Edge bug, width and height are interchanged.
function getDocClientWH(props) {
  var elmTarget = props.elmTarget,
      width = elmTarget.clientWidth,
      height = elmTarget.clientHeight;
  if (IS_TRIDENT || IS_EDGE) {
    var targetBodyCmpStyle = props.window.getComputedStyle(props.elmTargetBody, ''),
        wMode = targetBodyCmpStyle.writingMode || targetBodyCmpStyle['writing-mode'],
        // Trident bug
    direction = targetBodyCmpStyle.direction;
    return wMode === 'tb-rl' || wMode === 'bt-rl' || wMode === 'tb-lr' || wMode === 'bt-lr' || IS_EDGE && (direction === 'ltr' && (wMode === 'vertical-rl' || wMode === 'vertical-lr') || direction === 'rtl' && (wMode === 'vertical-rl' || wMode === 'vertical-lr')) ? { width: height, height: width } : // interchange
    { width: width, height: height };
  } else {
    return { width: width, height: height };
  }
}

function restoreScroll(props, element) {

  function scrollElement(element, isDoc, left, top) {
    try {
      scrollLeft(element, isDoc, props.window, left);
      scrollTop(element, isDoc, props.window, top);
    } catch (error) {/* Something might have been changed, and that can be ignored. */}
  }

  if (element) {
    return props.savedElementsScroll.some(function (elementScroll) {
      if (elementScroll.element === element) {
        scrollElement(elementScroll.element, elementScroll.isDoc, elementScroll.left, elementScroll.top);
        return true;
      }
      return false;
    });
  } else {
    props.savedElementsScroll.forEach(function (elementScroll) {
      scrollElement(elementScroll.element, elementScroll.isDoc, elementScroll.left, elementScroll.top);
    });
    return true;
  }
}

function restoreAccKeys(props) {
  props.savedElementsAccKeys.forEach(function (elementAccKeys) {
    try {
      if (elementAccKeys.tabIndex === false) {
        elementAccKeys.element.removeAttribute('tabindex');
      } else if (elementAccKeys.tabIndex != null) {
        elementAccKeys.element.tabIndex = elementAccKeys.tabIndex;
      }
    } catch (error) {/* Something might have been changed, and that can be ignored. */}

    try {
      if (elementAccKeys.accessKey) {
        elementAccKeys.element.accessKey = elementAccKeys.accessKey;
      }
    } catch (error) {/* Something might have been changed, and that can be ignored. */}
  });
}

function avoidFocus(props, element) {
  if (props.isDoc && element !== element.ownerDocument.body && !(props.elmOverlay.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY) || !props.isDoc && (element === props.elmTargetBody || props.elmTargetBody.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
    if (element.blur) {
      // Trident and Edge don't support SVG#blur
      element.blur();
    } else {
      element.ownerDocument.body.focus();
    }
    return true;
  }
  return false;
}

// Selection.containsNode polyfill for Trident
function selContainsNode(selection, node, partialContainment) {
  var nodeRange = node.ownerDocument.createRange(),
      iLen = selection.rangeCount;
  nodeRange.selectNodeContents(node);
  for (var i = 0; i < iLen; i++) {
    var selRange = selection.getRangeAt(i);
    // Edge bug (Issue #7321753); getRangeAt returns empty (collapsed) range
    // NOTE: It can not recover when the selection has multiple ranges.
    if (!selRange.toString().length && selection.toString().length && iLen === 1) {
      selRange.setStart(selection.anchorNode, selection.anchorOffset);
      selRange.setEnd(selection.focusNode, selection.focusOffset);
      // Edge doesn't throw when end is upper than start.
      if (selRange.toString() !== selection.toString()) {
        selRange.setStart(selection.focusNode, selection.focusOffset);
        selRange.setEnd(selection.anchorNode, selection.anchorOffset);
        if (selRange.toString() !== selection.toString()) {
          throw new Error('Edge bug (Issue #7321753); Couldn\'t recover');
        }
      }
    }
    if (partialContainment ? selRange.compareBoundaryPoints(Range.START_TO_END, nodeRange) >= 0 && selRange.compareBoundaryPoints(Range.END_TO_START, nodeRange) <= 0 : selRange.compareBoundaryPoints(Range.START_TO_START, nodeRange) < 0 && selRange.compareBoundaryPoints(Range.END_TO_END, nodeRange) > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Indicates whether the selection is part of the node or not.
 * @param {Node} node - Target node.
 * @param {Selection} selection - The parsed selection.
 * @returns {boolean} `true` if all ranges of `selection` are part of `node`.
 */
function nodeContainsSel(node, selection) {
  var nodeRange = node.ownerDocument.createRange(),
      iLen = selection.rangeCount;
  nodeRange.selectNode(node);
  for (var i = 0; i < iLen; i++) {
    var selRange = selection.getRangeAt(i);
    if (selRange.compareBoundaryPoints(Range.START_TO_START, nodeRange) < 0 || selRange.compareBoundaryPoints(Range.END_TO_END, nodeRange) > 0) {
      return false;
    }
  }
  return true;
}

function avoidSelect(props) {
  var selection = ('getSelection' in window ? props.window : props.document).getSelection();
  if (selection.rangeCount && (props.isDoc ? !nodeContainsSel(props.elmOverlayBody, selection) : selection.containsNode && (!IS_BLINK || !selection.isCollapsed) ? // Blink bug, fails with empty string.
  selection.containsNode(props.elmTargetBody, true) : selContainsNode(selection, props.elmTargetBody, true))) {
    try {
      selection.removeAllRanges(); // Trident bug?, `Error:800a025e` comes sometime
    } catch (error) {/* ignore */}
    props.document.body.focus();
    // Trident bug? It seems that `focus()` makes selection again.
    if (selection.rangeCount > 0) {
      try {
        selection.removeAllRanges(); // Trident bug?, `Error:800a025e` comes sometime
      } catch (error) {/* ignore */}
    }
    return true;
  }
  return false;
}

function barLeft(wMode, direction) {
  var svgSpec = wMode === 'rl-tb' || wMode === 'tb-rl' || wMode === 'bt-rl' || wMode === 'rl-bt';
  return IS_TRIDENT && svgSpec || IS_EDGE && (svgSpec || direction === 'rtl' && (wMode === 'horizontal-tb' || wMode === 'vertical-rl') || direction === 'ltr' && wMode === 'vertical-rl');
}

function barTop(wMode, direction) {
  var svgSpec = wMode === 'bt-rl' || wMode === 'bt-lr' || wMode === 'lr-bt' || wMode === 'rl-bt';
  return IS_TRIDENT && svgSpec || IS_EDGE && (svgSpec || direction === 'rtl' && (wMode === 'vertical-lr' || wMode === 'vertical-rl'));
}

function disableDocBars(props) {
  var elmTarget = props.elmTarget,
      elmTargetBody = props.elmTargetBody,
      targetBodyRect = elmTargetBody.getBoundingClientRect();

  // Get size of each scrollbar.
  var clientWH = getDocClientWH(props),
      barV = -clientWH.width,
      barH = -clientWH.height; // elmTarget.clientWidth/clientHeight
  setStyle(elmTarget, { overflow: 'hidden' }, props.savedStyleTarget);
  clientWH = getDocClientWH(props);
  barV += clientWH.width;
  barH += clientWH.height;

  if (barV || barH) {
    var targetBodyCmpStyle = props.window.getComputedStyle(elmTargetBody, '');
    var propV = void 0,
        propH = void 0;
    // There is no way to get absolute position of document.
    // We need distance between the document and its window, or a method like `element.screenX`
    // that gets absolute position of an element.
    // For the moment, Trident and Edge make a scrollbar at the left/top side when RTL document
    // or CJK vertical document is rendered.
    if (IS_TRIDENT || IS_EDGE) {
      var wMode = targetBodyCmpStyle.writingMode || targetBodyCmpStyle['writing-mode'],
          // Trident bug
      direction = targetBodyCmpStyle.direction;
      if (barV) {
        propV = barLeft(wMode, direction) ? 'marginLeft' : 'marginRight';
      }
      if (barH) {
        propH = barTop(wMode, direction) ? 'marginTop' : 'marginBottom';
      }
    } else {
      if (barV) {
        propV = 'marginRight';
      }
      if (barH) {
        propH = 'marginBottom';
      }
    }

    var addStyle = {};
    if (barV) {
      addStyle[propV] = parseFloat(targetBodyCmpStyle[propV]) + barV + 'px';
    }
    if (barH) {
      addStyle[propH] = parseFloat(targetBodyCmpStyle[propH]) + barH + 'px';
    }
    setStyle(elmTargetBody, addStyle, props.savedStyleTargetBody);
    resizeTarget(props, targetBodyRect.width, targetBodyRect.height);

    // `overflow: 'hidden'` might change scroll.
    restoreScroll(props, elmTarget);
    return true;
  } else {
    restoreStyle(elmTarget, props.savedStyleTarget, ['overflow']);
    return false;
  }
}

function _position(props, targetBodyBBox) {
  var elmTargetBody = props.elmTargetBody,
      targetBodyCmpStyle = props.window.getComputedStyle(elmTargetBody, ''),
      elmOverlay = props.elmOverlay,
      overlayCmpStyle = props.window.getComputedStyle(elmOverlay, ''),
      overlayBBox = getBBox(elmOverlay, props.window),
      borders = ['Top', 'Right', 'Bottom', 'Left'].reduce(function (borders, prop) {
    borders[prop.toLowerCase()] = parseFloat(targetBodyCmpStyle['border' + prop + 'Width']);
    return borders;
  }, {}),


  // Get distance between document and origin of `elmOverlay`.
  offset = { left: overlayBBox.left - parseFloat(overlayCmpStyle.left),
    top: overlayBBox.top - parseFloat(overlayCmpStyle.top) },
      style = {
    left: targetBodyBBox.left - offset.left + borders.left + 'px',
    top: targetBodyBBox.top - offset.top + borders.top + 'px',
    width: targetBodyBBox.width - borders.left - borders.right + 'px',
    height: targetBodyBBox.height - borders.top - borders.bottom + 'px'
  },
      reValue = /^([\d\.]+)(px|%)$/;

  // border-radius
  [{ prop: 'TopLeft', hBorder: 'left', vBorder: 'top' }, { prop: 'TopRight', hBorder: 'right', vBorder: 'top' }, { prop: 'BottomRight', hBorder: 'right', vBorder: 'bottom' }, { prop: 'BottomLeft', hBorder: 'left', vBorder: 'bottom' }].forEach(function (corner) {
    var prop = CSSPrefix.getName('border' + corner.prop + 'Radius'),
        values = targetBodyCmpStyle[prop].split(' ');
    var h = values[0],
        v = values[1] || values[0],
        matches = reValue.exec(h);
    h = !matches ? 0 : matches[2] === 'px' ? +matches[1] : matches[1] * targetBodyBBox.width / 100;
    matches = reValue.exec(v);
    v = !matches ? 0 : matches[2] === 'px' ? +matches[1] : matches[1] * targetBodyBBox.height / 100;

    h -= borders[corner.hBorder];
    v -= borders[corner.vBorder];
    if (h > 0 && v > 0) {
      style[prop] = h + 'px ' + v + 'px';
    }
  });

  setStyle(elmOverlay, style);
  props.targetBodyBBox = targetBodyBBox;
}

function getTargetElements(props) {
  var elmTargetBody = props.elmTargetBody,
      elmOverlay = props.elmOverlay,
      targetElements = [props.elmTarget];
  if (props.isDoc) {
    targetElements.push(elmTargetBody);
    Array.prototype.slice.call(elmTargetBody.childNodes).forEach(function (childNode) {
      if (childNode.nodeType === Node.ELEMENT_NODE && childNode !== elmOverlay && !mClassList(childNode).contains(STYLE_CLASS) && childNode.id !== FACE_DEFS_ELEMENT_ID) {
        targetElements.push(childNode);
        Array.prototype.push.apply(targetElements, childNode.querySelectorAll('*'));
      }
    });
  } else {
    Array.prototype.push.apply(targetElements, elmTargetBody.querySelectorAll('*'));
  }
  return targetElements;
}

function finishShowing(props) {
  // blur
  props.filterElements = null;
  if (props.options.blur !== false) {
    var propName = CSSPrefix.getName('filter'),
        propValue = CSSPrefix.getValue('filter', 'blur(' + props.options.blur + 'px)');
    if (propValue) {
      // undefined if no propName
      // Array of {element: element, savedStyle: {}}
      var filterElements = props.isDoc ? Array.prototype.slice.call(props.elmTargetBody.childNodes).filter(function (childNode) {
        return childNode.nodeType === Node.ELEMENT_NODE && childNode !== props.elmOverlay && !mClassList(childNode).contains(STYLE_CLASS) && childNode.id !== FACE_DEFS_ELEMENT_ID;
      }).map(function (element) {
        return { element: element, savedStyle: {} };
      }) : [{ element: props.elmTargetBody, savedStyle: {} }];

      filterElements.forEach(function (filterElement) {
        var style = {}; // new object for each element.
        style[propName] = propValue;
        setStyle(filterElement.element, style, filterElement.savedStyle);
      });
      props.filterElements = filterElements;
    }
  }

  props.state = STATE_SHOWN;
  if (props.options.onShow) {
    props.options.onShow.call(props.ins);
  }
}

function finishHiding(props
/* [DISABLE-SYNC/]
, sync
[DISABLE-SYNC/] */
) {
  // sync-mode (`sync` is `true`): Skip restoring active element and finish all immediately.
  /* [DISABLE-SYNC/]
  [DISABLE-SYNC/] */
  mClassList(props.elmOverlay).add(STYLE_CLASS_HIDE);

  restoreStyle(props.elmTarget, props.savedStyleTarget);
  restoreStyle(props.elmTargetBody, props.savedStyleTargetBody);
  props.savedStyleTarget = {};
  props.savedStyleTargetBody = {};

  restoreAccKeys(props);
  props.savedElementsAccKeys = [];

  if (
  /* [DISABLE-SYNC/]
  !sync &&
  [DISABLE-SYNC/] */
  props.isDoc && props.activeElement) {
    // props.state must be STATE_HIDDEN for avoiding focus.
    var stateSave = props.state;
    props.state = STATE_HIDDEN;
    // the event is fired after function exited in some browsers (e.g. Trident).
    props.elmTargetBody.removeEventListener('focus', props.focusListener, true);
    props.activeElement.focus();
    // Don't change props.state for calling `hide(force)` before `restoreAndFinish` (async-mode)
    props.state = stateSave;
  }
  props.activeElement = null;

  // Since `focus()` might scroll, do this after `focus()` and reflow.
  function restoreAndFinish() {
    props.timerRestoreAndFinish = null;
    props.state = STATE_HIDDEN;
    props.elmTargetBody.addEventListener('focus', props.focusListener, true);
    restoreScroll(props);
    props.savedElementsScroll = null;

    if (props.options.onHide) {
      props.options.onHide.call(props.ins);
    }
  }

  if (props.timerRestoreAndFinish) {
    clearTimeout(props.timerRestoreAndFinish);
    props.timerRestoreAndFinish = null;
  }
  /* [DISABLE-SYNC/]
  if (sync) {
    restoreAndFinish();
  } else {
  [DISABLE-SYNC/] */ // eslint-disable-next-line indent
  props.timerRestoreAndFinish = setTimeout(restoreAndFinish, 0);
  /* [DISABLE-SYNC/]
  }
  [DISABLE-SYNC/] */
}

/**
 * @param {props} props - `props` of instance.
 * @param {boolean} [force] - Skip effect.
 * @returns {void}
 */
function _show(props, force) {

  function getScroll(elements, fromDoc) {

    function elementCanScroll(element, isDoc) {
      var cmpStyle = props.window.getComputedStyle(element, ''),
          tagName = element.nodeName.toLowerCase();
      return cmpStyle.overflow === 'scroll' || cmpStyle.overflow === 'auto' || cmpStyle.overflowX === 'scroll' || cmpStyle.overflowX === 'auto' || cmpStyle.overflowY === 'scroll' || cmpStyle.overflowY === 'auto' ||
      // document with `visible` might make scrollbars.
      isDoc && (cmpStyle.overflow === 'visible' || cmpStyle.overflowX === 'visible' || cmpStyle.overflowY === 'visible') ||
      // `overflow` of these differs depending on browser.
      !isDoc && (tagName === 'textarea' || tagName === 'select');
    }

    var elementsScroll = [];
    elements.forEach(function (element, i) {
      var isDoc = fromDoc && i === 0;
      if (elementCanScroll(element, isDoc)) {
        elementsScroll.push({
          element: element,
          isDoc: isDoc,
          left: scrollLeft(element, isDoc, props.window),
          top: scrollTop(element, isDoc, props.window)
        });
      }
    });
    return elementsScroll;
  }

  function disableAccKeys(elements, fromDoc) {
    var savedElementsAccKeys = [];
    elements.forEach(function (element, i) {
      if (fromDoc && i === 0) {
        return;
      }

      var elementAccKeys = {},
          tabIndex = element.tabIndex;
      // In Trident and Edge, `tabIndex` of all elements are `0` or something even if the element is not focusable.
      if (tabIndex !== -1) {
        elementAccKeys.element = element;
        elementAccKeys.tabIndex = element.hasAttribute('tabindex') ? tabIndex : false;
        element.tabIndex = -1;
      }

      var accessKey = element.accessKey;
      if (accessKey) {
        elementAccKeys.element = element;
        elementAccKeys.accessKey = accessKey;
        element.accessKey = '';
      }

      if (elementAccKeys.element) {
        savedElementsAccKeys.push(elementAccKeys);
      }
    });
    return savedElementsAccKeys;
  }

  if (props.state === STATE_SHOWN || props.state === STATE_SHOWING && !force || props.state !== STATE_SHOWING && props.options.onBeforeShow && props.options.onBeforeShow.call(props.ins) === false) {
    return;
  }

  if (props.state === STATE_HIDDEN) {
    var elmOverlay = props.elmOverlay,
        elmOverlayClassList = mClassList(elmOverlay);
    props.document.body.appendChild(elmOverlay); // Move to last (for same z-index)
    var targetElements = getTargetElements(props);

    elmOverlayClassList.remove(STYLE_CLASS_HIDE); // Before `getBoundingClientRect` (`position`).
    if (!props.isDoc) {
      var elmTargetBody = props.elmTargetBody;
      if (props.window.getComputedStyle(elmTargetBody, '').display === 'inline') {
        setStyle(elmTargetBody, { display: 'inline-block' }, props.savedStyleTargetBody);
      }
      _position(props, getBBox(elmTargetBody, props.window));
    }

    props.savedElementsScroll = getScroll(targetElements, props.isDoc);
    props.disabledDocBars = false;
    // savedElementsScroll is empty when document is disconnected.
    if (props.isDoc && props.savedElementsScroll.length && props.savedElementsScroll[0].isDoc) {
      props.disabledDocBars = disableDocBars(props);
    }
    props.savedElementsAccKeys = disableAccKeys(targetElements, props.isDoc);
    props.activeElement = props.document.activeElement;
    if (props.activeElement) {
      avoidFocus(props, props.activeElement);
    }
    avoidSelect(props);
    elmOverlay.offsetWidth; /* force reflow */ // eslint-disable-line no-unused-expressions

    if (props.options.onPosition) {
      props.options.onPosition.call(props.ins);
    }
  }

  props.transition.on(force);
  props.state = STATE_SHOWING;
  if (force) {
    finishShowing(props);
  }
}

/**
 * @param {props} props - `props` of instance.
 * @param {boolean} [force] - Skip effect.
 * @returns {void}
 */
function _hide(props, force
/* [DISABLE-SYNC/]
, sync
[DISABLE-SYNC/] */
) {
  // sync-mode (both `force` and `sync` are `true`)
  /* [DISABLE-SYNC/]
  [DISABLE-SYNC/] */
  if (props.state === STATE_HIDDEN || props.state === STATE_HIDING && !force || props.state !== STATE_HIDING && props.options.onBeforeHide && props.options.onBeforeHide.call(props.ins) === false) {
    return;
  }

  // blur
  if (props.filterElements) {
    props.filterElements.forEach(function (filterElement) {
      restoreStyle(filterElement.element, filterElement.savedStyle);
    });
    props.filterElements = null;
  }

  // In Gecko, hidden element can be activeElement.
  var element = props.document.activeElement;
  if (element && element !== element.ownerDocument.body && props.elmOverlay.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    if (element.blur) {
      // Trident and Edge don't support SVG#blur
      element.blur();
    } else {
      element.ownerDocument.body.focus();
    }
  }

  props.transition.off(force);
  props.state = STATE_HIDING;
  if (force) {
    finishHiding(props
    /* [DISABLE-SYNC/]
    , sync
    [DISABLE-SYNC/] */
    );
  }
}

/**
 * @param {props} props - `props` of instance.
 * @param {Object} newOptions - New options.
 * @returns {void}
 */
function _setOptions(props, newOptions) {
  var options = props.options;

  // face
  if (newOptions.hasOwnProperty('face') && (newOptions.face == null ? void 0 : newOptions.face) !== options.face) {
    var elmOverlayBody = props.elmOverlayBody;
    // Clear
    while (elmOverlayBody.firstChild) {
      elmOverlayBody.removeChild(elmOverlayBody.firstChild);
    }
    if (newOptions.face === false) {
      // No face
      options.face = false;
    } else if (newOptions.face && newOptions.face.nodeType === Node.ELEMENT_NODE) {
      // Specific face
      options.face = newOptions.face;
      elmOverlayBody.appendChild(newOptions.face);
    } else if (newOptions.face == null) {
      // Builtin face
      // [FACE]
      var elmDocument = props.document;
      if (!elmDocument.getElementById(FACE_DEFS_ELEMENT_ID)) {
        // Add svg defs
        var defsSvg = new props.window.DOMParser().parseFromString(FACE_DEFS, 'image/svg+xml');
        elmDocument.body.appendChild(defsSvg.documentElement);
      }
      // [/FACE]
      options.face = void 0;
      elmOverlayBody.innerHTML = FACE_01; // [FACE/]
    }
  }

  // duration
  if (isFinite(newOptions.duration) && newOptions.duration !== options.duration) {
    options.duration = newOptions.duration;
    props.elmOverlay.style[CSSPrefix.getName('transitionDuration')] = newOptions.duration === DURATION ? '' : newOptions.duration + 'ms';
    props.transition.duration = newOptions.duration + 'ms';
  }

  // blur
  if (isFinite(newOptions.blur) || newOptions.blur === false) {
    options.blur = newOptions.blur;
  }

  // style
  if (isObject(newOptions.style)) {
    setStyle(props.elmOverlay, newOptions.style);
  }

  // Event listeners
  ['onShow', 'onHide', 'onBeforeShow', 'onBeforeHide', 'onPosition'].forEach(function (option) {
    if (typeof newOptions[option] === 'function') {
      options[option] = newOptions[option];
    } else if (newOptions.hasOwnProperty(option) && newOptions[option] == null) {
      options[option] = void 0;
    }
  });
}

function scroll(props, target, dirLeft, value) {
  var isDoc = void 0,
      curValue = void 0;

  if (target) {
    var targetElements = getTargetElements(props);
    if (targetElements.indexOf(target) === -1) {
      return curValue;
    } // return undefined
    isDoc = target.nodeName.toLowerCase() === 'html';
  } else {
    target = props.elmTarget;
    isDoc = props.isDoc;
  }

  var elementScroll = value != null && props.savedElementsScroll && (props.savedElementsScroll.find ? props.savedElementsScroll.find(function (elementScroll) {
    return elementScroll.element === target;
  }) : function (elementsScroll) {
    var found = void 0;
    elementsScroll.some(function (elementScroll) {
      if (elementScroll.element === target) {
        found = elementScroll;
        return true;
      }
      return false;
    });
    return found;
  }(props.savedElementsScroll));

  curValue = (dirLeft ? scrollLeft : scrollTop)(target, isDoc, props.window, value);
  if (elementScroll) {
    elementScroll[dirLeft ? 'left' : 'top'] = curValue;
  }
  return curValue;
}

var PlainOverlay = function () {
  /**
   * Create a `PlainOverlay` instance.
   * @param {Element} [target] - Target element.
   * @param {Object} [options] - Options.
   */
  function PlainOverlay(target, options) {
    _classCallCheck(this, PlainOverlay);

    /**
     * @param {Object} [target] - Element or something that is checked.
     * @returns {(Element|null)} Valid element or null.
     */
    function getTarget(target) {
      var validElement = void 0;
      if (!target) {
        validElement = document.documentElement; // documentElement of current document
      } else if (target.nodeType) {
        if (target.nodeType === Node.DOCUMENT_NODE) {
          validElement = target.documentElement; // documentElement of target document
        } else if (target.nodeType === Node.ELEMENT_NODE) {
          var nodeName = target.nodeName.toLowerCase();
          validElement = nodeName === 'body' ? target.ownerDocument.documentElement : // documentElement of target body
          nodeName === 'iframe' || nodeName === 'frame' ? target.contentDocument.documentElement : // documentElement of target frame
          target;
        }
        if (!validElement) {
          throw new Error('This element is not accepted.');
        }
      } else if (target === target.window) {
        validElement = target.document.documentElement; // documentElement of target window
      }
      return validElement;
    }

    var props = {
      ins: this,
      options: { // Initial options (not default)
        face: false, // Initial state.
        duration: DURATION, // Initial state.
        blur: false // Initial state.
      },
      state: STATE_HIDDEN,
      savedStyleTarget: {},
      savedStyleTargetBody: {},
      blockingDisabled: false
    };

    Object.defineProperty(this, '_id', { value: ++insId });
    props._id = this._id;
    insProps[this._id] = props;

    if (arguments.length === 1) {
      if (!(props.elmTarget = getTarget(target))) {
        if (!isObject(target)) {
          throw new Error('Invalid argument.');
        }
        props.elmTarget = document.documentElement; // documentElement of current document
        options = target;
      }
    } else if (!(props.elmTarget = getTarget(target))) {
      throw new Error('This target is not accepted.');
    }
    if (!options) {
      options = {};
    } else if (!isObject(options)) {
      throw new Error('Invalid options.');
    }

    props.isDoc = props.elmTarget.nodeName.toLowerCase() === 'html';
    var elmDocument = props.document = props.elmTarget.ownerDocument;
    props.window = elmDocument.defaultView;
    var elmTargetBody = props.elmTargetBody = props.isDoc ? elmDocument.body : props.elmTarget;

    // Setup window
    if (!elmDocument.getElementById(STYLE_ELEMENT_ID)) {
      var head = elmDocument.getElementsByTagName('head')[0] || elmDocument.documentElement,
          sheet = head.insertBefore(elmDocument.createElement('style'), head.firstChild);
      sheet.type = 'text/css';
      sheet.id = STYLE_ELEMENT_ID;
      sheet.textContent = CSS_TEXT;
      if (IS_TRIDENT || IS_EDGE) {
        forceReflow(sheet);
      } // Trident bug
    }

    // elmOverlay
    var elmOverlay = props.elmOverlay = elmDocument.createElement('div'),
        elmOverlayClassList = mClassList(elmOverlay);
    elmOverlayClassList.add(STYLE_CLASS, STYLE_CLASS_HIDE);
    if (props.isDoc) {
      elmOverlayClassList.add(STYLE_CLASS_DOC);
    }

    // TimedTransition
    props.transition = new TimedTransition(elmOverlay, {
      procToOn: function procToOn(force) {
        var elmOverlayClassList = mClassList(elmOverlay);
        elmOverlayClassList.toggle(STYLE_CLASS_FORCE, !!force);
        elmOverlayClassList.add(STYLE_CLASS_SHOW);
      },
      procToOff: function procToOff(force) {
        var elmOverlayClassList = mClassList(elmOverlay);
        elmOverlayClassList.toggle(STYLE_CLASS_FORCE, !!force);
        elmOverlayClassList.remove(STYLE_CLASS_SHOW);
      },
      // for setting before element online
      property: 'opacity',
      duration: DURATION + 'ms'
    });
    elmOverlay.addEventListener('timedTransitionEnd', function (event) {
      if (event.target === elmOverlay && event.propertyName === 'opacity') {
        if (props.state === STATE_SHOWING) {
          finishShowing(props);
        } else if (props.state === STATE_HIDING) {
          finishHiding(props);
        }
      }
    }, true);

    (props.isDoc ? props.window : elmTargetBody).addEventListener('scroll', function (event) {
      var target = event.target;
      if (props.state !== STATE_HIDDEN && !props.blockingDisabled && restoreScroll(props, props.isDoc && (target === props.window || target === props.document || target === props.elmTargetBody) ? props.elmTarget : target)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    // props.state can't control the listener
    // because the event is fired after flow function exited in some browsers (e.g. Trident).
    props.focusListener = function (event) {
      if (props.state !== STATE_HIDDEN && !props.blockingDisabled && avoidFocus(props, event.target)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    elmTargetBody.addEventListener('focus', props.focusListener, true);

    (function (listener) {
      // simulation "text-select" event
      ['keyup', 'mouseup'].forEach(function (type) {
        // To listen to keydown in the target and keyup in outside, it is window, not `elmTargetBody`.
        props.window.addEventListener(type, listener, true);
      });
    })(function (event) {
      if (props.state !== STATE_HIDDEN && !props.blockingDisabled && avoidSelect(props)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    });

    // Gecko bug, multiple calling (parallel) by `requestAnimationFrame`.
    props.resizing = false;
    props.window.addEventListener('resize', AnimEvent.add(function () {
      if (props.resizing) {
        return;
      }
      props.resizing = true;
      if (props.state !== STATE_HIDDEN) {
        if (props.isDoc) {
          if (props.savedElementsScroll.length && props.savedElementsScroll[0].isDoc) {
            if (props.disabledDocBars) {
              // Restore DocBars
              restoreStyle(props.elmTarget, props.savedStyleTarget, ['overflow']);
              restoreStyle(elmTargetBody, props.savedStyleTargetBody, ['marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'width', 'height']);
            }
            props.disabledDocBars = disableDocBars(props);
          }
        } else {
          var bBox = getBBox(elmTargetBody, props.window),
              lastBBox = props.targetBodyBBox;
          if (bBox.left !== lastBBox.left || bBox.top !== lastBBox.top || bBox.width !== lastBBox.width || bBox.height !== lastBBox.height) {
            _position(props, bBox);
          }
        }
        if (props.options.onPosition) {
          props.options.onPosition.call(props.ins);
        }
      }
      props.resizing = false;
    }), true);

    // Avoid scroll on touch device
    elmOverlay.addEventListener('touchmove', function (event) {
      if (props.state !== STATE_HIDDEN) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    // elmOverlayBody
    (props.elmOverlayBody = elmOverlay.appendChild(elmDocument.createElement('div'))).className = STYLE_CLASS_BODY;

    elmDocument.body.appendChild(elmOverlay);

    // Default options
    if (!options.hasOwnProperty('face')) {
      options.face = null;
    }

    _setOptions(props, options);
  }

  /**
   * @param {Object} options - New options.
   * @returns {PlainOverlay} Current instance itself.
   */


  _createClass(PlainOverlay, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (isObject(options)) {
        _setOptions(insProps[this._id], options);
      }
      return this;
    }

    /**
     * Show the overlay.
     * @param {boolean} [force] - Show it immediately without effect.
     * @param {Object} [options] - New options.
     * @returns {PlainOverlay} Current instance itself.
     */

  }, {
    key: 'show',
    value: function show(force, options) {
      if (arguments.length < 2 && typeof force !== 'boolean') {
        options = force;
        force = false;
      }

      this.setOptions(options);
      _show(insProps[this._id], force);
      return this;
    }

    /**
     * Hide the overlay.
     * @param {boolean} [force] - Hide it immediately without effect.
     * @returns {PlainOverlay} Current instance itself.
     */

  }, {
    key: 'hide',
    value: function hide(force
    /* [DISABLE-SYNC/]
    , sync
    [DISABLE-SYNC/] */
    ) {
      // sync-mode (both `force` and `sync` are `true`)
      _hide(insProps[this._id], force
      /* [DISABLE-SYNC/]
      , sync
      [DISABLE-SYNC/] */
      );
      return this;
    }
  }, {
    key: 'scrollLeft',
    value: function scrollLeft(value, target) {
      return scroll(insProps[this._id], target, true, value);
    }
  }, {
    key: 'scrollTop',
    value: function scrollTop(value, target) {
      return scroll(insProps[this._id], target, false, value);
    }
  }, {
    key: 'position',
    value: function position() {
      var props = insProps[this._id];
      if (props.state !== STATE_HIDDEN) {
        if (!props.isDoc) {
          _position(props, getBBox(props.elmTargetBody, props.window));
        }
        if (props.options.onPosition) {
          props.options.onPosition.call(props.ins);
        }
      }
      return this;
    }
  }, {
    key: 'state',
    get: function get() {
      return insProps[this._id].state;
    }
  }, {
    key: 'style',
    get: function get() {
      return insProps[this._id].elmOverlay.style;
    }
  }, {
    key: 'blockingDisabled',
    get: function get() {
      return insProps[this._id].blockingDisabled;
    },
    set: function set(value) {
      if (typeof value === 'boolean') {
        insProps[this._id].blockingDisabled = value;
      }
    }
  }, {
    key: 'face',
    get: function get() {
      return insProps[this._id].options.face;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { face: value });
    }
  }, {
    key: 'duration',
    get: function get() {
      return insProps[this._id].options.duration;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { duration: value });
    }
  }, {
    key: 'blur',
    get: function get() {
      return insProps[this._id].options.blur;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { blur: value });
    }
  }, {
    key: 'onShow',
    get: function get() {
      return insProps[this._id].options.onShow;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { onShow: value });
    }
  }, {
    key: 'onHide',
    get: function get() {
      return insProps[this._id].options.onHide;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { onHide: value });
    }
  }, {
    key: 'onBeforeShow',
    get: function get() {
      return insProps[this._id].options.onBeforeShow;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { onBeforeShow: value });
    }
  }, {
    key: 'onBeforeHide',
    get: function get() {
      return insProps[this._id].options.onBeforeHide;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { onBeforeHide: value });
    }
  }, {
    key: 'onPosition',
    get: function get() {
      return insProps[this._id].options.onPosition;
    },
    set: function set(value) {
      _setOptions(insProps[this._id], { onPosition: value });
    }
  }], [{
    key: 'show',
    value: function show(target, options) {
      return new PlainOverlay(target, options).show();
    }
  }, {
    key: 'STATE_HIDDEN',
    get: function get() {
      return STATE_HIDDEN;
    }
  }, {
    key: 'STATE_SHOWING',
    get: function get() {
      return STATE_SHOWING;
    }
  }, {
    key: 'STATE_SHOWN',
    get: function get() {
      return STATE_SHOWN;
    }
  }, {
    key: 'STATE_HIDING',
    get: function get() {
      return STATE_HIDING;
    }
  }]);

  return PlainOverlay;
}();

/* [FACE/]
PlainOverlay.limit = true;
[FACE/] */

export default PlainOverlay;