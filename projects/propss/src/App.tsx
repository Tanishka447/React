import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Button from './components/Button'
import UserList from './components/UserList'

const App: React.FC = () => {
  const contentData = {
      title: "Hello, World!",
      description: "This is a simple Vite + React + TypeScript app.",
      age:  "hey",
  };

  const[users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" }
  ])

  const[selectedUser, setSelectedUser] = useState<{ name: string; email: string } | null>(null);

  const handleAddUser =() =>{
     const newUser ={ id: users.length+1 , name:"amo dmo", email:"an@gmail.com"};
     setUsers([...users,newUser])
  }

  const handleUserClick= (user: { id: number; name: string; email: string }) =>{
      setSelectedUser(user);
  };

  return (
      <div>
          <Header />
          <Content title={contentData.title} description={contentData.description} age={contentData.age} />
          <Button label="add" onClick={handleAddUser}/>
          <UserList users={users} onUserClick={handleUserClick}/>
          <Footer />
      </div>
  );
};

export default App
