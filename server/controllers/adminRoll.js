module.exports ={

getAdmin: ( req, res ) => {
    const dbInstance = req.app.set('db');
  
  dbInstance.admins()
    .then( payload => res.status(200).json( payload ) )
      .catch( err => {
        res.status(500).send(err);
          console.log(err)
    });
  }
}