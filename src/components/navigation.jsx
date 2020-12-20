import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authorization from './AuthorizationPage';
import MyMap from './MapPage'
import history from './history';


class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthorized: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('log') === 'test') {
            this.setState({
                    isAuthorized: true
                },
                    () => {
                        if (this.state.isAuthorized) {
                            history.push('/map')
                        }
                    })
        }
        if (!this.state.isAuthorized) {
            history.push('/login')
        }
    }
    render() {
        return (
            <Switch>
                <Route path='/login' component={Authorization} />
                <Route path='/map' component={MyMap} />

            </Switch>
        )
    }
}
export default Navigation