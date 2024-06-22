import type { Config } from "tailwindcss"
import content from './content'

const config: Config = {
    content,
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
  plugins: [require('daisyui')],
};

export default config