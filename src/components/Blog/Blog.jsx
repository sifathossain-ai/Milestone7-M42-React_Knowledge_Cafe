import { LuBookmark } from "react-icons/lu";
const Blog = ({ blog, handleBookmarks }) => {
    // console.log(blog);
    const { title, cover, author_img, author, posted_date, reading_date, hashtags} = blog;
    return (
        <div className="">
            <div>
                <img className="rounded-lg w-full" src={cover} alt="" />
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 py-8">
                        <img className="rounded-full w-14 h-14 object-cover" src={author_img} alt="" />
                        <div>
                            <h3 className="text-2xl font-bold">{author}</h3>
                            <p className="text-sm text-gray-600">{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">

                        <small className="text-gray-600">{reading_date}</small>

                        <button onClick={() => handleBookmarks(blog)} className="text-xl text-gray-600"><LuBookmark></LuBookmark></button>

                    </div>

                </div>
                <h2 className="text-3xl font-bold">{title} </h2>
                <div className="my-3">
                    <small className="text-gray-600">
                        {
                            hashtags.map((hash, idx) => <span className="pr-3" key={idx}><a href="">{hash}</a></span>)
                        }
                    </small>
                </div>
                <hr className="my-6" />
            </div>
        </div>
    );
};

export default Blog;

/* 

author: "Liam Carter"
author_img: "https://randomuser.me/api/portraits/men/32.jpg"
cover: "https://picsum.photos/seed/book1/400/250"
hashtags: (3) ['#Technology', '#Innovation', '#AI']
id: "1"
posted_date: "2025-07-15"
reading_date: 20250801
title: "Unlocking the Future of Tech"
 */