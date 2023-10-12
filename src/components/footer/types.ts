export interface Links {
    title: React.ReactNode,
    links: Link[]
}

interface Link {
    text: React.ReactNode,
    href: string
}