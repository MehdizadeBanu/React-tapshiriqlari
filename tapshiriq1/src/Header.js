import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="profileHeader">
          <div className="profileImg">
            <img
              src="https://www.rekoroyun.com/resim/masa-ile-koca-ayi.jpg"
              alt="Profile"
            />
          </div>
          <div className="profileTitle">
            <h3 className="profileName">Banu Mehdizadə</h3>
            <p className="position">Full Stack Web Developer</p>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
