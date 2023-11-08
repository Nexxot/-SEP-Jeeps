import React from 'react';
const UserIcon = () => {
    return (
        <div>
            <img
                id = "userIconNavBar"
                src={require("./default_user_icon.jpeg")}
                alt="User Icon"
                width="50"
                height="50"
                className="d-inline-block align-top"
            />
        </div>
    );
};

export default UserIcon;