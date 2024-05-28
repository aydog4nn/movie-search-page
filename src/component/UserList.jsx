import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/slices/UserSlices";
import { getAllPhotos } from "../redux/slices/PhotoSlice";
import Users from "./Users";
import "../css/UserList.css";

function UserList() {
    const dispatch = useDispatch();
    const { users } = useSelector((store) => store.user);
    const { imageURL } = useSelector((store) => store.photo);
    console.log(imageURL)
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllPhotos());
    }, []);

    return (
        <div className="all-users">
            {users && imageURL && users.map((user,index) => <Users key={user.id} user={user} photo={imageURL[index]}/>)}
            
        </div>
    );
}

export default UserList;
