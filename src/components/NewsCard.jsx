import React, { useState, useEffect } from 'react'
import { HiBookmark, HiOutlineBookmark, HiOutlineShare } from "react-icons/hi2";
import Loader from '../assets/Loader';
import loader from '../assets/Loader';
import { useGlobalContext } from './AppProvider'

import SocialModal from './SocialModal';


function NewsCard({ category }) {


    // API
    let API = 'https://newsdata.io/api/1/news?';
    const API_KEY = import.meta.env.VITE_API_KEY

    const { isLoading, state,results, dispatch } = useGlobalContext();
    // console.log(state.bookMarks)

    const fetchApiData = async (url) => {
        dispatch({ type: "SET_LOADING" })

        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: "GET_NEWS",
                payload: {
                    results: data.results,
                    totalResults: data.totalResults,
                }
            })
        }
        catch (error) {
            console.error(error.message)
        }

    }

    // To call the api function
    useEffect(() => {
        let timeOut = setTimeout(() => {
            // newsdata.io
            fetchApiData(`${API}&q=${state.query}&language=en&category=${category}&apikey=${API_KEY}`)
        }, 800);
        return () => clearTimeout(timeOut)
    }, [state.query])




    // const results = [
    //     {
    //         "title": "Horizon Forbidden West – Új előzetesen a nyugati vidékek kihívásai",
    //         "link": "https://www.pcguru.hu/hirek/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai/69101",
    //         "keywords": null,
    //         "creator": null,
    //         "video_url": null,
    //         "description": "Aloy kalandjának folytatásában úgy tűnik nem sok alkalmunk lesz tétlenül, malmozva ücsörögni.",
    //         "content": null,
    //         "pubDate": "2022-02-04 07:07:01",
    //         "image_url": "http://www.pcguru.hu/uploads/news/mid/horizon-forbidden-west-uj-elozetesen-a-nyugati-videkek-kihivasai-hirek-4acebfe659a8326cb803-mid.jpg",
    //         "source_id": "pcguru",
    //         "country": [
    //             "hungary"
    //         ],
    //         "category": [
    //             "entertainment"
    //         ],
    //         "language": "hungarian"
    //     }
    // ]

    const [shareModal, setShareModal] = useState(false)

    const pubDateFormatted = (date) => {
        const inputDate = new Date(`${date}`)
        const diffInMs = Date.now() - inputDate.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
        const humanReadableStr = rtf.format(diffInDays, "day");
        // console.log(`${humanReadableStr} ago`);
        return `${humanReadableStr} ago`
    }

    const handleBookmarks = (news) => {
        let oldData = JSON.parse(localStorage.getItem('news') || '[]')

        // console.log(oldData)
        console.log(state.bookMarks)
        // console.log(news.link);
        if (state.bookMarks.includes(news.link)) {
            oldData = oldData.filter((m) => m.link !== news.link)
        } else {
            oldData.push(news)
        }
        localStorage.setItem('news', JSON.stringify(oldData))
        // console.log(oldData)
        bookmarkState();
    }


    const bookmarkState = () => {
        let oldData = JSON.parse(localStorage.getItem('news') || '[]')
        let temp = oldData.map(news => news.link)
        dispatch({
            type: "BOOKMARKS_POST",
            payload: {
                bookMarks: [...temp]
            }
        })
    }


    if (isLoading) {
        return (
            <div className="flex justify-center h-96">
                {<Loader />}
            </div>
        )
    }

    return (
        <div className='nav-card mx-auto container grid grid-cols-4 md:grid-cols-2 gap-8'>
            {/* {isLoading && <Loader />} */}
            {results.map((news) => {
                let { creator, title, description, link, source_id, image_url, pubDate } = news;
                return (
                    <div className="card px-2 pt-2 bg-gray-200 rounded-xl" key={link}>
                        <img src={image_url} alt="image" className='card-img w-full h-64 rounded-md' />
                        <div className='p-4 pb-0 grid gap-3'>
                            <h2 className='text-2xl font-[600]'>{title.slice(0, 100)}</h2>


                            <div className="flex justify-between align-middle text-xs font-[300]">
                                <h1>Source: {source_id}</h1>

                                <p>{pubDateFormatted(pubDate)}</p>
                                <p> Author: {creator}</p>
                            </div>

                            <p>{description}</p>
                            <div className="card-bottom flex justify-between my-4">
                                <button className='bg-zinc-800 hover:bg-slate-900 rounded-md text-white px-4 py-2 '><a href={link} target="_blank">Read more</a></button>
                                <div className="bookmar-share">

                                    {/* <div className="bookmark" onClick={() => isBookmarked ? removeBookmark(article) : addBookmark(article)}>
                                        {isBookmarked ? <HiBookmark size={24} className="cursor-pointer" /> : <HiOutlineBookmark size={24} className="cursor-pointer" />}
                                    </div> */}

                                    <div><button onClick={() => handleBookmarks(news)}>{state.bookMarks.includes(news.link) ? <HiBookmark size={24} /> : <HiOutlineBookmark size={24} />}</button></div>

                                    <div className="share">
                                        <HiOutlineShare size={24} onClick={() => setShareModal(true)} className="cursor-pointer" />
                                        {shareModal && <SocialModal link={link} setShareModal={setShareModal} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

// .slice(0, 200)

NewsCard.defaultProps = {
    category: "top"
}

export default NewsCard