const { Router, Route } = require('dva/router');
const Home = require('../src/routes/home');

const router = function(){
    return(
        <Route path="">
            <Route path="/home" component={Home} />
        </Route>
    )
} 

module.exports = router;