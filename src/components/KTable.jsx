import React, { Component } from "react";

export default class KTable extends Component {
  render() {
    let datarows =
      this.props.rows.length > 0 &&
      this.props.rows.map((item, i) => {
        let data =
          this.props.rows.length > 0 &&
          this.props.rows[i].map((item, i) => {
            return <td className="KData">{item}</td>;
          }, this);
        return (
          <>
            <tr>{data}</tr>
          </>
        );
      }, this);

    let head =
      this.props.headers.length > 0 &&
      this.props.headers.map((item, i) => {
        return <th>{item}</th>;
      }, this);

    return (
      <div className="KContainer">
        <table className="KTable">
          <thead>
            <tr className="KHeading">{head}</tr>
          </thead>
          <tbody>{datarows}</tbody>
        </table>
      </div>
    );
  }
}
