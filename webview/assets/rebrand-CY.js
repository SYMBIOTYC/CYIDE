(function () {
  function swap(text) {
    return text.indexOf("Codex") === -1 ? text : text.replace(/\bCodex\b/g, "CY");
  }
  var VISIBLE_ATTRS = ["title", "aria-label", "placeholder", "alt", "aria-placeholder"];
  function rebrandNode(node) {
    if (node.nodeType === 3) {
      if (node.nodeValue && node.nodeValue.indexOf("Codex") !== -1) {
        node.nodeValue = swap(node.nodeValue);
      }
      return;
    }
    if (node.nodeType === 1) {
      for (var i = 0; i < VISIBLE_ATTRS.length; i++) {
        var attr = VISIBLE_ATTRS[i];
        if (node.hasAttribute && node.hasAttribute(attr)) {
          var v = node.getAttribute(attr);
          if (v && v.indexOf("Codex") !== -1) node.setAttribute(attr, swap(v));
        }
      }
      if (node.shadowRoot) rebrandNode(node.shadowRoot);
    }
  }
  function apply() {
    if (!document.body) return;
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      null
    );
    var n;
    while ((n = walker.nextNode())) rebrandNode(n);
    if (document.title && document.title.indexOf("Codex") !== -1) {
      document.title = swap(document.title);
    }
  }
  apply();
  document.addEventListener("DOMContentLoaded", apply);
  if (window.MutationObserver) {
    var obs = new MutationObserver(function () { apply(); });
    obs.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: VISIBLE_ATTRS
    });
    var titleEl = document.querySelector("title");
    if (titleEl) {
      new MutationObserver(function () {
        if (document.title && document.title.indexOf("Codex") !== -1) {
          document.title = swap(document.title);
        }
      }).observe(titleEl, { childList: true, subtree: true });
    }
  }
  setTimeout(apply, 500);
  setTimeout(apply, 1500);
})();
