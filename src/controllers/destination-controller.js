const supabaseService = require('../supabase/supabase-service');

exports.getAllDestinations = async (req, res) => {
  try {
    const destination = await supabaseService.getAllData('wisata');
    res.json({ message: 'success', destination });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.addNewDestination = async (req, res) => {
  const { name, description, city, address } = req.body;
  console.log(req.file);
  const imageName =
    new Date().toISOString().replace(/:/g, '-') + '-' + req.file.originalname;

  try {
    await supabaseService.uploadFile('destinations', req.file, imageName);
    const publicURL = await supabaseService.getImagePublicUrl(
      'destinations',
      imageName
    );
    const result = await supabaseService.insertData('wisata', {
      name,
      description,
      city,
      address,
      thumbail: publicURL,
    });
    res.json({ message: 'success', result });
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.deleteDestination = async (req, res) => {
  const idDestination = req.params.id;
  try {
    const result = await supabaseService.deleteDataById(
      'wisata',
      idDestination
    );
    if (result.data.length < 1) {
      res.status(404).json({ message: 'error data not found', result });
    } else {
      res.json(result);
    }
  } catch (error) {
    res.json({ message: 'error', error });
  }
};

exports.getDetailDestination = async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await supabaseService.getSpecificData(
      'wisata',
      'id',
      id
    );
    return res.status(200).json({
      message: 'success',
      destination: { destination },
    });
  } catch (error) {
    res.status(400).json({ message: 'error', error });
  }
};
