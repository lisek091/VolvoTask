import { createTheme } from "@mui/material";
import { grey, lightBlue, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: '#f44336',
        },
        error: {
            main: red[700],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                textPrimary: {
                    backgroundColor: grey[800],
                    '&:hover': {
                        backgroundColor: grey[800],
                    }
                },

            },
        },
    },
});

export default theme