import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import data from '../server/database/db.json';
import Postdetail from './details'
import Link from 'next/link';
interface Product {
  category: string;
}

function Search() {
  const [text, setText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const filteredData = data.filter((el: Product) =>
    el.category.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <form>
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
      {filteredData.map((el: Product, index: number) => (
        <div key={index}>
          <Link href='/details' el={el} > {el.category} </Link>
          
        {/* <Postdetail el={el}/> */}
        </div>
      ))}
    </form>
  );
}

export default Search;
