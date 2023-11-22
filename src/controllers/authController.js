const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const photo = req.file;
  console.log(name, email, photo.path);
  try {
    return res.status(200).json({
      status: "SUCCESS",
      message: "User registered Succesfully",
      data: {
        name: name,
        email: email,
        photo: photo.path,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: error,
    });
  }
};

module.exports = { registerUser };
