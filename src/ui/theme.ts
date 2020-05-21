import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { blueGrey } from '@material-ui/core/colors'
import { fade } from '@material-ui/core/styles/colorManipulator'
import 'typeface-lato'

export const BRAND_GREEN = '#86ab16'
export const SHADOW_COLOR = fade(blueGrey[100], 0.2)

export const theme = createMuiTheme({
    overrides: {
        MuiIconButton: {
            root: {
                color: blueGrey[600],
            },
        },
        // MuiLink: {
        //     root: {
        //         color: blue[800],
        //         textDecoration: 'underline',
        //
        //         '&:hover': {
        //             color: BRAND_GREEN,
        //             textDecoration: 'none',
        //         },
        //     },
        // },
        // MuiDivider: {
        //     root: {
        //         backgroundColor: blueGrey[100],
        //     },
        // },
        // MuiFormLabel: {
        //     asterisk: {
        //         color: red[400],
        //     },
        // },
        // MuiInput: {
        //     root: {
        //         color: blueGrey['800'],
        //     },
        //     underline: {
        //         '&:after': {
        //             borderBottom: `2px solid ${blueGrey['800']}`,
        //         },
        //         '&$focused:after': {
        //             transform: 'scaleX(1)',
        //         },
        //         '&:before': {
        //             borderBottom: `1px solid ${blueGrey['400']}`,
        //         },
        //         '&:hover:not($disabled):before': {
        //             borderBottom: `2px solid ${blueGrey['600']}`,
        //             // Reset on touch devices, it doesn't add specificity
        //             '@media (hover: none)': {
        //                 borderBottom: `1px solid ${blueGrey['400']}`,
        //             },
        //         },
        //     },
        // },
        // MuiOutlinedInput: {
        //     notchedOutline: {
        //         borderColor: blueGrey['200'],
        //
        //         '&:hover:not($disabled):before': {
        //             borderColor: blueGrey['600'],
        //         },
        //     },
        // },
        // MuiInputAdornment: {
        //     root: {
        //         color: blueGrey['800'],
        //     },
        // },
        MuiButton: {
            contained: {
                backgroundColor: blueGrey[50],
                color: blueGrey[700],
                boxShadow: 'none',

                '&:hover': {
                    backgroundColor: blueGrey[100],
                },
            },
            containedPrimary: {
                backgroundColor: blueGrey[700],

                '&:hover': {
                    backgroundColor: blueGrey[800],
                },
            },
            outlined: {
                fontWeight: 400,
                color: blueGrey[700],
                borderColor: blueGrey[200],
                textTransform: 'none',
            },
            outlinedPrimary: {
                color: blueGrey[700],
                borderColor: blueGrey[500],
                textTransform: 'none',
            },
            outlinedSecondary: {
                color: blueGrey[700],
                borderColor: BRAND_GREEN,
                textTransform: 'none',
            },
        },
        MuiSwitch: {
            root: {
                color: blueGrey[600],
            },
            thumb: {
                backgroundColor: '#ffffff',
            },
        },
        // MuiRadio: {
        //     root: {
        //         color: blueGrey[500],
        //     },
        // },
        // MuiCheckbox: {
        //     root: {
        //         color: blueGrey[600],
        //     },
        // },
        // MuiBottomNavigationAction: {
        //     root: {
        //         minWidth: 60,
        //
        //         '&$selected': {
        //             color: BRAND_GREEN,
        //         },
        //     },
        // },
        // MuiChip: {
        //     root: {
        //         backgroundColor: blueGrey[50],
        //         color: blueGrey[800],
        //         fontWeight: 600,
        //     },
        //     outlined: {
        //         color: blueGrey[800],
        //         borderColor: blueGrey[100],
        //     },
        // },
        // MuiCard: {
        //     root: {
        //         boxShadow: 'rgba(84, 110, 122, 0.1) 0px 0px 20px 0px',
        //     },
        // },
        // MuiListItem: {
        //     root: {
        //         '&$selected': {
        //             backgroundColor: blueGrey[100],
        //         },
        //     },
        //     button: {
        //         color: blueGrey[700],
        //
        //         '&:hover': {
        //             backgroundColor: blueGrey[50],
        //         },
        //     },
        // },
        // MuiListItemText: {
        //     root: {
        //         color: blueGrey[700],
        //
        //         '&:hover': {
        //             color: blueGrey[800],
        //         },
        //     },
        // },
        // MuiListItemIcon: {
        //     root: {
        //         color: blueGrey[500],
        //     },
        // },
        // },
        // breakpoints: {
        //     values: {
        //         xs: 0,
        //         sm: 576,
        //         md: 768,
        //         lg: 992,
        //         xl: 1200,
        //     },
    },

    palette: {
        common: {
            black: blueGrey[900],
        },

        primary: blueGrey,
        secondary: {
            main: BRAND_GREEN,
            contrastText: '#fff',
        },
        text: {
            primary: blueGrey[900],
            secondary: blueGrey[700],
            disabled: fade(blueGrey[900], 0.38),
            hint: fade(blueGrey[900], 0.38),
        },

        grey: blueGrey,
        background: {
            default: fade(blueGrey[50], 0.3),
        },
        divider: blueGrey[200],

        // action: {
        //     active: fade(blueGrey[900], 0.54),
        //     hover: fade(blueGrey[900], 0.08),
        //     // hoverOpacity: '.08',
        //     selected: fade(blueGrey[900], 0.14),
        //     disabled: blueGrey[300],
        //     disabledBackground: blueGrey[100],
        // },
    },
    shadows: [
        `none`,
        `0px 2px 1px -1px ${SHADOW_COLOR}`,
        `0px 3px 1px -2px ${SHADOW_COLOR}`,
        `0px 3px 3px -2px ${SHADOW_COLOR}`,
        `0px 2px 4px -1px ${SHADOW_COLOR}`,
        `0px 3px 5px -1px ${SHADOW_COLOR}`,
        `0px 3px 5px -1px ${SHADOW_COLOR}`,
        `0px 4px 5px -2px ${SHADOW_COLOR}`,
        `0px 5px 5px -3px ${SHADOW_COLOR}`,
        `0px 5px 6px -3px ${SHADOW_COLOR}`,
        `0px 6px 6px -3px ${SHADOW_COLOR}`,
        `0px 6px 7px -4px ${SHADOW_COLOR}`,
        `0px 7px 8px -4px ${SHADOW_COLOR}`,
        `0px 7px 8px -4px ${SHADOW_COLOR}`,
        `0px 7px 9px -4px ${SHADOW_COLOR}`,
        `0px 8px 9px -5px ${SHADOW_COLOR}`,
        `0px 8px 10px -5px ${SHADOW_COLOR}`,
        `0px 8px 11px -5px ${SHADOW_COLOR}`,
        `0px 9px 11px -5px ${SHADOW_COLOR}`,
        `0px 9px 12px -6px ${SHADOW_COLOR}`,
        `0px 10px 13px -6px ${SHADOW_COLOR}`,
        `0px 10px 13px -6px ${SHADOW_COLOR}`,
        `0px 10px 14px -6px ${SHADOW_COLOR}`,
        `0px 11px 14px -7px ${SHADOW_COLOR}`,
        `0px 11px 15px -7px ${SHADOW_COLOR}`,
    ],
    shape: {
        borderRadius: 3,
    },
    typography: {
        fontSize: 14,
        fontFamily: 'Lato, sans-serif',
        caption: {
            fontSize: 13,
        },
        htmlFontSize: 16,
    },
})
