// import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useState } from "react";
import logo from "../assets/imgs/bit-logo.png";
import close from "../assets/icons/close.svg";
import menu from "../assets/icons/menu.svg";
import "../assets/css/main.css";

function Logo() {
    return (
        <div className="logo">
            <a href="/" className="logo__link">
                <img src={logo} alt="Logo Bit" className="logo__img" />
                <h1 className="logo__title">BitEric</h1>
            </a>
        </div>
    );
}

function List() {
    return (
        <ul className="header__list">
            <li className="header__item">
                <a href="#!" className="header__link">
                    Home
                </a>
            </li>
            <li className="header__item">
                <a href="#!" className="header__link">
                    About
                </a>
            </li>
            <li className="header__item">
                <a href="#!" className="header__link">
                    Projects
                </a>
            </li>
            <li className="header__item">
                <a href="#!" className="header__link">
                    Contact
                </a>
            </li>
        </ul>
    );
}

function Button() {
    return (
        <div className="cta">
            <a href="#!" className="btn btn--login">
                Login
            </a>
            <a href="#!" className="btn btn--signup">
                Sign Up
            </a>
        </div>
    );
}

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <div className={`mobile ${isMenuOpen ? "show" : ""}`}>
                        <div
                            className="mobile__overlay"
                            onClick={toggleMenu}
                        ></div>
                        <div className="mobile__menu">
                            <div className="mobile__close-wrap">
                                <button
                                    className="mobile__close"
                                    onClick={toggleMenu}
                                >
                                    <img
                                        src={close}
                                        alt=""
                                        className="mobile__close-icon"
                                    />
                                </button>
                            </div>
                            <List />
                            <Button />
                        </div>
                    </div>

                    <div className="menu" id="menu" onClick={toggleMenu}>
                        <button className="menu__btn">
                            <img src={menu} alt="" className="menu__icon" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

function DesktopMenu() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__desktop">
                        <Logo />
                        <List />
                        <Button />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Header() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // if (!isDesktop) return MobileMenu();
    return isDesktop ? <DesktopMenu /> : <MobileMenu />;
}
