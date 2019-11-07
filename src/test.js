import { initializeEditor } from '@wordpress/edit-post';
import apiFetch from '@wordpress/api-fetch';
import { setting, initialEditorSetting } from './config';
import { preloadData } from './preload-data';

console.log(apiFetch);

apiFetch.use(
  apiFetch.createRootURLMiddleware("http://localhost:1234/wp-json/")
);
apiFetch.use(
  apiFetch.createPreloadingMiddleware(preloadData)
);

var timer = setTimeout(() => {
  initializeEditor('app', 'post', 28, setting, initialEditorSetting);
  clearTimeout(timer);
}, 1000);
