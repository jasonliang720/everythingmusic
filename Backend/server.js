import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json())
const PORT = 3001;
const API_KEY_YT = "AIzaSyDxg2iZctdrOTGKa9glT6AlqVzMjw98Hk0"

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req, res) => {
  res.send(
    `<h1>BACKEND ENDPOINTS FOR EVERYTHINGMUSIC: </h1>
    <p> /music-video/:id </p>
    <p> /lyric-video/:id </p>
    <p> /live-video/:id </p>
    <p> /bts-video/:id </p>
    <p> /playlist/:id </p>
    <p> /wiki/:search </p>
    `
  )
})

app.get('/music-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20official%20video&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

  app.get('/lyric-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20lyric%20video&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

app.get('/live-video/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20concert%20live&type=video&key=${API_KEY_YT}`)
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
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20interview%20talks&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });

  app.get('/playlist/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${id}%20playlist&type=video&key=${API_KEY_YT}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  });
  
  app.get('/wiki/:search', (req, res) => {
    const { search } = req.params
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${search}`)
    .then(response => response.json())
    .then(data => {
      res.send(
        data
      )
    })
  })

app.listen(PORT, () => {
    console.log(`ExpressJS server listening on port ${PORT}`);
  })