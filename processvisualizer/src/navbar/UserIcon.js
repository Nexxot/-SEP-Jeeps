import React from 'react';

const UserIcon = () => {
    return (
            <img
                id = "userIconNavBar"
                src={require("./default_user_icon.jpeg")}
                alt="User Icon"
                width="50"
                height="50"
                className="d-inline-block align-top"
            />
    );
};

export default UserIcon;