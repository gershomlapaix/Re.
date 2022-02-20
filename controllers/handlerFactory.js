const catchAsync = require('../utils/catchAsync');
const ApiFeatures = require('./../utils/apiFeatures');

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({ status: 'success', data: { newDoc } });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res) => {
    const features = new ApiFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .paginate();

    const docs = await features.query;

    if (docs.length === 0) {
      res.json({
        status: 'No data found',
      });
    } else {
      res.json({
        status: 'success',
        results: docs.length,
        data: { docs },
      });
    }
  });

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

exports.getOne = (Modal) =>
  catchAsync(async (req, res, next) => {
    const doc = await Modal.findById({ _id: req.params.id });

    res.status(200).json({
      status: 'Success',
      data: {
        doc,
      },
    });
  });
