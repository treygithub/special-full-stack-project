module.exports = {

  addMenuItem: ( req, res ) => {
  const dbInstance = req.app.set('db');
    const {product_id, cat_id_table, description, image_url, price } = req.body;

dbInstance.newMenuPost([product_id, cat_id_table, description, image_url, price])
  .then( payload => {
    res.status(200).json(payload)});
          
},
  
getRequest: ( req, res ) => {
  const dbInstance = req.app.set('db');

dbInstance.fetchAll()
  .then( payload2 => res.status(200).json( payload2 ) )
    .catch( err => {
      res.status(500).send(err);
        console.log(err)
  });
},
  
  
deleteRequest: ( req, res, next ) => {
  const dbInstance = req.app.set('db');
    const { id } = req.params;
          
dbInstance.deleteProduct( [id] )
  .then( payload3  => 
    res.sendStatus(200).json(payload3 ) )
      .catch( err => {
        res.status(500).send(err);
          console.log(err)
    });
  },
  
}