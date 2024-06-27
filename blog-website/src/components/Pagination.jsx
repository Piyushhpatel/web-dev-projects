import React, { useContext } from "react"
import { AppContext } from "../context/AppContext";


const Pagination = (props) => {
  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className="fixed bottom-0 border-t-2 inset-x-0 bg-white border-t-gray-300 py-2">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
      <div className="flex gap-x-3">
      {
        page > 1 &&
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md" 
          onClick={() => {handlePageChange(page-1)}}
        >Previous</button>
      }
      {
        page < totalPages && 
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => {handlePageChange(page+1)}}
        >
          Next
        </button>
      }
      </div>
      <p className="text-sm font-semibold ml-auto">Page {page} of {totalPages}</p>
    </div>
    </div>
  )
};

export default Pagination;
