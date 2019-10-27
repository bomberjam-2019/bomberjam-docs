'use strict';

hexo.extend.tag.register('note', function(args, content){
  var className = args.shift();
  var header = '';
  var result = '';

  if (args.length){
    header += '<strong class="note-title">' + args.join(' ') + '</strong>';
  }

  result += '<blockquote class="note ' + className + '">' + header;
  result += hexo.render.renderSync({text: content, engine: 'markdown'});
  result += '</blockquote>';

  return result;
}, true);

hexo.extend.tag.register('index_block', function(args, content) {
  return `<a class=index-block href="${args[1]}"><span class=index-block__title>${args[0]}</span><span class="index-block__content">${content}</span></a>`;
}, {ends: true});