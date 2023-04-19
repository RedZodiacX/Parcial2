import { useEffect, useState } from "react"
import axios from "axios"

export const GetImages = () => {
    return async (dispatch) => {
        //dispatch(startLoading())
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/photos`
        );
        const data = response.data.map((img) => {
            return{
                albumId: img.albumId,
                id: img.id,
                title: img.title,
                url: img.url,
                thumbnailUrl: img.thumbnailUrl 
            };
        })
    }
    
}
