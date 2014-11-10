Template.__define__("route", (function() {
    var view = this;
    var templateName = HashRouter.getRoute(Session.get("route"));
    if(Template[templateName]){
        return Spacebars.include(view.lookupTemplate(templateName));
    }
    else{
        return Spacebars.include(view.lookupTemplate("home"));
    }
}));

HashRouter = {};
HashRouter.go = function(hash){
    window.location.hash = hash;
}
HashRouter.routes = {};
HashRouter.add = function(options){
    if(!options){
        throw new Error("Please send json object with {'hash':}");
    }

    if(HashRouter.routes[options.route]){
        throw new Error("Route already Exists " +options.route);
    }
    else{
        HashRouter.routes[options.route] = options
    }
  // options.route;
  // options.template;
  // options.beforeFunction;
  // options.afterFunction;
}

HashRouter.getRoute = function(routeName){
    if(HashRouter.routes[routeName]){
        return HashRouter.routes[routeName].template;
    }
    else{
        console.log("Route Not found " +routeName +". Making 'home' as default route.");
        return "home";
    }
}
HashRouter.onHashChange = function(){
    var hash = window.location.hash;
    Session.set("route",hash);

    // if(app.routerFunction[hash])
    //  app.routerFunction[hash]()
    // else
    //  app.routerFunction["#home"]();
}
Session.setDefault("route","#home");
window.onhashchange = HashRouter.onHashChange;
// $(window).on('hashchange',HashRouter.onHashChange);

Meteor.startup(function(){
    HashRouter.onHashChange();
});
