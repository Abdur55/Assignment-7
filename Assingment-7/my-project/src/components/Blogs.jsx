
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

        const [blogs, setBlogs] = useState([]);

        useEffect( () => {
            fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        }, [])

    return (
        <div className=" ">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-3xl font-bold">Available Players</h2>
                <div>
                    <button className="btn bg-sky-500">Available</button>
                    <button className="btn">Selected (0)</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full mb-20">
                {
                    blogs.map(blog => <Blog key={blog.playerId} blog={blog}></Blog>)
                }
               
            </div>
        </div>
    );
};

export default Blogs;