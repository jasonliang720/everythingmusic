import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json())
const PORT = 3001;
const API_KEY_YT = ""

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/music-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20official&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

app.get('/live-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20live&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

app.get('/bts-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20behind%20the%20scenes&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

app.get('/interview-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20interview&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

app.listen(PORT, () => {
    console.log(`ExpressJS server listening on port ${PORT}`);
  })