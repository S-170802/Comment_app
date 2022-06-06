import React, { useEffect, useState } from 'react'
import axios from '../config/axios';
import './Chat.styles.css';
import Avatar from '../assets/avatar.png'
const Chat = () => {
  const [ comments, setComments] = useState([])
  useEffect(() => {
    axios.get('/comments')
    .then(res => setComments(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='chat-box'>
        {
            comments.map((comment) => (
                <div className='chat-content'>
                    <img src={Avatar} className="avatar" alt="" />
                    <div className="detail">
                        <h4>{comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Chat