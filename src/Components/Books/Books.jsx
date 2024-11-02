import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
   const [books,setbooks]=useState([]);
   useEffect(()=>{
     fetch('data.json')
     .then(res => res.json())
     .then(data=>setbooks(data))
   },[])
    return (
        <div className='mx-auto '>
            <div className="text-2xl font-bold text-center mt-8 mb-4">Books</div>
            <div className='grid grid-cols-1 mb-8 md:grid-cols-3 2xl:grid-cols-4 gap-12 justify-between'>
               { books.map(book=><Book book={book} key={book.id}></Book>)}
            </div>
        </div>
    );
};

export default Books;