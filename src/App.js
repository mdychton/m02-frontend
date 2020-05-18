import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
    state = { user: { firstName: '', lastName: '' } };

    componentDidMount() {
        Axios.get('/.auth/me', { withCredentials: true }).then((response) => {
            console.log(response);
            this.setState({ user: { firstName: response.data[0].user_id } });
        });
    }

    render() {
        const { firstName, lastName } = this.state.user;

        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>{`Hello ${firstName} ${lastName}!`}</p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
