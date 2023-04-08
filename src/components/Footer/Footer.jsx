import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-10 bg-black text-white font-semibold">
      <footer className="footer w-9/12 mx-auto py-10">
        <div>
          <p>CONTACT INFO</p>
          <p>Address: 4330 Hathazari, Chittagong, Bangladesh</p>
          <p>Phone: 12345-678901</p>
          <p>E-mail: mrrafi5869@gmail.com</p>
          <div className="flex mt-3">
            <AiFillFacebook className="text-2xl mr-4"></AiFillFacebook>
            <AiFillTwitterCircle className="text-2xl mr-4"></AiFillTwitterCircle>
            <AiFillYoutube className="text-2xl mr-4"></AiFillYoutube>
            <AiFillInstagram className="text-2xl mr-4"></AiFillInstagram>
            <AiFillLinkedin className="text-2xl mr-4"></AiFillLinkedin>
          </div>
        </div>

        <div>
          <span className="footer-title">INFORMATION</span>
          <a className="link link-hover">Delivery</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Prices drop</a>
          <a className="link link-hover">New Products</a>
          <a className="link link-hover">Best Sales</a>
        </div>
        <div>
          <span className="footer-title">My Account</span>
          <a className="link link-hover">Personal Info</a>
          <a className="link link-hover">Orders</a>
          <a className="link link-hover">Credit Slips</a>
          <a className="link link-hover">Addresses</a>
          <a className="link link-hover">My Wishlists</a>
        </div>
        <div>
          <span className="footer-title">INSTAGRAM POST</span>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-1.jpg"
              alt=""
            />
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-2.jpg"
              alt=""
            />
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-3.jpg"
              alt=""
            />
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-4.jpg"
              alt=""
            />
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-5.jpg"
              alt=""
            />
            <img
              src="https://www.mahardhi.com/prestashop/MT03/valley/modules/mt_customhtml4/img/insta-6.jpg"
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
