import Link from 'next/link'


function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className='btn'>{props.children}</a>
            </Link>
        )
    }

    return <button className='btn' onClick={props.onClick}>
        {props.children}
    </button>
}

export default Button
