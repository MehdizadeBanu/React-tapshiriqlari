import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="profileMain">
        <div className="mainTitle">
          <h3>Personal information</h3>
        </div>
        <div className="experienceList">
          <ul>
            <li>
              <b>Ad, soyad:</b> Banu Mehdizadə
            </li>
            <li>
              <b>Doğum tarixi və yeri:</b> 01.11.2000/ Oğuz rayonu Xaçmaz kəndi
            </li>
            <li>
              <b>Təhsilim:</b> Azərbaycan Dövlət Neft və Sənaye Universiteti-
              Kompüter Mühəndisliyi, İT Brains Academy- İT Helpdesk
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
