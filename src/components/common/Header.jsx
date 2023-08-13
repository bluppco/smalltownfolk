import React from "react"
import NavigationItem from "./navigation/NavigationItem"
const Header = ( props ) => {

    const { pathname } = props
    const [ displayNavigation, updateDisplayNavigation ] = React.useState( false )

    return (
        <header className="bg-white fixed top-0 w-full z-50">
            <section className="bg-black py-4 text-center px-4 md:px-0">
                <p className="text-white text-sm !font-system">
                    <span>This is a demo website by </span>
                    <a href="https://blupp.co" target="_blank" rel="nofollow noindex" className="no_style">
                        <span className="no_style !text-sm underline">Blupp Co</span>.
                    </a>
                    <span>You can check the codebase on </span>
                    <a href="https://github.com/bluppco/smalltownfolk" target="_blank" rel="nofollow noindex" className="no_style">
                        <span className="no_style !text-sm underline">Github</span>.
                    </a>
                </p>
            </section>
            <section className="py-4 md:py-8">
                <div className="container xl:max-w-7xl lg:max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0">
                    <a href="/" className="w-28 md:w-36">
                        <img
                            src="https://blupp.b-cdn.net/smalltownfolk/STF-02.png?width=300"
                            className="object-fit w-full h-full"
                            alt="Small Talk Folk's logo"
                        />
                    </a>
                    <nav className="gap-12 items-center hidden md:flex">
                        <NavigationItem
                            text="Work"
                            link="/work"
                            highlight={ pathname === "/work" ? true : false }
                        />
                        <NavigationItem
                            text="About"
                            link="/about"
                            highlight={ pathname === "/about" ? true : false }
                        />
                        <NavigationItem
                            text="Careers"
                            link="/careers"
                            highlight={ pathname === "/careers" ? true : false }
                        />
                        <NavigationItem
                            text="Contact"
                            link="/contact"
                            highlight={ pathname === "/contact" ? true : false }
                        />
                    </nav>
                    {

                        displayNavigation &&
                        <div onClick={ ()=> updateDisplayNavigation( false ) } className="w-6 h-6">
                            <img
                                src="/cross.svg"
                                className="w-full h-full"
                            />
                        </div>

                    }
                    {

                        !displayNavigation &&
                        <div onClick={ ()=> updateDisplayNavigation( true ) } className="w-6 h-6">
                            <img
                                src="/menu.svg"
                                className="w-full h-full"
                            />
                        </div>

                    }
                </div>
                <div className="flex-grow relative">
                    <div className={`${ displayNavigation ?"absolute": "hidden"} bg-white w-full h-screen top-0 left-0`}>
                        <div className="flex items-center justify-center flex-col h-[80vh] gap-20">
                            <NavigationItem
                                text="Work"
                                link="/work"
                                highlight={ pathname === "/work" ? true : false }
                                mobile={ true }
                            />
                            <NavigationItem
                                text="About"
                                link="/about"
                                highlight={ pathname === "/about" ? true : false }
                                mobile={ true }
                            />
                            <NavigationItem
                                text="Careers"
                                link="/careers"
                                highlight={ pathname === "/careers" ? true : false }
                                mobile={ true }
                            />
                            <NavigationItem
                                text="Contact"
                                link="/contact"
                                highlight={ pathname === "/contact" ? true : false }
                                mobile={ true }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </header>

    )

}

export default Header
