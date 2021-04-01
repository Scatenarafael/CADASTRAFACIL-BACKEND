const Client = require('../models/Client')

const showAllClients = async (req, res) => {
  try {
    let doc = await Client.find({});
    console.log(doc);
    res.status(200).send(doc)
  } catch (error) {
    res.send(error.message);
  }
}

const showClient = async (req, res) => {
  const id = req.params.id;
  try {
    let doc = await Client.find({ _id: id });
    console.log(doc);
    res.status(200).send(doc)
  } catch (error) {
    res.send(error.message);
  }
}


const saveClient = async (req, res) => {
  const client = new Client(req.body);

  client.save().then(
    doc => {
      console.log(doc)
      res.status(200).send(doc);
    }
  ).catch(
    err => {
      console.log(err)
    });

}

const deleteClient = async (req, res) => {
  const id = req.params.id;

  try {
    let doc = await Client.findOneAndDelete({ _id: id });
    res.status(200).send(doc);
  } catch (error) {
    res.send(error)
  }
}

// const changeClientdata = async (req, res) => {
//   const id = req.params.id;

//   try {
//     let doc = await Client.findOneAndUpdate(id,{req.body});
//     res.status(200).send(doc);
//   } catch (error) {
//     res.send(error)
//   }
// }

module.exports = { showAllClients, saveClient, deleteClient, showClient };