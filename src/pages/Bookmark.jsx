import React from 'react'

function Bookmark() {
    
    let oldData = JSON.parse(localStorage.getItem('news') || '[]')
    console.log(oldData)

    return (
        <>
            <h2>Your saved stories</h2>
            {
                oldData.map((savedNews) => {
                    let { creator, title, description, link, source_id, image_url, pubDate } = savedNews;

                    return (
                        <div className="cards" key={link}>
                            <a href={link}>Read more</a>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Bookmark