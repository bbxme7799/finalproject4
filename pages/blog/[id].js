// pages/posts/[id].js
import { useRouter } from "next/router";
import PageMetadata from "@/components/PageMetadata";
import MainHeader from "@/components/layout/main-header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/blog/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      {post && (
        <>
          <PageMetadata title={post.title} />
          <MainHeader />
          <section className="py-12 mt-6 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <article className="prose max-w-none">
                <h1 className="text-3xl font-bold text-gray-900">
                  {post.title}
                </h1>
                <p className="mt-3 text-sm text-gray-500">{post.createdAt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </div>
          </section>
        </>
      )}
    </>
  );
}
