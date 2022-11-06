import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import './PublicForm.css';
import closeBtn from '../../images/close_btn.svg';


function PublicForm() {
  
  return (
    <section className='public'>
      <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <Typography sx={{fontSize:'24px'}}>Публикация</Typography>
        <button className='info-form__close-btn'>
          <img src={closeBtn} alt='edit'></img>
        </button>
      </Box>
      <form name='public-form' className='public-form'>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <input className='profile-input__value' type='text' name='title' placeholder='Название' ></input>
          </Grid>
          <Grid item xs={6}>
            <input className='profile-input__value' type='text' name='if-team' placeholder='Есть ли команда?' ></input>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{paddingTop:'10px'}}>
            <textarea className='profile-input__value profile-input__value_description' type='text' name='description' placeholder='Описание проекта' ></textarea>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{display:'flex', height:'100%', flexDirection:'column', justifyContent:'space-between'}}>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                <Typography sx={{fontSize:'18px', fontWeight:'500'}}>Роль в команде</Typography>
                <input className='profile-input__value profile-input__value_wide' type='text' name='role' ></input>
              </Box>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                <Typography sx={{fontSize:'18px', fontWeight:'500'}}>Тэги</Typography>
                <input className='profile-input__value profile-input__value_wide' type='text' name='tag'></input>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </section>
  )
}
export default PublicForm;