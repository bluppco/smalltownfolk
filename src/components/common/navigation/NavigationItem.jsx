const NavigationItem = ( props ) => {

    const {

        highlight,
        link,
        mobile,
        text,

    } = props
    return (
        <a href={ link } className="group">
            <p className={`${ mobile ? "text-xl": "text-sm"} font-bold font-karla uppercase tracking-[.25em]`}>{ text }</p>
            <div className={`${highlight?"w-full bg-black":"w-0 bg-primary group-hover:w-full"} h-1 transition-width duration-200 ease-in`}/>
        </a>
    )

}

export default NavigationItem
