// src/components/UserList.tsx
import React from 'react';
import UserItem from './UserItem';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserListProps {
    users: User[];
    onUserClick: (user: User) => void; // New prop
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <UserItem key={user.id} user={user} onUserClick={onUserClick} />
                ))}
            </ul>
        </div>
    );
};

export default UserList;
