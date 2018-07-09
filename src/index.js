import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ButtonOne } from "./fbutton/button.js";
import { ButtonTwo } from "./fbutton/button.js";
import "./fbutton/button.css";
import { HackClubLogo } from "./fimages/images.js";
import "./fimages/images.css";
import { Details } from "./ftextbodies/textbodies.js";
import { ActivitiesList } from "./ftextbodies/textbodies.js";
import "./fimages/images.css";

class PageContainerOne extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <HackClubLogo />
            </td>
            <td>
              <h1>Mason Hack Camp 2018</h1>
            </td>
            <td>
              <HackClubLogo />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

class PageContainerTwo extends React.Component {
  render() {
    return (
      <div>
        <Details />
        <br />
        <ActivitiesList />
      </div>
    );
  }
}

class TempPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <PageContainerOne />
        </div>
        <div>
          <h1>---</h1>
        </div>
        <div>
          <PageContainerTwo />
        </div>
        <div>
          <h1>---</h1>
        </div>
        <div>
          <ButtonTwo />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
ReactDOM.render(<TempPage />, rootElement);
