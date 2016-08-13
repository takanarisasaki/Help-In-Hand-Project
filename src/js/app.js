var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var $ = require('jquery');
var Infinite = require('react-infinite');

var App = require('./components/App');
var Homepage = require('./components/Homepage');

var routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Homepage} />

        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));