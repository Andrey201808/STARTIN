import React, {useState} from 'react';
import './Main.css';
import Filter from '../Filter/Filter';
import Addition from '../Addition/Addition'
import Ideas from '../Ideas/Ideas';
import { ideas } from '../../utils/ideas';

function Main() {
  const [filteredIdeas, setFilterdIdeas] = useState(ideas)
  return (
    <section className='main'>
      <Filter 
      ideas={ideas}
      setFilterdIdeas={setFilterdIdeas}
      />
      <Ideas 
      ideas={filteredIdeas}
      />
      <Addition />
    </section>
  )
}
export default Main;