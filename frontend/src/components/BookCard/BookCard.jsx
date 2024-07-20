import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BookCard = ({ data, favourite }) => {
  //   console.log(data);
  const headers = {
    id : localStorage.getItem("id"),
    authorization : `Bearer ${localStorage.getItem("token")}`,
    bookid : data._id,
  }
  const handleRemoveBook = async ()=>{
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/remove-book-from-favourite`, {}, { headers })
    toast(response.data.message);
  }
  return (
    <div className="bg-zinc-200 rounded p-4 flex flex-col border border-black">
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-zinc-200 rounded p-4 flex flex-col">
          <div className="bg-zinc-400 rounded flex items-center justify-center">
            <img src={data.url} alt="/" className="h-[25vh]" />
          </div>
          <h2 className="mt-4 text-xl text-black font-semibold">
            {data.title}
          </h2>
          <p className="mt-2 text-secondary-400 font-semibold">by {data.author}</p>
          <p className="mt-2 text-red-800 font-semibold text-xl">
            Rs. {data.price}
          </p>
        </div>
      </Link>
      {favourite && (
        <button className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4"
         onClick={handleRemoveBook}>
          Remove from favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;
