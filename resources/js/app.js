require('./vendor/jquery/dist/jquery.min');

// Workaround for jQuery to work with Webpack
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

require('./vendor/anchor-js/anchor.min');
require('./vendor/bootstrap/dist/js/bootstrap.bundle.min');
require('./vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min');
require('./vendor/chart.js/dist/Chart.min');
require('./vendor/chart.js/dist/Chart.extension');
require('./vendor/clipboard/dist/clipboard.min');
require('./argon.min');
require('./ui');