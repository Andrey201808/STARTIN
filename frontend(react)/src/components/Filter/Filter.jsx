import React from 'react';
import './Filter.css';
import Popular from '../../images/Popular.svg'
import Recomend from '../../images/Recomend.svg'
import Tech from '../../images/Tech.svg'
import Tourism from '../../images/Tourism.svg'
import Culture from '../../images/Culture.svg'
import Sport from '../../images/Sport.svg'
import Digits from '../../images/Digits.svg'
import Other from '../../images/Other.svg'
import {Box,  Typography, ListItemIcon, List, ListItem} from "@mui/material";
import { useState } from 'react';

const menuItems = [{name: 'Популярное', src: `${Popular}`},
{name: 'Рекомендации', src: `${Recomend}`}, 
{name: 'Технические', src: `${Tech}`}, 
{name: 'Туристические', src: `${Tourism}`}, 
{name: 'Культурные', src: `${Culture}`}, 
{name: 'Спортивные', src: `${Sport}`}, 
{name: 'Цифровые', src: `${Digits}`}, 
{name: 'Другие', src: `${Other}`}]

function Filter({ideas, setFilterdIdeas}) {
  const [filterCat, setFilterCat] = useState([])
  const filterItem = (curcat) => {
    let copy = Object.assign([], filterCat);
    if(!filterCat.includes(curcat)) {
      copy.push(curcat)
    } else {
      copy = filterCat.filter((i)=> i !== curcat)}
    setFilterCat(copy);
    console.log('copy', copy)
    let items; 
    if(copy.length !== 0) {
      items = ideas.filter(({category: arr}) => arr.some(cat=> copy.includes(cat)))
    } else {
      items = ideas
    }
      setFilterdIdeas(items);
      console.log('items', items)
  }
  return (
    <Box sx={{boxSizing:"border-box", width: "180px", height: "350px", border: "1px solid #EAEAEA", borderRadius: "10px", background: "#FFFFFF", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <nav aria-label="filter ideas">
        <List>
          {menuItems.map((cat, id) => {
            return (
              <ListItem key={id} disablePadding>
                <button className={filterCat.includes(cat.name) ? 'filter-button filter-button_active': 'filter-button'} onClick={()=>filterItem(cat.name)}>
                  <ListItemIcon sx={{minWidth:'18px', height:'18px', mr:'10px'}}>
                    <img src={cat.src} alt=''/>
                  </ListItemIcon>
                  <Typography sx={{fontSize:'13px', fontWeight:'600'}}>{cat.name}</Typography>
                </button>
              </ListItem>
            )
          }
          )}
        </List>
      </nav>
		</Box>
  )
}
export default Filter;