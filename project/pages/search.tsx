import React, { useState } from 'react';
import { MDBInput ,MDBCardImage } from 'mdb-react-ui-kit';
import data from '../server/database/db.json';
import Postdetail from './details'
import Link from 'next/link';
interface Product {
  name: string;
}

function Search() {
  const [text, setText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const filteredData = data.filter((el: any) =>
    el.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <form>
      <div className='card'>
        <div className='container'>
        <div >
      <div>
        <MDBInput
          wrapperClass='mb-4'
          placeholder='Search for your product or collection'
          id='form2'
          className='input'
          value={text}
          onChange={handleInputChange}
        />
        
      </div>
      {filteredData.map((el: any, index: number) => (
        <div key={index} >
                    <Link href='/details' el={el} > {el.name} </Link> 

                 
          <MDBCardImage 
  src={el.image}
  className="w-100"
/>
                
                  
        {/* <Postdetail el={el}/> */}   

        </div>
      ))}
      </div>
      </div>
      </div>
    </form>
  );
}

export default Search;
