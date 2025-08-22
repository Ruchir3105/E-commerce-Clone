import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import {
    Container,
    Box,
    Grid,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import axios from "axios";

const ProfilePage = () => {
    const [formData, setFormData] = useState({ username: "", firstname: '', lastname: '', email: "", password: '', mobile: "" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/profile/register', formData)
            .then(response => {
                console.log('Data saved:', response.data);
            })
            .catch(error => {
                console.error('There was an error saving the data!', error);
            });
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/profile/login', formData)
            .then(response => {
                console.log('Data saved:', response.data);
            })
            .catch(error => {
                console.error('There was an error saving the data!', error);
            });
    }

    return (
        <Container
            maxWidth={false}
            sx={{
                width: {
                    xs: '88%',
                    md: '76%',
                },
                height: '100vh',
                mx: 'auto',
            }}
        >
            <Box sx={{ flexGrow: "1", padding: "4rem 0 2rem 0" }}>
                <Box>
                    <Typography variant="h4" component="h4" sx={{ textAlign: "left", color: "#484F56", fontWeight: "bold" }}>
                        My Account
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant="h6" component="h6" sx={{ textAlign: "left", color: "#484F56", fontWeight: "450" }}>
                                LOGIN
                            </Typography>
                        </div>
                        <form onSubmit={handleSubmitLogin}>
                            <div className="leftAlign" style={{ marginTop: "2rem" }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="USERNAME OR EMAIL ADDRESS"
                                    defaultValue=""
                                    sx={{ width: "100%" }}
                                />
                            </div>
                            <div className="leftAlign" style={{ marginTop: "2rem" }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="PASSWORD"
                                    defaultValue=""
                                    sx={{ width: "100%" }}
                                />
                            </div>
                            <div>
                                <div className="leftAlign">
                                    <FormControlLabel
                                        control={<Checkbox name="rememberMe" color="primary" />}
                                        label="Remember Me"
                                        sx={{ marginTop: "1rem" }}
                                    />
                                </div>
                                <div className="leftAlign" style={{ marginTop: "0.8rem" }}>
                                    <Button variant="contained" sx={{ backgroundColor: "#EAEDF0", color: "black" }}>
                                        LOGIN
                                    </Button>
                                </div>
                                <div className="leftAlign" style={{ marginTop: "0.8rem" }}>
                                    Lost your password?
                                </div>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography variant="h6" component="h6" sx={{ textAlign: "left", color: "#484F56", fontWeight: "450" }}>
                                REGISTER
                            </Typography>
                        </div>
                        <form onSubmit={handleSubmitRegister}>
                            <div className="leftAlign" style={{ marginTop: "2rem" }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="EMAIL"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    sx={{ width: "100%" }}
                                />
                            </div>
                            <div className="leftAlign" style={{ marginTop: "2rem" }}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="PASSWORD"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    sx={{ width: "100%" }}
                                />
                            </div>
                            <div className="leftAlign" style={{ marginTop: "1.2rem" }}>
                                <Button type="submit" variant="contained" sx={{ backgroundColor: "#EAEDF0", color: "black" }}>
                                    REGISTER
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default ProfilePage;