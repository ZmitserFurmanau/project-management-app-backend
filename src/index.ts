import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect('mongodb+srv://Zmitser:300684amaTOR@cluster0.ak6vulq.mongodb.net/?retryWrites=true&w=majority');
    // `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.ak6vulq.mongodb.net/manager?retryWrites=true&w=majority`,
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
