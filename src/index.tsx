import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [ //tabela- nome do model no plural
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1100,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all("transaction")
    })
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody) //por padrão vem em texto por isso precisei parsear

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

