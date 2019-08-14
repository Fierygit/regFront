import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Test7 from '../test7/test7'
import Test8 from '../test8/test8'
import Test9 from '../test9/test9'
import Test10 from '../test10/test10'
import Test11 from '../test11/test11'
import HomePage from '../homePage/homePage'


class Right extends React.Component {
    render() {
        const data = [{
            path: '/test7',
            component: Test7
        },{
            path: '/test8',
            component: Test8
        },{
            path: '/test9',
            component: Test9
        },{
            path: '/test10',
            component: Test10
        },{
            path: '/test11',
            component: Test11
        },{
            path: '/homePage',
            component: HomePage
        }]
        return (
            <div className="rightDiv">
                <Switch>
                    <Route exact path="/home"/>
                    {
                        data.map(e => {
                            return (
                                <Route key={e.path} path={e.path} component={e.component}></Route>
                            )
                        })
                    }
                </Switch>
            </div>
        )
    }
}

export default Right;