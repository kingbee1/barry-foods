import React from 'react'
import Header from './components/Header'
import banner from './images/sushi.png'
import poundo from './images/poundo.png'
import ramen from './images/ramen.png'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-container'>
        
        <article className='banner flex'>
            <div className='banner-content'>
              <p className='banner-content-head'>Food</p>
              <p className='banner-content-head'>For Everybody</p>
              <p className='banner-content-sub'>Getting your cravings satisfied is our number one priority. We do the all the cooking, you do all the eating.</p>
              <div className='flex'>
                <button className='order-btn'>Order Now</button>
                <button className='reg-btn'>Register</button>
              </div>
              <div className='flex'>
                <p>avatar images</p>
                <p>Top Customers Review</p>
              </div>
            </div>
            <div className='banner-image' >
              <img src={banner} alt="banner" />
            </div>

        </article>
        <section className='cards flex'>
          <div className='service1'>
            <p>Online Order</p>
            <p>icon here</p>
          </div>         

          <div className='service1'>
            <p>Fast Delivery</p>
            <p>icon here</p>
          </div>

          <div className='service1'>
            <p>Best Meal</p>
            <p>icon here</p>
          </div>
        </section>

        <section className='food-container'>
          <div className='flex top-title'>
            <p className='delicacy'>Special Delicacies</p>
            <p>Nav toggle icon ish  </p>
          </div>
          <div className='food-card-tile flex'>
            <div className='card-tile'>
              <img src={banner} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
            <img src={poundo} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
              <img src={ramen} alt='noodles' />
              <p className='food-name'>Ramen with Omlette</p>
              <p className='food-desc'> Seasoned Ramen with Omlette.</p>
              <div className='flex justify'>
                <p className='food-price'>N4,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
              <img src={poundo} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>

          </div>
          {/* gg */}
          <div className='food-card-tile flex'>
            <div className='card-tile'>
              <img src={banner} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
            <img src={poundo} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
              <img src={ramen} alt='noodles' />
              <p className='food-name'>Ramen with Omlette</p>
              <p className='food-desc'> Seasoned Ramen with Omlette.</p>
              <div className='flex justify'>
                <p className='food-price'>N4,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>
            <div className='card-tile'>
              <img src={poundo} alt='pounder yam' />
              <p className='food-name'>Pounded Yammin</p>
              <p className='food-desc'>Pounded with efo elegusi.</p>
              <div className='flex justify'>
                <p className='food-price'>N2,500</p>
                <button className='food-btn'>Order Now</button>
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  )
}

export default Home
