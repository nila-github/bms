package controllers;

import play.Logger;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class Application extends Controller {

    @Inject
    public Application() {
        Logger.info("Creating ApplicationController...");
    }

    public Result index() {
        return ok(views.html.index.render());
    }

}
