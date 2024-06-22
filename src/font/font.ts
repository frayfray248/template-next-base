import { Inter, Roboto } from "next/font/google";

const theme = process.env.THEME

const inter = Inter({
    subsets: ["latin"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const className = {
    'default' : inter.className,
    'modernMin' : roboto.className
}[theme || 'default']

export default className