import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = (props) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [show, handleShow] = useState(false);

  useEffect(() => {
    console.log(props.product);
    if (URLSearchParams) {
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, [props.product]);

  return (
    <header
      className="navbar-container"
      style={{ backgroundColor: (props.product || show) && "#324d67" }}
    >
      <p className="logo">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            alt="logo"
            width="150px"
            style={{
              filter:
                "invert(96%) sepia(4%) saturate(0%) hue-rotate(248deg) brightness(104%) contrast(103%)",
            }}
          ></img>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </header>
  );
};

export default Navbar;
