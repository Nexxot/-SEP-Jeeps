import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/UserManagement.css';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        password: '',
        role: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({
            name: '',
            username: '',
            password: '',
            role: '',
            date: '',
        });
    };

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>{user.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                    type="text"
                    className="form-control"
                    id="role"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={newUser.date}
                    onChange={handleInputChange}
                />
            </div>

            <button className="btn btn-primary" onClick={handleAddUser}>
                Add User
            </button>
        </div>
    );
};

export default UserTable;
