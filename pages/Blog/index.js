import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import Link from 'next/link';

export default function index({posts}) {
  return (
    <div>
    {posts.map((e)=>(
     <Link href={`/Blog/${e.slug}`} key={e.slug}>
      <div>
        {e.slug}
        </div>
     </Link>
    ))}

    </div>
  )
}

export function getStaticProps(){
  const folder = "POST/";
  
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`POST/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      summary: matterResult.data.summary,
      slug: fileName.replace(".md", ""),
    };
  });
  return {
    props:{
      posts
    }
  }
}