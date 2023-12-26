'use client'
 
export default function myImageLoader({ src, width, quality } : any) {
    const url = window.location.origin;
    console.log(url); 
  return `${url}${src}?w=${width}&q=${quality || 75}`
}