import React, {useEffect} from 'react';
import './App.css';
import { Body } from './Components/Body/Body';
import { Header } from './Components/Header/Header';
import { useAppDispatch } from './Redux/Hooks/Hooks';
import { setUser } from './Redux/Slices/UserSlice';
import { userFactory } from './Mock/UserMock';


const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(setUser(userFactory()));
  }, [])

  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;


