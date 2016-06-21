requirejs.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'angular': 'lib/angular/angular',
    'angular-route': 'lib/angular-route/angular-route'
  },
  shim: {
    "angular" : { exports : 'angular'},
    "angular-route" : { exports : 'angular-route'}
  },
  urlArgs: "bust=" + (new Date()).getTime(),  //防止读取缓存，调试用
  waitSeconds: 0    //requirejs加载js文件等待时间, 防止网络问题导致加载失败
});
requirejs(['angular'], function(){
  require([
      'app',
      'controller/contrl1',
      'controller/contrl2',
  ],
    function(app) {
      angular.bootstrap(document, ['myApp']);
  });
});
