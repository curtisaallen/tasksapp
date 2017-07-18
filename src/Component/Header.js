import React, { Component } from 'react';

const Header = () => {
  return (
    <div className="navbar navbar-default">
        <div className="container">
        <div className="navbar-header">
            <a href="../" className="navbar-brand">ReactTasks</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
                <li>
                    <a href="../help/">Help</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header;