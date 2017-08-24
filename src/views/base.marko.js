// Compiled using marko@4.4.26 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_str = marko_helpers.s,
    marko_escapeScript = marko_helpers.xs,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><title>" +
    marko_escapeXml(data.title) +
    "</title><meta charset=\"utf-8\"><meta name=\"description\" content=\"" +
    marko_escapeXmlAttr(data.description) +
    "\"><meta name=\"application-name\" content=\"Apollo Two Render\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div id=\"root\">" +
    marko_str(data.html) +
    "</div><script async src=\"frontend/app-" +
    marko_escapeXmlAttr(data.ver) +
    ".js\"></script><script>\r\n    window.__APOLLO_STATE__ = " +
    marko_escapeScript(data.state) +
    ";\r\n  </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
