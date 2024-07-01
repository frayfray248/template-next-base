import type { Config } from "tailwindcss"
import content from './content'
import theme from "../tailwind.config";

const config: Config = {
    content,
    plugins: [require('daisyui')],
};

export default config