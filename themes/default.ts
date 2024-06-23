import type { Config } from "tailwindcss"
import content from './content'
import theme from "../tailwind.config";

const config: Config = {
    content,
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                'section-max-width' : '72rem',
                'section-min-height': '100vh',
                'section-padding': '1.5rem',
                'row-gap' : '4rem',
                'picture-radius': '1rem',
            },
            borderWidth: {
                'section-border': '0px',
            }
        },
    },
    plugins: [require('daisyui')],
};

export default config