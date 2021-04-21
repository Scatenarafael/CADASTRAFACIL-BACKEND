const Client = require('../models/Client');
const fs = require('fs');
const path = require('path');

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
    let doc = await Client.findOne({ _id: id });
    
    console.log(doc);

    res.status(200).send(doc)

  } catch (error) {
    res.send(error.message);
  }
}


const saveClient = async (req, res) => {

  const {
    name,
    cpfcnpj,
    address,
    latitude,
    longitude,
    businessline,
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
    return images;
  });

  const client = new Client(
    {
      name: name,
      cpfcnpj: cpfcnpj,
      address: address,
      latitude: latitude,
      longitude: longitude,
      businessline: businessline,
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
    doc.images.forEach(async (image) => {
      // fs.unlinkSync(`${path.join(__dirname, '..', 'uploads') + image.path}`);

    })

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