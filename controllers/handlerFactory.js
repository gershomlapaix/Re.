const catchAsync = require("../utils/catchAsync");

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

// exports.getAll = (Model)=>{
//   catchAsync(async (req,res)=>{
//     let filter = {}

//     if
//   })
// }

exports.deleteOne = (Model) =>
  // returning the handler(refer to the closures)
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(`No Documente with id ${req.params.id} found`, 404)
      );
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
