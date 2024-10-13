import React from 'react';

const TopBar = () => {
    return (
        <div className="navbar navbar-light bg-danger">
            <a className="navbar-brand ms-5 fw-bold" href="#">Product Management</a>
            <div className="ml-auto">
                <button className="btn btn-outline-secondary">Notifications</button>
                <button className="btn btn-outline-secondary">User Profile</button>
            </div>
        </div>
    );
};

export default TopBar;
