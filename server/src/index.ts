require('dotenv').config()
import express, { Request, Response} from "express"
import cors from "cors"
import db from "./db"
import Post from '../models/Post';


const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

app.get("/posts", async (req, res) => {
    try {
      const postsList = await Post.find({ });
      res.send(postsList);
      console.log(postsList);
    } catch (err) {
      console.log(err);
    }
  });

app.post('/posts', async (req: Request, res: Response) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content
    })
    const createdPost = await newPost.save()
    res.json(createdPost)
})

app.put('/post/:id', async (req: Request, res: Response) => {
    const newTitle = req.body.newTitle
    const id = req.body.id

    try {
        await Post.findById(id, (err, updatePost) => {
            updatePost.title = newTitle
            updatePost.save()
            res.send('updated')
        })
    } catch (err) {
        console.log('err')
    }
})

// put non fonctionnel

db.then(() => {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
})
