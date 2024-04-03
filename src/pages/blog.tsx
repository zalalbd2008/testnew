import React from 'react';
import Layout from '@/components/layout/Layout';
import CmnBanner from '@/components/layout/banner/CmnBanner';
import BlogMain from '@/components/containers/blog/BlogMain';
import HomeBlog from '@/components/containers/home/HomeBlog';
import Link from 'next/link';
import Image from 'next/image';
import { blogContent } from '@/constant/inedex';
import { useRouter } from 'next/router';
const BlogPage = () => {
  const router = useRouter();
  return (
    <Layout header={2} footer={1} video={0}>
      <div className="p-1 p-lg-5">
        <CmnBanner title="Blog Standard" navigation="Blog Standard" />
        <div className="row gaper px-3">
          {blogContent.map(blog => (
            <div
              className="col-12 col-md-6"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => router.push(`/blog/${blog.index}`)}
            >
              <div className="blog__single fade-top">
                <div className="blog__single-thumb topy-tilt">
                  <Image src={blog.image} alt="Image" />
                </div>

                <div className="blog__single-content pt-3">
                  <h5>{blog.header}</h5>
                  <div className="blog__single-meta">
                    <Link href="#" className="sub-title">
                      {blog.date}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
