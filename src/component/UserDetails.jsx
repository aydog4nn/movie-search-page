import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedUser } from "../redux/slices/UserSlices";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function UserDetails() {
    const { id } = useParams();
    const { users, selectedUser } = useSelector((store) => store.user);
    const { name, username, email } = selectedUser;

    const dispatch = useDispatch();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = () => {
        users &&
            users.map((user) => {
                if (user.id == id) {
                    dispatch(setSelectedUser(user));
                }
            });
    };

    return (
       
            <div style={{ padding:"20px",height:"100lvh"}}>
              
                <Card sx={{width: 275,backgroundColor:"#181818",color:"#fff"}}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                        >
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div" >
                            benevolent
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} >
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="bold">Learn More</Button>
                    </CardActions>
                </Card>
            
        </div>
    );
}

export default UserDetails;
