import Link from 'next/link'

export const NLink = ({ href, children, ...rest }) => (
    <Link href={href}>
        <a {...rest}>
            {children}
        </a>
    </Link>
)
