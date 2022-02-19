exports.createOne = (Model) => async (req, res, next) => {
  try {
    const newDoc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { newDoc },
    });

    next()
  } catch (error) {
      console.log(error);
  }
};
