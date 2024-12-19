import Link from "next/link";

export default function Arrow({ route }: { route: string }) {
    return <Link href={route} aria-label='jump to section' >
        <div className="w-8 h-8 border-r-8 border-b-8 rotate-45 animate-moveFade rounded-md"></div>
        <div className="w-8 h-8 border-r-8 border-b-8 rotate-45 animate-moveFade rounded-md" style={{ animationDelay: '0.2s' }}></div>
    </Link>
}