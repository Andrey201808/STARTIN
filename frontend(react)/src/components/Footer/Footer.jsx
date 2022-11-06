import React from 'react';
import './Footer.css';
import {Box, Button, Card, CardContent, List, ListItem, ListItemText, styled, Typography} from "@mui/material";
import { Form } from 'react-router-dom';
import { Link } from "react-router-dom";

function Footer() {
  const date= new Date();
  return (
    <section className='footer'>
      <Box sx={{ display: "flex"}}>
        <Box sx={{mr: "210px"}}>
          <Typography variant="h3" sx={{ fontSize: "24px", color: "#000000", fontWeight: "700", mb: "25px"}}>StartIn</Typography>
          <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "#000000"}}>Найди решение по своему выбору.</Typography>
        </Box>
        <Box sx={{display: "flex"}}>
          <Box >
            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000000", fontWeight: "600", mb: "25px" }}>Наши партнеры</Typography>
            <List sx={{ fontSize: "16px", color: "#000000", fontWeight: "400"}}>
              <ListItemText primary="ООО “Банк”"></ListItemText>
              <ListItemText primary="ИнветорКоуп"></ListItemText>
              <ListItemText primary="ReferalEven"></ListItemText>
              <ListItemText primary="ООО “Машина”"></ListItemText>
              <ListItemText primary="Lean Group"></ListItemText>
            </List>
          </Box>
          <Box sx={{ml:"40px"}}>
            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000000", fontWeight: "600", mb: "25px" }}>Почему мы?</Typography>
            <List sx={{ fontSize: "16px", color: "#000000", fontWeight: "400" }}>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Политика пользователя"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Сайт Хакатона"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Наша команда"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Задача"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Отзывы"></ListItemText></Link>
            </List>
          </Box>
          <Box sx={{ml:"40px"}}>
            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000000", fontWeight: "600", mb: "25px" }}>Социальное</Typography>
            <List sx={{ fontSize: "16px", color: "#000000", fontWeight: "400" }}>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Twitter"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Youtube"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Telegram"></ListItemText></Link>
              <Link href="#" style={{textDecoration: "none", color: "#000000"}}><ListItemText primary="Facebook"></ListItemText></Link>
            </List>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "#000000"}}>StartIn © All rights reserved</Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "#000000"}}>{`${date.getFullYear()}`}</Typography>
      </Box>
    </section>
  )
}
export default Footer;