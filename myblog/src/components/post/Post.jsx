import React from 'react'
import './Post.css'
import MainImage from '../assests/mainImage.jpg'

/* const data=[
  {
    image: MainImage,
    postcat1: 'Music',
    postcat2: 'Life',
    postTitle: 'Lorem ipsum dolor sit amet.',
    postDate: 'Lorem ipsum dolor sit amet.',
    postDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!'
  },
  {
    image: MainImage,
    postcat1: 'Music',
    postcat2: 'Life',
    postTitle: 'Lorem ipsum dolor sit amet.',
    postDate: 'Lorem ipsum dolor sit amet.',
    postDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!'
  },
  {
    image: MainImage,
    postcat1: 'Music',
    postcat2: 'Life',
    postTitle: 'Lorem ipsum dolor sit amet.',
    postDate: 'Lorem ipsum dolor sit amet.',
    postDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!'
  },
  {
    image: MainImage,
    postcat1: 'Music',
    postcat2: 'Life',
    postTitle: 'Lorem ipsum dolor sit amet.',
    postDate: 'Lorem ipsum dolor sit amet.',
    postDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!'
  },
  {
    image: MainImage,
    postcat1: 'Music',
    postcat2: 'Life',
    postTitle: 'Lorem ipsum dolor sit amet.',
    postDate: 'Lorem ipsum dolor sit amet.',
    postDes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!'
  },
]


const Post = () => {
  return (
  <>    
    {
      data.map(({image, postcat1,postcat2, postTitle,postDate,postDes},index)=>{
       
        return(
          <div className="post"> 
          <img src={image} alt="" className='postImg'/>
          <div className="postinfo">
            <div className="postcategory">
              <span className="postcat1">{postcat1}</span>
              <span className="postcat2">{postcat2}</span>
            </div>
            <span className="postTitle">{postTitle}</span>
            <hr />
            <span className="postDate">{postDate}</span>
          </div>
          <p className="postDes">{postDes}</p>
          </div>
        )
      })
    
    } 
  </> 
  )
}

export default Post
 */



const Post = () => {
  return (

    <div className="post"> 
    <img src={MainImage} alt="" className='postImg'/>
      
      <div className="postinfo">
        <div className="postcategory">
          <span className="postcat1">Music</span>
          <span className="postcat2">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit earum porro iure, tempore, incidunt mollitia qui debitis quas veniam atque, temporibus deserunt culpa maiores quae ipsam. Perspiciatis in, porro doloremque accusantium neque non excepturi consequatur alias? Aspernatur neque possimus odio, deleniti repellendus quod adipisci at vel blanditiis est commodi laudantium accusamus quis cupiditate a deserunt sequi excepturi doloremque, veritatis nobis alias sunt temporibus dolorem sed! Animi ut maxime suscipit facere officia facilis! Doloribus, veritatis nobis! Eos eveniet repellendus quibusdam. Animi fugit accusamus ullam dolorem nisi eius, at molestiae qui nemo deserunt beatae ducimus vel sapiente harum consectetur amet perferendis repellendus!</p>
    </div> 

)
}

export default Post