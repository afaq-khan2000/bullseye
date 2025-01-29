const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.validate({ body: req.body, query: req.query, params: req.params, files: req.files }, { abortEarly: false });
    return next();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ code: 400, message: e.errors.join(", "), notify: true });
  }
};

module.exports = validateRequest;
