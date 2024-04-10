import React from 'react'
import allStyle from './all.module.css'
import Photo from '../../imgs/bags.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Icon1 from '../../imgs/icon1.png'
import Icon2 from '../../imgs/icon2.png'
import Icon3 from '../../imgs/icon3.png'
import { Link } from 'react-router-dom'

function all() {
  const allProducts = [
    {
      id: 0,
      photo: Photo,
      name: "BAG NUMBER 1",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 100,
    },
    {
      id: 1,
      photo: Photo,
      name: "BAG NUMBER 2",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 150
    },
    {
      id: 2,
      photo: Photo,
      name: "BAG NUMBER 3",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 200
    },
    {
      id: 3,
      photo: Photo,
      name: "BAG NUMBER 4",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 250
    },
    {
      id: 4,
      photo: Photo,
      name: "BAG NUMBER 5",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 300
    },
    {
      id: 5,
      photo: Photo,
      name: "BAG NUMBER 6",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 6,
      photo: Photo,
      name: "BAG NUMBER 7",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 7,
      photo: Photo,
      name: "BAG NUMBER 8",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 8,
      photo: Photo,
      name: "BAG NUMBER 9",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 9,
      photo: Photo,
      name: "BAG NUMBER 10",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 10,
      photo: Photo,
      name: "BAG NUMBER 11",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },
    {
      id: 11,
      photo: Photo,
      name: "BAG NUMBER 12",
      title: "მაგარი ჩანთაა შეიძინეთ არ ინანებთ ბავშვს ვფიცავარ, დაბალ ხარისხი მაღალი ხარისხი, მხოლოდ ჩვენთან!",
      price: 350
    },

  ]
  const newAllProducts = allProducts.map((e) =>
    <div className={allStyle.all_cards}>
      <div className={allStyle.cards}>
        <img src={e.photo} alt='' />
      </div>
      <h1>{e.name}</h1>
      <h3>{e.title}</h3>
      <h4>ფასი: {e.price} ლარი</h4>
      <div className={allStyle.btns}>
        <Link to="https://www.instagram.com/"><button>სრულად</button></Link>
        <button className={allStyle.sales}>ფასდაკლება</button>
      </div>
    </div>
  )
  return (
    <>
      <div className={allStyle.all_container}>
        {newAllProducts}
      </div>
      <div className={allStyle.icon_container}>
        <div className={allStyle.icon1_container}>
          <img src={Icon1} alt='' />
          <h1>უფასო მიტანის სერვისი</h1>
          <p>50+ ლარზე უფასო მიტანა ნებისმიერ წერტილში</p>
        </div>
        <div className={allStyle.icon1_container}>
          <img src={Icon2} alt='' />
          <h1>24/7 სამუშაო დრო</h1>
          <p>მეგობრული მომსახურეობა</p>
        </div>
        <div className={allStyle.icon1_container}>
          <img src={Icon3} alt='' />
          <h1>თანხის უკან დაბრუნების გარანტია</h1>
          <p>2 კვირის განმავლობაში პროდუქციის დაბრუნება</p>
        </div>
      </div>
    </>
  )
}

export default all
