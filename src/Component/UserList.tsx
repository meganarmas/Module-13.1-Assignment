import React from "react";

interface User {
    name: string;
    age: number;
}

const UserList: React.FC = () => {
    const users: User[] = [
        { name: 'Sawyer', age: 35 },
        { name: 'Juliet', age: 35 },
        { name: 'Charlie', age: 28 },
    ];

    return (
        <div>
            <p>User List</p>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        Name: {user.name} <br />
                        Age: {user.age}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;