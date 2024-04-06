import express from 'express';
import morgan from 'morgan';

const app = express();

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => console.log(message.trim()),
    },
  }
);

app.use(morganMiddleware);
app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

const server = async () => {
  try {
    // await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Books Review app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
