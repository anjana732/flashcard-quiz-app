import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import hintRoute from './routes/openai.route.js'
import {Server} from 'socket.io';
import http from 'http';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
  cors:{
    origin : "*"
  }
})

io.on("connection", (socket) => {
  console.log("Frontend connected: ", socket.id);
});

app.post('/github-event', (req, res) => {
  const payload = req.body;
  res.status(200).send("Received");
  console.log(payload);

io.emit("github_update", {
    message: "New update pushed to GitHub!",
    repo: payload.repository.full_name,
    commits: payload.commits,
  });

});

 

app.use('/api', hintRoute);

app.listen(PORT, ()=>{
     console.log(`Server running on http://localhost:${PORT}`);
})