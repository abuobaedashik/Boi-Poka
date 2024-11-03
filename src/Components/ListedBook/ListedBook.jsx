import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreList } from "../../assets/Utilites/AddData";
import Book from "../Book/Book";

const ListedBook = () => {
  const[read,setread]=useState([])
  const allBooks =useLoaderData()
 
  useEffect(()=>{
    const storedReadList =getStoreList();
    const storedReadListInt=storedReadList.map(id=>parseInt(id))
    console.log(storedReadList,storedReadListInt,allBooks);
    const readBooks =allBooks.filter(book=>storedReadListInt.includes(book.bookId))
    setread(readBooks)
  },[])
  return (
    <div>
      <h2 className="mb-5">listed book</h2>
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>The Book I was Read :{read.length}</h2>
          <div className="mt-2 w-[400px] object-cover flex items-center gap-5 flex-col">
            {read.map(book=><Book book={book}></Book>)}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>The Book I want Read Leater</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
