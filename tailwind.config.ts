import type { Config } from "tailwindcss"

import modernMin from "./themes/modernMin"
import defaultTheme from "./themes/default"

const theme = {
    'default' : defaultTheme,
    'modernMin' : modernMin
}
[process.env.THEME || 'default']

export default theme
