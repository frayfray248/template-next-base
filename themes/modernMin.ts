import type { Config } from "tailwindcss"
import content from './content'

const config: Config = {
    content,
    theme: {
        colors: {
            'primary': '#000000', // Black
            'secondary': '#ffffff', // White
            'accent': '#4A5568', // Gray tone for accents
            'base-200': '#ffffff', // White
        },
        extend: {
            spacing: {
                'section-max-width' : '100%',
                'section-min-height': '0px',
                'section-padding': '0px',
                'row-gap' : '0px',
                'picture-radius': '0px',
            },
            borderWidth: {
                'section-border': '4px',
            }
        },

    },
    daisyui: {
        themes: [
            {
                'modernMin': {
                    'primary': '#ffffff', // Color of the white background in the image
                    'primary-content': '#000000', // Black for the content, to provide contrast
                    'secondary': '#f5f5f5', // Light grey for secondary elements
                    'secondary-content': '#333333', // Dark grey for secondary content
                    'accent': '#e0a45e', // Light brown/blonde hair color
                    'accent-content': '#ffffff', // White for content on accent color
                    'neutral': '#1a1a1a', // Dark color from the model's black shirt
                    'neutral-content': '#ffffff', // White for content on neutral color
                    'base-100': '#ffffff', // Main background color
                    'base-200': '#f0f0f0', // Slightly darker shade of white for base-200
                    'base-300': '#e0e0e0', // Even darker shade for base-300
                    'base-content': '#000000', // Black for the content
                    'info': '#5bc0de', // Light blue for informational elements
                    'info-content': '#ffffff', // White for content on info color
                    'success': '#5cb85c', // Green for success
                    'success-content': '#ffffff', // White for content on success color
                    'warning': '#f0ad4e', // Orange for warning
                    'warning-content': '#ffffff', // White for content on warning color
                    'error': '#d9534f', // Red for error
                    'error-content': '#ffffff' // White for content on error color
                }
            },
        ]
    },
    plugins: [require('daisyui')]
}

export default config