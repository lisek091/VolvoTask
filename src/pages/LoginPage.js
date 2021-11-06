import React, { useState, useEffect, Fragment } from 'react';
import { Data } from '../data/stringData';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import '../styles/loginPage.css';



const LoginPage = () => {

    return (
        <Fragment>
            <Box>
                <Grid container>
                    <Grid item xs={1} sm={2} md={3} lg={4}>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2} justifyContent="space-evenly" textAlign="center" width="400px">
                            <Grid item xs={12} >
                                <Typography>{Object.values(Data.english.coms.loginpage1)}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{Object.values(Data.english.coms.loginpage1)}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{Object.values(Data.english.coms.loginpage1)}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-required"
                                    label="Login"
                                    autoComplete="current-login"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <div className="links">
                                    <div className="link1">
                                        <Link href="#" underline="none">{Object.values(Data.english.links.passwordforgot)}</Link>
                                    </div>
                                    <div className="link2">
                                        <Link href="#" underline="none">{Object.values(Data.english.links.support)}</Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant="contained" fullWidth>{Object.values(Data.english.button.login)}</Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Link href="https://www.volvo.com/en/" underline="none">{Object.values(Data.english.links.mainsite)}</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={2} md={3} lg={4}>
                    </Grid>
                </Grid>

            </Box>
        </Fragment >
    )
}

export default LoginPage
