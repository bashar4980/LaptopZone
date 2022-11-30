import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogdata = useLoaderData()
    const {Question , img , Answer} = blogdata
    return (
        <div>
           <div className="p-5 mx-auto sm:p-10 md:p-16 bg-primary text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={img} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="/" className=" text-gray-100 inline-block text-2xl font-semibold sm:text-3xl">{Question}</a>
				<p className="text-xs text-gray-400">By
					<a rel="noopener noreferrer" href="/" className="text-xs hover:underline">Bashar Ahmed</a>
				</p>
			</div>
			<div className="text-gray-100">
				<p>{Answer}</p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default BlogDetails;