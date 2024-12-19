import { Metadata } from "next"
import { GlobalStateProvider } from "src/contexts/GlobalStateContext"

export const metadata: Metadata = {
    title: 'FullstackLab.net | Dennis-Immanuel Czogalla - Fullstack Developer',
    description: "I'm a fullstack developer specialized in React.js, Next.js and Typescript who builds innovative web applications for desktop and mobile devices.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <GlobalStateProvider >
                    <div id="root">{children}</div>
                </GlobalStateProvider>
            </body>
        </html>
    )
}