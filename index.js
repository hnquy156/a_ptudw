const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { createPagination } = require('express-handlebars-paginate');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'hbs',
  engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
    defaultLayout: 'layout.hbs',
    helpers: {
      createPagination,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/sync', async (req, res) => {
  const models = require('./models/index');
  await models.sequelize.sync();
  res.send('SYNCED TABLES');
});

app.use('/', require('./routes/indexRoute'));

app.listen(3000, () => console.log('listening on', 3000));
