import React from 'react';


class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuelog: '',
      valuepass: '',
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    
    if (this.state.valuelog === 'test' && this.state.valuepass === 'test') {
      alert('Пароль верный');
      localStorage.setItem('log', this.state.valuelog)
      localStorage.setItem('pass', this.state.valuepass);
      
    }
    else { alert('Пароль неверный')
  event.preventDefault();
  };
    
  }

  handleChange(event) {
    if (event.target.id === 'login') {
      this.setState({ valuelog: event.target.value });
    } else {
      this.setState({ valuepass: event.target.value })
    }

  }

  render() {

    return (
      <div className='dashboard-login'>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className="group"></div>
          <input type="text" placeholder='USERNAME' id='login' valuelog={this.state.valuelog} onChange={this.handleChange} className='username' />
          <input type="text" placeholder='PASSWORD' id='pass' valuepass={this.state.valuepass} onChange={this.handleChange} className='password' />
          <button className='login_btn'>LOGIN</button>
        </form>
      </div>
    )
  }
}
export default Authorization