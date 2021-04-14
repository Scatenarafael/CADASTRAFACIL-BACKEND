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

  const {
    name,
    cnpj,
    address,
    latitude,
    longitude,
    business_line,
    about,
    contactName,
    contactCel,
    contactBusiness_position
  } = req.body;

  const reqImages = req.files;
  console.log(reqImages);
  let images = [];

  reqImages.map(image => {
    images.push(
      {
        path: image.filename,
        url: `http://localhost:3333/uploads/${image.filename}`
      }
    );
  });

  const client = new Client(
    {
      name: name,
      cnpj: cnpj,
      address: address,
      latitude: latitude,
      longitude: longitude,
      business_line: business_line,
      about: about,
      contact:
      {
        name: contactName,
        cel: contactCel,
        business_position: contactBusiness_position
      },
      images: images
    }
  );
  // console.log(client);
  //       res.status(200).send(client);

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