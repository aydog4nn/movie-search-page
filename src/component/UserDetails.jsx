import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedUser } from '../redux/slices/UserSlices';

function UserDetails() {

    const {id} = useParams();
    const {users,selectedUser} = useSelector((store) => store.user);
    const {name,username,email} = selectedUser;
    
    const dispatch = useDispatch();

    useEffect(() => {
        getUserById()
    },[])
    
    const getUserById = () => {
        users && users.map((user) => {
            if (user.id == id){
                
                dispatch(setSelectedUser(user));
            }
        })
    }


    return (
        <div>
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h1>{email}</h1>
        </div>
    )
}

export default UserDetails