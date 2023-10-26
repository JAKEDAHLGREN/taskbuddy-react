import React from'react';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const bgImage = 'https://as2.ftcdn.net/v2/jpg/02/84/63/03/1000_F_284630390_K5wZO4SKD3WT1fxySBC1FNv8CkYWA2xK.jpg'

  return (
    <div className='bg-cover bg-scroll h-screen w-screen'
      style={{ backgroundImage:`url(${bgImage})`}}
    >
    <div className='flex items-center justify-center overflow-y-scroll'>
      <TaskList />
    </div>
    </div>
  )
}

export default App;
