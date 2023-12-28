'use client'
 
export default function myImageLoader({ src, width, quality } : any) {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}