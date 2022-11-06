import React, {useState} from 'react';
import { Box, Typography, Checkbox, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { user } from '../../utils/user';
import './UserForm.css';
import editBtn from '../../images/edit_btn.jpg'


function UserForm() {
  const [editingUserForm, setEditingUserForm] = useState(false)
  const disabled = editingUserForm ? '' : 'disabled';
function handleUserFormBtn() {
  editingUserForm ? setEditingUserForm(false) : setEditingUserForm(true)
}
  return (
    <section className='user'>
      <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <Box sx={{display:"flex"}}>
          <Typography sx={{fontSize:'24px'}}>{user.name} {user.firstName}</Typography>
          <Box sx={{display:"flex", alignItems:'center'}}>
            <Typography sx={{ml:'20px'}}>{user.status}</Typography>
            <div className='user-status'></div>
          </Box>
        </Box>
        <button className={editingUserForm ? 'user-form__edit-btn user-form__edit-btn_active' : 'user-form__edit-btn'} onClick={handleUserFormBtn}>
          <img src={editBtn} alt='edit'></img>
        </button>
      </Box>
      <Box sx={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
        <form name='user-form' className='user-form'>
          <Grid container spacing={3} sx={{width:'540px'}}>
            <Grid item xs={6}>
              <input className='profile-input__value' type='text' name='name' defaultValue={user.name} disabled={disabled}></input>
            </Grid>
            <Grid item xs={6}>
              <input className='profile-input__value' type='email' name='email' defaultValue={user.email} disabled={disabled}></input>
            </Grid>
            <Grid item xs={6}>
              <input className='profile-input__value' type='text' name='firstName' defaultValue={user.firstName} disabled={disabled}></input>
            </Grid>
            <Grid item xs={6}>
              <input className='profile-input__value' type='tel' name='phone' defaultValue={user.phone} disabled={disabled}></input>
            </Grid>
            <Grid item xs={6}>
              <input className='profile-input__value' type='text' name='patronymic' defaultValue={user.patronymic} disabled={disabled}></input>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{display:'flex'}}>
                <Checkbox defaultChecked></Checkbox>
                <Typography sx={{fontSize:'16px'}}>Даёте ли вы согласие на обработку персональных данных..</Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
        <div className='user-avatar'>
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: "140px", height: "181px", borderRadius: "20px", verticalAlign: 'middle'}}
          />
        </div>
      </Box>
    </section>
  )
}
export default UserForm;