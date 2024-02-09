import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>the web page you are looking is not found</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound;