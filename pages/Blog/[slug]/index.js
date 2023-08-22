import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function index({frontmatter:{title},content,slug}) {
    
  return (
    <div>{content}</div>
  )
}
export function getStaticPaths(){
  const files = fs.readdirSync(path.join('POST'))
  const paths = files.map((filenames)=>({
    params: {
      slug: filenames.replace('.md','')
    }
  }))
  return {
    paths ,
    fallback: false
  }
}

export function getStaticProps({params:{slug}}){
  const fileConetnt = fs.readFileSync(path.join('POST',slug + '.md'),'utf-8')
  const {data:frontmatter , content } = matter(fileConetnt)
  return {
    props:{
      frontmatter,
      content,
      slug
    }
  }
}


