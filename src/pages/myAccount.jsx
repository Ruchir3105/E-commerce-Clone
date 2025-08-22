import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
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

const MyAccount = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const fetchData = () => {
        axios.get(`http://localhost:8080/profile/${params.id}`)
        .then(function(res){
            console.log(res.data);
            setUser(res.data);
        })
        .catch(function(error){
            console.error("Error fetching data: ", error);
        })
    }
    useEffect(() => {
        console.log("Testing");
        fetchData()
    }, [params.id]);
    useEffect(() => {
        console.log({ user });
    }, [user])
    const options = ["DASHBOARDS", "ORDERS", "ADDRESSES", "MY WALLET", "ACCOUNT DETAILS", "WISHLIST", "LOGOUT"];
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
                    <Grid item xs={12} md={3}>
                        <Grid item xs={6} md={3}>
                            {options.map((option) => (
                                <div className="leftAlign" style={{paddingTop: "0.4rem"}} key={option}>
                                    <Typography variant="h7" component="h7" sx={{ textAlign: "left", color: "#484F56", fontWeight: "400", textDecoration: "none", "&:hover": { textDecoration: "underline" }  }}>
                                        {option}
                                    </Typography>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={9} sx={{textAlign: "left"}}>
                        Hello {user.firstname} {user.lastname}
                        <br></br>
                        <br></br>
                        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default MyAccount;
