const {app} = require('./src/server/server.js');

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
