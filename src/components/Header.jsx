import React, { useState, useEffect } from "react";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [activeMenuItem, setActiveMenuItem] = useState('intro');

    const links = [
        { id: 'intro', text: 'Introduce' },
        { id: 'stack', text: 'stack' },
        { id: 'project', text: 'Project' },
        { id: 'contact', text: 'Contact' }
    ];

    useEffect(() => {
        function handleScroll() {
            setScrollTop(document.documentElement.scrollTop);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        function setScreenSize() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setScreenSize();
        window.addEventListener('resize', setScreenSize);
        return () => {
            window.removeEventListener('resize', setScreenSize);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
    };

    const handleMenuItemClick = (id) => {
        setActiveMenuItem(id);
        if (isMobileMenuOpen) {
            handleMobileMenuToggle();
        }
    };

    useEffect(() => {
        function handleScrollHighlight() {
            links.forEach(link => {
                const element = document.getElementById(link.id);
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetTop = element.offsetTop - headerHeight;

                if (scrollTop >= offsetTop && scrollTop < offsetTop + element.offsetHeight) {
                    setActiveMenuItem(link.id);
                }
            });
        }

        window.addEventListener('scroll', handleScrollHighlight);
        return () => {
            window.removeEventListener('scroll', handleScrollHighlight);
        };
    }, [scrollTop, links]);

    return (
        <header className={`header ${scrollTop > 0 ? 'fixed' : ''} ${isMobileMenuOpen ? 'on' : ''}`}>
            <div className="fixed_header">
                <div className="inner">
                    <h1 className="logo">
                        <a href="/">CHO HYEJIN <br />PORTFOLIO</a>
                    </h1>
                    <div className="btn_wrap">
                        <a href="https://chohyejin53.github.io/" className="btn_blog">Blog</a>
                        <a href="https://github.com/Chohyejin53" className="btn_github">
                            <span className="blind">go to github</span>
                        </a>
                        <button className="btn_menu" aria-label="메뉴 열기" onClick={handleMobileMenuToggle}>
                            <span className="blind">메뉴 열기</span>
                        </button>
                        <button className="btn_close" aria-label="메뉴 닫기" onClick={handleMobileMenuToggle}>
                            <span className="blind">메뉴 닫기</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="inner">
                <ul className="gnb">
                    {links.map(link => (
                        <li key={link.id} className={activeMenuItem === link.id ? 'on' : ''}>
                            <a href={`#${link.id}`} onClick={() => handleMenuItemClick(link.id)}>{link.text}</a>
                        </li>
                    ))}
                </ul>
                <div className="menu_wrap">
                    <ul className="menu_list">
                        {links.map(link => (
                            <li key={link.id} className={activeMenuItem === link.id ? 'on' : ''}>
                                <a href={`#${link.id}`} onClick={() => handleMenuItemClick(link.id)}>{link.text}</a>
                            </li>
                        ))}
                        <li className="work">
                            <button onClick={() => window.open('/', '_blank')}>Blog</button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <button className="btn_top" onClick={scrollToTop}>Top</button> */}
        </header>
    );
};

export default Header;
