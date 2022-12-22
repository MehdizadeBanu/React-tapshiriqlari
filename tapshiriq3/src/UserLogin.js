import React, { Component } from "react";

class UserLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (!this.state.email.includes("ru")) {
      alert("Ayə yalnız .ru domenlərinə icazə verilir.");
    }
    if (this.state.password.length < 8) {
      alert("Saymağı bilirsən? Ən azı 8 simvol olmalıdı )))");
    } else {
      alert("Şükür Allaha axır ki düz yaza bildin");
    }
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor="email"><b>E-mail:</b></label>
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password"><b>Password:</b></label>
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="password"
            name="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

export default UserLogin;
