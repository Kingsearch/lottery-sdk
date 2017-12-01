import { Router, Route } from 'dva/router';
import Home from '../src/routes/home';

const router = 
                <Route path="">
                    <Route path="/home" component={Home} />
                </Route>

export default router;