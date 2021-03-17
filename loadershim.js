require('dotenv').config({
    path: `.env.development`,
  })
  
  global.___loader = {
    enqueue: jest.fn(),
  }
  