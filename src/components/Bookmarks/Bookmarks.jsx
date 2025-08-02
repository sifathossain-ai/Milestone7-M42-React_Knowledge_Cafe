import React from "react";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-gray-300 rounded-lg">
                <h3 className="text-2xl font-bold p-7">Bookmarked Blogs: {bookmarks.length}</h3>

            </div>
        </div>
    );
};

export default Bookmarks;