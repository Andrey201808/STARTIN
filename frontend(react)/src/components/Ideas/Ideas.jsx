import React, {useState, useEffect} from "react";
import './Ideas.css';
import {Button,  styled} from "@mui/material";
import Idea from '../Idea/Idea';
import { useLocation } from "react-router-dom";

const IdeasButton = styled(Button)(() => ({
  backgroundColor: "#36A9E1",
  textTransform: 'none',
  color: "#fff",
  width: "150px",
  height: "30px",
  borderRadius: "20px",
  margin: "auto",
  fontSize: "14px",
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
})); 

function Ideas({ideas}) {
  const [counter, setCounter] = useState({total: 1, more: 1})
  const [showIdeas, setShowIdeas] = useState([]); 
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      if (ideas.length) {
        const list = ideas.slice(0, counter.total);
        setShowIdeas(list);
      }
    }
  }, [ideas, counter.total])

  function handleIdeasButton() {
    let start = counter.total + counter.more
    setCounter({total: start, more: counter.more})
  }

  return (
    <section className='ideas'>
      <ul className='ideas-block'>
        {
          showIdeas.map(idea => 
            <li key={idea.id}>
              <Idea 
                idea={idea}
              />
            </li>
          )
        }
      </ul>
      {ideas.length > 1 && counter.total < ideas.length ?
        <IdeasButton onClick={handleIdeasButton}>Показать ещё</IdeasButton>
        :
        ''
      }
    </section>
  )
}
export default Ideas;