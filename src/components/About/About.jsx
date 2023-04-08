import React from "react";
import img1 from "../../assets/image/about1.jpg";
import img2 from "../../assets/image/about2.jpg";
import img3 from "../../assets/image/about3.jpg";
import "./About.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination, Navigation } from "swiper";
const About = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between items-center py-20 px-[12%]">
      <div class="about-left mb-10 lg:mb-0">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCube, Pagination, Navigation]}
          className="mySwiper w-72 h-72"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="about-right lg:w-[54%]">
        <h1 className="text-yellow-300 text-4xl mb-4 text-center lg:text-left">About Us</h1>
        <p className="overflow-y-scroll h-56">
          Welcome to XYZ Jewelry, where every piece of jewelry is handcrafted
          with love and care to bring out the inner radiance in you. As a
          family-owned business with a passion for exquisite jewelry, we take
          pride in our unique designs and exceptional craftsmanship. In this
          article, we would like to share our story with you, and the
          inspiration behind our brand.
          <br />
          Our Collections: At XYZ Jewelry, we offer a wide range of collections
          to suit diverse styles and occasions. From timeless classics to
          contemporary designs, our collections feature an array of exquisite
          jewelry, including rings, necklaces, earrings, bracelets, and more.
          Whether you're looking for a stunning engagement ring, a meaningful
          gift for a loved one, or a statement piece for a special occasion, our
          collections are designed to captivate your heart and make you shine.
          <br />
          Our Customer Experience: At XYZ Jewelry, our customers are at the
          heart of everything we do. We are dedicated to providing an
          exceptional customer experience from start to finish. Our
          knowledgeable and friendly team is always ready to assist you in
          finding the perfect piece of jewelry, answer your questions, and
          provide personalized service. We also offer convenient and secure
          online shopping, free shipping, easy returns, and a lifetime warranty
          on our jewelry, giving you peace of mind with your purchase.
          <br />
          Join Us in the Sparkling Journey: We invite you to join us in the
          sparkling journey of XYZ Jewelry and experience the magic of our
          exquisite jewelry. Whether you're looking for a meaningful gift, a
          cherished keepsake, or a symbol of your love, we have something
          special for you. Explore our collections, discover the sparkle within,
          and let our jewelry become a part of your cherished memories. Thank
          you for choosing XYZ Jewelry, where every piece tells a story, and
          every sparkle shines with love.
        </p>
        <div class="address my-6">
          <ul>
            <li>
              <p>Address</p>
              <span class="mx-9">:</span>
              <p>Chittagong, Bangladesh</p>
            </li>
            <li>
              <p>Phone No</p>
              <span class="mx-6">:</span>
              <p>+91 987-654-4321</p>
            </li>
            <li>
              <p>Email ID</p>
              <span class="mx-9">:</span>
              <p>crowncoder@gmail.com</p>
            </li>
          </ul>
        </div>
        <div class="expertise">
          <h3>Our Collections</h3>
          <ul className="w-4/5 flex items-center justify-between">
            <li>
              <p>Ring</p>
            </li>
            <li>
              <p>Necklace</p>
            </li>
            <li>
              <p>Earing</p>
            </li>
            <li>
              <p>Gold Ring</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
