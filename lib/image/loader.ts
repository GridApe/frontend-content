'use client'
 
export default function myImageLoader({ src, width, quality } : any) {
  const href = window.location.href
  console.log(href);
  
  return `${href}${src}?w=${width}&q=${quality || 75}`
}