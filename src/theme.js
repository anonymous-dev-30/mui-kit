import { useState, useMemo, createContext } from "react";
// import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material/styles";

const darkShades = {
    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
    },
    primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#434957",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509"
    },
    greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922"
    },
    redAccent: {
        100: "#f8dafe",
        200: "#f1b4fd",
        300: "#e98ffc",
        400: "#e269fb",
        500: "#db44fa",
        600: "#af36c8",
        700: "#832996",
        800: "#581b64",
        900: "#2c0e32"
    },
    blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632"
    },
}

const lightShades = {
    grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    },
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        // 
        400: "#f2f0f0",
        500: "#141b2d",
        600: "#434957",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c0e32",
        200: "#581b64",
        300: "#832996",
        400: "#af36c8",
        500: "#db44fa",
        600: "#e269fb",
        700: "#e98ffc",
        800: "#f1b4fd",
        900: "#f8dafe",
    },
    blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
    },
}


export const token = (mode) => (
    {...(mode === "dark" ? darkShades : lightShades)}
)

const themeSettings = (mode) => {
    const colors = token(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.primary[500],
                },
                neutral: {
                    dark: colors.primary[700],
                    main: colors.primary[500],
                    light: colors.primary[100],
                },
                background: {
                    main: colors.primary[500]
                },
                text: {
                    main: colors.primary[500],
                    primary: colors.primary[500],
                    secondary: colors.primary[500],
                    disabled: colors.grey[500],
                },
                error: {
                    main: colors.redAccent[100], 
                },
                warning: {
                    main: '#ff9800',
                },
                success: {
                    main: colors.greenAccent[100],
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.primary[500],
                },
                neutral: {
                    dark: colors.primary[700],
                    main: colors.primary[500],
                    light: colors.primary[100],
                },
                background: {
                    main: "#fcfcfc"
                },
                text: {
                    primary: colors.primary[500],
                    secondary: colors.primary[500],
                    disabled: colors.grey[500],
                },
                error: { 
                    main: colors.redAccent[100], 
                },
                warning: { 
                    main: '#ff9800', 
                },
                success: { 
                    main: colors.greenAccent[100], 
                },
            })
        }, 
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            }
        },
        // other components breaking code
    }
}

// avoid colorMode prop drilling 
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => prev === 'light' ? 'dark' : 'light')
    }), []);

    // cache the result of a calculation between re-renders
    const theme = useMemo(
        () => createTheme(themeSettings(mode))
    ,[mode]);

    return [theme, colorMode];
}