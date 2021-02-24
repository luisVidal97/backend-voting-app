import {RequestHandler} from 'express'

export const getVideos: RequestHandler = (req, res) => {
    return res.json({hello: 'hola'});
}

export default  {
    getVideos
}