import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    totalPages,
    image,
    publisher,
    tags,
    category,
    rating,
    bookId
  } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className=" bg-white flex flex-col ">
        <div className="card bg-base-100 border h-96 border-[#13131326]">
          <figure className="bg-[#F3F3F3] rounded-2xl p-6 mx-4 my-4">
            <img
              src={image}
              className="h-44 object-cover w-60 rounded-lg flex-grow "
              alt={bookName}
            />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-5">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  className="btn items-center btn-xs bg-[#F3F3F3] text-[#23BE0A]"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title flex-grow ">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="flex-grow ">By:{author}</p>
            <div className="card-actions border-t-2 border-dotted border-[#13131326]">
              <div className="flex  items-center justify-between gap-6">
                <div className=" text-sm">{category}</div>
                <div className=" text-sm">{rating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
