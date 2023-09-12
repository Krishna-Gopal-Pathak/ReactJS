import React from 'react'
import './Single.css'
import MainImages from '../assests/mainImage.jpg'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const Single = () => {
  return (
    <div className='singlepost'>
      <div className="singlepost-conatainer">
      <img src={MainImages} alt="" className='singlepost-img'/>
        <h1 className="singlepost-title">Lorem ipsum dolor sit amet.
          <div className="singlepost-edit">
            <FaEdit className='singlepost-edit-icon'/>
            <FaTrashAlt className='singlepost-edit-icon'/>
          </div>
        </h1>
        <div className="singlepostinfo">
            <span>Author: <b>Krishna</b></span>
            <span>1 hour ago</span>
        </div>
        <p className='singlepostdesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos et voluptatibus deleniti nihil possimus officia nobis quae, dolor ratione? Consequatur aspernatur magnam expedita vero exercitationem id natus sit iure. Nostrum fugit tenetur cumque aliquid commodi voluptas optio, corrupti atque neque culpa! Quibusdam, possimus. Qui dolor odit vitae culpa, voluptatem rem omnis modi pariatur molestias non! Minus impedit dolor officia molestias neque obcaecati exercitationem tenetur aspernatur magni officiis quae aut nam beatae dignissimos, quod itaque quisquam hic quam recusandae placeat quasi corporis ut assumenda? Officia aliquid quaerat dicta quasi reprehenderit libero vel illo voluptatem perferendis doloremque. Ea unde quas autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, illo, temporibus cumque molestias minima quasi maxime saepe, itaque nihil ipsa sequi deleniti ducimus perspiciatis dolores vel eaque quidem consectetur deserunt quod quos laudantium! Ex deserunt officiis velit harum molestias dolore, facilis laborum debitis eos nisi esse, veritatis autem. Pariatur qui esse non quas eos omnis itaque saepe! Exercitationem quaerat quidem repudiandae rerum? Corporis error enim possimus quas sapiente voluptates nam laborum voluptas! Saepe distinctio magni similique quis, iste iure vitae assumenda porro cupiditate repellat illo neque! Est hic amet ducimus quod recusandae maxime sequi deserunt, dolorem in officiis repellendus illo.</p>
      </div>
        
        
    </div>
  )
}

export default Single