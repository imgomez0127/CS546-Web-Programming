//"I pledge my honor that I have abided by the Stevens honor system" - igomez1 10428821 Ian Gomez
const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const configRoutes = require("./routes");
const session = require("express-session");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/public", static);

app.use(session({
    name:"AuthCookie",
    secret:"hKe4o.pN^-j:vI:)`4LbZXz0~Dn:Cwp8",
    resave:false,
    saveUninitialized:true}));

app.engine("handlebars", exphbs({defaultLayout : "base"}));
app.set("view engine", "handlebars");

var routeLogger = function(req,res,next){
    let requestDateTime = new Date().toUTCString();
    let method = req.method;
    let url = req.originalUrl;
    let authenticationStatus = (req.session.loginStatus) ? "(Autheticated User)":"(Non-Authenticated User)";
    console.log(`[${requestDateTime}]: ${method} ${url} ${authenticationStatus}`);
    next();
}
var routeAuthenticator = function(req,res,next){
    if(req.originalUrl == "/private"){
        if(req.session.loginStatus){
            next();
        }
        else{
            res.status(403).render("templates/Invalid_Private_Access");
        }
    }
    else{
        next();
    }
}
app.use(routeLogger);

app.use(routeAuthenticator);

configRoutes(app);


app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});
