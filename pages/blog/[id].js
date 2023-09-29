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

  // Function to format the createdAt date
  const formatCreatedAt = (createdAt) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(createdAt).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {post && (
        <>
          <PageMetadata title={post.title} />
          <MainHeader />
          <section className="py-12 mt-6 bg-gray-50 sm:py-16 lg:py-20">
            {/* <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <article className="prose max-w-none">
                <h1 className="text-3xl font-bold text-gray-900">
                  {post.title}
                </h1>
                <p className="mt-3 text-sm text-gray-500">{post.createdAt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </div> */}

            <main className="mt-10">
              <div className="mb-4 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                    {post.title}
                  </h2>
                  <a
                    href="#"
                    className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                  >
                    {formatCreatedAt(post.createdAt)}
                  </a>
                </div>

                <img
                  src={post.imageUrl}
                  className="w-full object-cover lg:rounded"
                  style={{ height: "28em" }}
                />
              </div>
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                {/* ใช้ dangerouslySetInnerHTML เพื่อแสดง HTML ที่อยู่ใน post.content */}
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </div>
            </main>
          </section>
        </>
      )}
    </>
  );
}
