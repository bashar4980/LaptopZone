import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, isLoading } = useQuery({
    queryHash: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/blog");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
     
      <>
        <section className="py-6 sm:py-12 bg-primary text-gray-100">

          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Feature Post</h2>
              <p className="font-serif text-sm text-gray-400">
               You have must to know...
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
             {
                data.map(question=>{
                    return(
                        <article key={question._id} className="flex flex-col bg-gray-900">
                       
                          <img
                            src={question?.img}
                            alt="question img"
                            className="object-cover w-full h-52 bg-gray-500"
                          />
                  
                        <div className="flex flex-col flex-1 p-6">
                       
                          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                            {question?.Question}
                          </h3>
                          <Link to={`/blogs/${question._id}`} className="btn btn-info btn-xs">Read</Link>
                          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                            <span>{format(new Date() , "PP")}</span>
                            <span>2.4K views</span>
                          </div>
                         
                        </div>
                      </article>
                    )
                })
             }
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Blog;
