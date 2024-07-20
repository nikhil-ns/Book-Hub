import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Data, setData] = useState();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  // console.log(isLoggedIn, role);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/get-book-by-id/${id}`
      );
      // console.log(response.data.data);
      setData(response.data.data);
    };
    fetch();
  }, []);

  const headers = {
    id : localStorage.getItem("id"),
    authorization : `Bearer ${localStorage.getItem("token")}`,
    bookid : id,
  }

  const handleFavourite = async ()=>{
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/add-book-to-favourite`, {}, { headers });
    toast(response.data.message)
  }

  const handleCart = async ()=>{
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/add-to-cart`, {}, { headers });
    toast(response.data.message)
  }

  const deleteBook = async () =>{
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/v1/delete-book`, {headers})
    toast(response.data.message)
    navigate("/all-books")
  }

  return (
    <>
    {!Data && (
        <div className="h-screen bg-primary-background flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Data && (
        <div className="px-4 md:px-12 py-8 bg-primary-background flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-3/6">
            <div className="flex flex-col lg:flex-row justify-around bg-zinc-200 border-2 border-black p-12 rounded">
              <img
                src={Data.url}
                alt="/"
                className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded"
              />

              {isLoggedIn === true && role === "user" && (
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button className="bg-white rounded lg:rounded-full text-3xl p-3 text-red-500 flex items-center justify-center" onClick={handleFavourite}>
                    <FaHeart />{" "}
                    <span className="ms-4 block lg:hidden">Favourites</span>
                  </button>
                  <button className="text-white rounded mt-8 md:mt-0 lg:rounded-full text-3xl p-3 ml-2 lg:mt-8 bg-blue-500 flex items-center justify-center" onClick={handleCart}>
                    <FaShoppingCart />{" "}
                    <span className="ms-4 block lg:hidden">Add to cart</span>
                  </button>
                </div>
              )}

              {isLoggedIn === true && role === "admin" && (
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <Link to={`/updateBook/${id}`} className="bg-white rounded lg:rounded-full text-3xl p-3 flex items-center justify-center">
                  <FaEdit />
                    <span className="ms-4 block lg:hidden">Edit</span>
                  </Link>
                  <button className="text-red-500 rounded  mt-8 lg:rounded-full text-3xl p-3 ml-2 md:mt-0 lg:mt-8 bg-white flex items-center justify-center" onClick={deleteBook}>
                  <MdDeleteOutline />
                    <span className="ms-4 block lg:hidden">Delete Book</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-black font-semibold">
              {Data.title}
            </h1>
            <p className="text-secondary-400 mt-1">by {Data.author}</p>
            <p className="text-zinc-600 mt-4 text-x1">{Data.desc}</p>
            <p className="flex mt-4 items-center justify-start text-zinc-600">
              <GrLanguage className="me-3" /> {Data.language}
            </p>
            <p className="mt-4 text-black text-3xl font-semibold">
              Price : Rs {Data.price}
            </p>
          </div>
        </div>
      )}
      
    </>
  );
};

export default ViewBookDetails;
