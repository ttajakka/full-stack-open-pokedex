const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/break', (req, res) => {
  console.log('post to /break') // eslint-disable-line no-console
  var aaa = 7 // eslint-disable-line no-unused-vars
  aaa = aaa[0][0]
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
