import React from "react";
import "../css/User.css";
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Users({ user, photo }) {
    const navigate = useNavigate();

    const { id, name, username, email } = user;
    const { title, url } = photo || {};
    return (
        <Card className="card" sx={{ maxWidth: 300,height:330,backgroundColor: 'rgba(245, 245, 245, 1)'}} gutterBottom variant="h5" component="div">
      <CardActionArea >
        <CardMedia
          className="user-image"
          image={url}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {username}{email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate("/user-details/" + id)} size="small" color="primary" >
          Detayına git
        </Button>
      </CardActions>
    </Card>
        // <div className="card">
        //     {photo && (
        //         <div>
        //             <img className="user-image" src={url} alt={title} />
        //         </div>
        //     )}
        //     <div>
        //         <h2>{name}</h2>
        //     </div>
        //     <div>
        //         <h3>{username}</h3>
        //     </div>
        //     <div>
        //         <h5>{email}</h5>
        //     </div>
        //     <button
        //         className="details-button"
        //         onClick={() => navigate("/user-details/" + id)}
        //     >
        //         Detayına git
        //     </button>
        // </div>
    );
}

export default Users;
