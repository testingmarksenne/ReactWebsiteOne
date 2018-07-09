import React from "react";

export class Details extends React.Component {
  render() {
    return (
      <div>
        <p>
          This is the second year of Mason Hack Camp. Our first camp, Mason Hack
          Camp 2017, was put on during Mason Hack Club's first year as a club at
          Mason High School. Many leaders have come and gone, and we are
          continuoslly striving for perfection.
        </p>
      </div>
    );
  }
}

export class ActivitiesList extends React.Component {
  render() {
    return (
      <div>
        <p>
          <b>Activities:</b>
        </p>
        <ul>
          <li>Mason Hack Camp</li>
          <li>Library Outreach</li>
          <li>CincyHacks</li>
        </ul>
      </div>
    );
  }
}
