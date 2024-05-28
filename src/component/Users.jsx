import React from "react";
import "../css/User.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Users({ user, photo }) {
    const navigate = useNavigate();

    const { id, name, username, email } = user;
    const { title, url } = photo || {};
    return (
        <div style={{marginTop:"30px"}}>
            <Card
                className="card"
                sx={{
                    maxWidth: 300,
                    height: 330,
                    backgroundColor: "rgba(17, 17, 17, 0.8)",
                    marginLeft:"20px",
                    boxShadow:"1"
                }}
                gutterBottom
                variant="h5"
                component="div"
            >
                <CardActionArea>
                    <CardMedia className="user-image" image={url} alt={title} />
                    <CardContent>
                        <Typography variant="body1" color="white" style={{fontWeight:"bold"}}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {username}
                            {email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={() => navigate("/user-details/" + id)}
                        size="2xl"
                        color="primary"

                    >
                        Detayına git
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Users;
