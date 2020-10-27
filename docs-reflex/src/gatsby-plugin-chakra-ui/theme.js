import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        brandPurple: "#673FB4",
        background: `#0A1D39`,
        modes: {
            dark: {
                ...defaultTheme.colors,
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                brandPurple: "#cccccc"
            }
        }
    },
}

export default theme
