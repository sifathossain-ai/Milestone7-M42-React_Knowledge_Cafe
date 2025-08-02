import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (id, time) =>{
    setReadingTime(readingTime + time)
    // console.log(id);
    const remainingBooks = bookmarks.filter(bookmark => (bookmark.id !== id));
    setBookmarks(remainingBooks);
  }

  return (
    <div className='max-w-7xl mx-auto p-2'>
      <Header></Header>
      <div className='md:flex justify-between py-6 gap-4'>
        <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App;
