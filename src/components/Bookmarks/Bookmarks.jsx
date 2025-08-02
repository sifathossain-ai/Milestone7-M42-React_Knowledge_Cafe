import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(readingTime)
    return (
        <div className="md:w-1/3">
            <div className="bg-purple-100 mb-5 rounded-lg">
                <h3 className="text-2xl text-purple-600 font-bold p-6">Spent time on read: {readingTime} min</h3>
            </div>
            <div className="bg-gray-200 rounded-lg pt-6 pb-2 px-6">
                <h3 className="text-2xl font-bold pb-6">Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;