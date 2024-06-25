import { Inter, Roboto, Montserrat } from "next/font/google";

const theme = process.env.THEME

const inter = Inter({
    subsets: ["latin"]
})

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"]
})

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "400"]
})

const className = {
    'default' : inter.className,
    'modernMin' : montserrat.className
}[theme || 'default']

export default className