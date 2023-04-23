
import './App.css';
import axios from "axios";
import NaviBar from './components/NaviBar';
import Blogs from "./components/Blogs";
import BlogForm from './components/BlogForm';
import EditBlog from './components/EditBlog';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

	const [blogs, setBlogs] = useState([]);

	const [shouldRefresh, setShouldRefresh] = useState(false);

	const url = "http://localhost:5001";

	//useEffect first argument, takes in an anonymous callback function. second argument, dependency array
	
  useEffect(() => {

		const fetchData = async () => {
			// fetch('url', { method: "POST"})
			//axios will parse the response from our backend back to us so we don't need response.json()
			const response = await axios.get(`${url}/blogs/all-blogs`);

			if (response.data.success) {

				setBlogs(response.data.blogs);
			}
		};
		fetchData();

	}, [shouldRefresh]);

	return (
		<div>
			<NaviBar />
			
			<Routes>

				<Route
					path="/"
					element={
						<Blogs
							blogsProps={blogs}
							setShouldRefreshProps={setShouldRefresh}
						/>
					}
				/>

					<Route
						path="blog-form"
						element={
							<BlogForm
								setBlogsProps={setBlogs}
								setShouldRefreshProps={setShouldRefresh}
							/>
						}
					/>
					<Route
						path="edit-blog/:id"
						element={
							<EditBlog
								blogsProps={blogs}
								setShouldRefreshProps={setShouldRefresh}
							/>
						}
					/>
			
			</Routes>
      
		</div>
	);
}

export default App;


//props means property and that is data that is passed between react components

//props are one way and passed between parent to child that will always be the case

// state is a variable place that can be updated and changed