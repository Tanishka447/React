// src/components/UserItem.tsx
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserItemProps {
    user: User;
    onUserClick: (user: User) => void; 
}

const UserItem: React.FC<UserItemProps> = ({ user, onUserClick }) => {
    return (
        <li onClick={() => onUserClick(user)} style={{ cursor: 'pointer' }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </li>
    );
};

export default UserItem;
