

export const FbLogo = (props) => {
    return(<svg viewBox="0 0 36 36" height="39" width="39" className={props.className}>
        <defs>
            <linearGradient
                x1="50%"
                x2="50%"
                y1="97.0782153%"
                y2="0%"
            >
                <stop offset="0%" stopColor="#0062E0"></stop>
                <stop offset="100%" stopColor="#19AFFF"></stop>
            </linearGradient>
        </defs>
        <path
            d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
        ></path>
        <path
            className="fill-current text-white"
            d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
        ></path>
    </svg>)
}

export const search = (props) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#9ba3af"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
}

export const Note = (props) => {
    return(<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke="white"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
    </svg>)
}

export const Logout = () => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke="white"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
        </svg>
    )
}