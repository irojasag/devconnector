const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  // Handle
  if (
    !Validator.isLength(data.handle, {
      min: 2,
      max: 40
    })
  ) {
    errors.handle = "Handle must be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle field is required";
  }

  // Status
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  // Skills
  if (Validator.isEmpty(data.status)) {
    errors.skills = "Skills field is required";
  }

  // Website URL
  if (!isEmpty(data.website) && !Validator.isURL(data.website)) {
    errors.website = "Not a valid URL";
  }

  // Youtube URL
  if (!isEmpty(data.youtube) && !Validator.isURL(data.youtube)) {
    errors.youtube = "Not a valid URL";
  }

  // Twitter URL
  if (!isEmpty(data.twitter) && !Validator.isURL(data.twitter)) {
    errors.twitter = "Not a valid URL";
  }

  // Linkedin URL
  if (!isEmpty(data.linkedin) && !Validator.isURL(data.linkedin)) {
    errors.linkedin = "Not a valid URL";
  }

  // Instagram URL
  if (!isEmpty(data.instagram) && !Validator.isURL(data.instagram)) {
    errors.instagram = "Not a valid URL";
  }

  return { errors, isValid: isEmpty(errors) };
};
