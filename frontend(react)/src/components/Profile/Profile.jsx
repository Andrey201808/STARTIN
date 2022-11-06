import React, { useState } from 'react';
import './Profile.css';
import UserForm from '../UserForm/UserForm';
import InfoPublic from '../InfoPublic/InfoPublic';
import PublicForm from '../PublicForm/PublicForm';
import addBtn from '../../images/add_btn.svg';
import Candidates from '../Candidates/Candidates';

function Profile() {
  const [addButtonActive, setaddButtonActive] = useState(false);

  function handleaddButtonActive() {
    setaddButtonActive(false)
  }
  return (
    <section className='profile'>
      <div className='profile-container'>
        <UserForm />
        <button onClick={handleaddButtonActive} className={addButtonActive ? 'add-btn add-btn_active': 'add-btn'}>
          <img src={addBtn} alt='edit'></img>
        </button>
        <InfoPublic 
          addButtonActive={addButtonActive}
          setaddButtonActive={setaddButtonActive}
        />
        <PublicForm />
        <Candidates />
        </div>
    </section>
  )
}
export default Profile;