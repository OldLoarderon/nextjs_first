import Link from 'next/link'
export default function FirstPost() {
    return (
    <>
    <h1>First Post</h1>
    <h2>
        {/* More on Link component & routing */}
        {/* https://nextjs.org/docs/api-reference/next/link */}
        {/* https://nextjs.org/docs/routing/introduction */}
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>
    </>
    )
}