Package.describe({
  summary: " \* HashRouter *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.use('jquery', 'client');
  api.use('session', 'client');
  api.use('templating');
  api.use('webapp');

  api.add_files('common.js', ['client',"server"]);
  api.add_files('client.js', 'client');
  
  api.add_files('server.js', 'server');
  if(api.export){
    api.export(["HashRouter"],['client',"server"]);
  }
});

