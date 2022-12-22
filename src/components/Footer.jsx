import React, { useState } from "react";
import '../sass/footer/footer.scss'
import '../components/GlobalStyles/GlobalStyles.scss'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo_color.png'

const Footer = () => {


  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <div className="logo">
              <Link to=''>
               <img src={logo} alt="" />
              </Link>
            </div>

            <div className="address p-10">
               <i class="fa-solid fa-house"></i>
               <span>1 Võ Văn Ngân, phường Linh Chiểu TP. Thủ Đức, TP. Hồ Chí Minh</span>
            </div>

            <div className="phone-number p-10">
              <i class="fa-solid fa-phone"></i>
              <span>+8499999999</span>
            </div>

            <div className="gmail p-10">
              <i class="fa-solid fa-envelope"></i>  
              <span>latata@gmail.com</span>
            </div>

          </li>

          <li>
            <h3>Tài khoản</h3>
            <p>Đăng nhập</p>
            <p>Bản đồ</p>
            <p>Về chúng tôi</p>
          </li>

          <li>
            <h3>Mạng xã hội</h3>
            <p>
              <i class="fa-brands fa-facebook"></i>
              <span>Facebook</span>
            </p>
            <p>
              <i class="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </p>
            <p>
              <i class="fa-brands fa-twitter"></i>
              <span>Twitter</span>
            </p>
          </li>

          <li className="subscribe">
            <h2>Đăng ký</h2>
            <div className="input-group">
              <input type="gmail" placeholder="Nhập gmail" />
              <i class="fa-solid fa-paper-plane icon"></i>
            </div>
          </li>

        </ul>
      </div>
      <div className="background-black"></div>
    </footer>
  );
};

export default Footer;
