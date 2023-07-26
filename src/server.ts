import { app } from './app'
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => { 
  console.log(`Server listening on port ${PORT}`)
});
