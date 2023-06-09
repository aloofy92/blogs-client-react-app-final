import BlogsCard from "./BlogsCard";

import { useState } from "react";

function Blogs(props) {
	
	return (
		<div>
      
			<h1>Blogs</h1>
			
			<div style={{ display: "flex", textAlign: "center", flexWrap: "wrap" }}>
				
        {props.blogsProps.map((blog) => {

					return (

						<BlogsCard

							key={blog.id}

							blog={blog}

							setShouldRefresh={props.setShouldRefreshProps}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Blogs;

