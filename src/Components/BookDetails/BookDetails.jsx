import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreList } from '../../assets/Utilites/AddData';
import { addToWishList } from '../../assets/Utilites/WishList';

const BookDetails = () => {
   const {bookId} =useParams()
   const data =useLoaderData()
   
   const id=parseInt(bookId)
   console.log(id);
   const book = data.find(book=> book.bookId===id)
   console.log(book);
   const {
    bookName,
    author,
    totalPages,
    image,
    publisher,
    tags,
    category,
    rating,
    review,
    yearOfPublishing
  } = book;
  const handleMarkAsRead =(id)=>{
    addToStoreList(id)
  }
  const handleWishList =(id)=>{
    addToWishList(id)
  }
    return (
        <div className=" bg-white min-h-screen my-5">
        <div className="flex  justify-between gap-5 flex-col lg:flex-row">
           <div className='bg-[#1313130D] rounded-lg'>
            <img
             src={image}
            className="max-w-xs h-[450px] m-16  rounded-lg shadow-2xl" />
           </div>
          <div className='items-start'>
            <h1 className="text-4xl font-bold">{ bookName}</h1>
            <p className="py-5 text-sm border-b-2 ">
             By: {author}
            </p>
            <p className="text-base font-normal py-5 border-b-2">{category}</p>
            <p className="py-5 text-sm font-normal"><span className='text-base text-[#131313] font-bold'>Review</span>:{review}</p>
             <p className='text-base text-[#131313] font-bold border-b-2 pb-5'>Tag
             {tags.map((tag) => (
                <button
                  key={tag.id}
                  className="px-4 py-1 items-center ml-2 text-base rounded-lg bg-[#F3F3F3] text-[#23BE0A]"
                >
                <span className='text-[#23BE0A] mr-1 text-base font-semibold'>#</span>{tag}
                </button>
              ))}
             </p>
             <div className="py-5 flex flex-col gap-3">
                <p className="text-sm font-normal text-[##131313B3]"> 
                     <span className='text-sm font-bold text-[#131313] mr-8'>Total Pages:</span>
                     {totalPages}</p>
                <p className="text-sm font-normal text-[##131313B3]">
                 <span className='text-sm font-bold text-[#131313] mr-8'>Publisher:</span>
                 {publisher}
                </p>
                <p className="text-sm font-normal text-[##131313B3]">
                <span className='text-sm font-bold text-[#131313] mr-8'>Year Of Publishing:</span>
                 {yearOfPublishing}
                </p>
                <p className="text-sm font-normal text-[##131313B3]">
                <span className='text-sm font-bold text-[#131313] mr-8'>Rating:</span>
                 { rating}
                </p>
                <div className='py-5'>
                 <button onClick={()=>handleMarkAsRead(bookId)} key={bookId} className="btn btn-info bg-[#ffffffa8]">Read</button>
                 <button onClick={()=>handleWishList(bookId)} className="btn btn-info ml-5">WishList</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;