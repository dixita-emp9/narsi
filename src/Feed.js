import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, thumbnail_url, media_url,permalink } = props.feed
    let post;

    post = (
        <div className='post-container'>
            <a href={permalink} target='_blank'><img
                width='100%'
                height='445px'
                id={id}
                src={media_type === "VIDEO" ? thumbnail_url : media_url}
                alt={caption}
            /></a>
            {/* <div className='post-footer'>
                <p>{caption?.substring(0, 70)}....</p>
                <a href={media_url} target='_blank'>  <div className='post-footer-btn'>Read more</div></a>
            </div> */}
        </div>

    );

    // switch (media_type) {
    //     case "VIDEO":
    //         post = (
    //             <video
    //                 width='100%'
    //                 height='auto' 
    //                 src={thumbnail_url} 
    //                 type="video/mp4" 
    //                 controls playsinline>
    //             </video>
    //         )
    //         break;
    //     case "CAROUSEL_ALBUM":
    //         post = (
    //             <img 
    //                 width='100%'
    //                 height='auto'
    //                 id={id} 
    //                 src={media_url} 
    //                 alt={caption} 
    //             />
    //         );
    //         break;
    //     default:
    //         post = (
    //             <img 
    //                 width='100%'
    //                 height='auto'
    //                 id={id} 
    //                 src={media_url} 
    //                 alt={caption} 
    //             />
    //         );
    // }       

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;