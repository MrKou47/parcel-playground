import { initializeEditor } from '@wordpress/edit-post';
import apiFetch from '@wordpress/api-fetch';
import { setting, initialEditorSetting } from './config';
import { preloadData } from './preload-data';

import '@wordpress/edit-post/build-style/style.css';
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
import "@wordpress/nux/build-style/style.css";
import "@wordpress/block-directory/build-style/style.css";
import "@wordpress/editor/build-style/style.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/edit-post/build-style/style.css";
import "@wordpress/format-library/build-style/style.css";

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
