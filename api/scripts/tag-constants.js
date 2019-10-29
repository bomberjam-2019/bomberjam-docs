const fs = require('fs');

hexo.extend.tag.register('constants', function (args) {
    
    var constants = Object.assign(exports, {});
    
    try {
        constants = fs.readFileSync(require.resolve('bomberjam-backend/dist/constants.js'));
    }
    catch(e) {}
    
    return hexo.render.renderSync({text: '```javascript-content\n'+constants+'\n```', engine: 'markdown'});;
}, {async: false});