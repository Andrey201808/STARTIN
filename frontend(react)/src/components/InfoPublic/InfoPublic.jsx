import React, {useState} from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import './InfoPublic.css';
import closeBtn from '../../images/close_btn.svg';


function InfoPublic({addButtonActive, setaddButtonActive}) {

  function handleCloseBtn() {
    setaddButtonActive(true)
  }
  return (
    <section className={addButtonActive ?'info-public info-public_hidden' :'info-public'}>
      <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <Typography sx={{fontSize:'24px'}}>Данные для публикации</Typography>
        <button className='info-form__close-btn'>
          <img src={closeBtn} alt='edit' onClick={handleCloseBtn}></img>
        </button>
      </Box>
      <Box sx={{display:'flex', paddingTop:'20px', justifyContent:'space-between'}}>
        <form name='info-form' className='info-form'>
          <Grid container spacing={5} rowSpacing={3} columnSpacing={10}>
            <Grid item xs={4}>
              <input className='profile-input__value' type='date' name='birth-date' placeholder='Дата рождения' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='sex' placeholder='Пол' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='experience' placeholder='Опыт' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='coutry' placeholder='Страна' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='education' placeholder='Образование' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='role' placeholder='Роль в команде' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='city' placeholder='Город' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='work' placeholder='Занятость' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='team' placeholder='Наличие команды ' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='objIntelProp' placeholder='Есть объекты интеллектуальной собственности?' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='achievements' placeholder='Достижения' ></input>
            </Grid>
            <Grid item xs={4}>
              <input className='profile-input__value' type='text' name='inn' placeholder='Введите ИНН (при наличии)' ></input>
            </Grid>
            <Grid item xs={12}>
              <Box>
              <input className='profile-input__value profile-input__value_wide' type='text' name='skills' placeholder='Навыки' ></input>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </section>
  )
}
export default InfoPublic;