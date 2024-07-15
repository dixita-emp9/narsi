import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'


const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,timestamp&limit=${props.limit}&access_token=${token}`)
                .then((resp) => {
                    const sortedFeeds = resp.data.data.sort((a, b) => b.timestamp - a.timestamp); // Sort posts based on timestamp in descending order
                    setFeedsData(sortedFeeds);
                    console.log(sortedFeeds)
                   
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className='d-flex'>
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
       </div>
    );
}

export default InstaFeeds;