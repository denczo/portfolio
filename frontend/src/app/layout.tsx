import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'FullstackLab.net | Dennis-Immanuel Czogalla - Fullstack Developer',
    description: "I'm a fullstack developer who builds high performance web applications for desktop and mobile devices.",
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}