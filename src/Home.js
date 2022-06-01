import React, { useState ,useEffect} from 'react'
import Blogslist from './Blogslist';

function Home() {
    const [blogs, setBlogs] = useState(null)
     
    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
         .then(res => {
             return res.json();
         })
            .then(data => {
                setBlogs(data);
        })
    },[]);
     
    return (
        <div className='home'>
            {blogs && <Blogslist blogs={blogs} title="All Blogs"   /> }
        </div>
    );
}
export default Home;