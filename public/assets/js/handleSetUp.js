'use strict';

const htmlSetter = (htmlId, htmlClass, arr) => {
  let script = $(htmlId).html();
  let template = Handlebars.compile(script);
  let compiledHTML = template(arr);
  $(htmlClass).html(compiledHTML);
};
