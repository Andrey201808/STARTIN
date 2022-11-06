import React from 'react';
import './Addition.css'
import {Box, Button, CardContent, styled,  Link, CardMedia, Typography} from "@mui/material";
import additionalFoto from '../../images/additionalFoto.svg'

const LinkButton = styled(Button)(() => ({
  backgroundColor: "#36A9E1",
  textTransform: 'none',
  color: "#fff",
  width: "230px",
  height: "40px",
  borderRadius: "30px",
  margin: "auto",
  fontSize: "14px",
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
}));
function Main() {
  return (
    <Box sx={{height: "500px", border: "1px solid #EAEAEA", borderRadius: "10px", background: "#FFFFFF", padding: "20px 20px 30px", display:'flex', flexDirection: 'column', justifyContent: 'center' }}>

        <CardMedia sx={{height: "166px",
          width:"230px"}}
          component="img"
          image={additionalFoto}
          alt="Фото концерта"
        />
   
          <Box sx={{width: "235px",display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography sx={{ fontWeight: "400", fontSize: '16px', lineHeight: '19px', mt:'22px', mb:'19px', textAlign:'center'}}>
              Концерт “Группа” в Мосвке 25 января, успей купить билеты!
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "400", fontSize: '13px', lineHeight: '19px', mb:'19px', textAlign:'center'}}>
              Концерт “Группа” впервые в России! Первый концерт группы пройдет в Крокус сити холл 25 января 2021, соллист лично принимает гостей в гримерке. Море хорошей музыки, знакомства с новыми людьми и открытая площадка. Успей приобрести билеты на advertisment.ru до 21 января. 
            </Typography>
          </Box>
     
        <LinkButton>
         <a className='btn-link' href="https://afisha.ru" target="blank">Перейти по ссылке</a>
  
        </LinkButton>


    </Box>
  )
}
export default Main;