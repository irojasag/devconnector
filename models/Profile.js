const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, // Associate user by it's id
    ref: "users" // name of collection of     ^^
  },
  handle: {
    // For URL | SEO
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    // Select List [Junior Dev, Student, Senior Dev, etc...]
    type: String,
    required: true
  },
  skills: {
    type: [String], // Array of strings [PHP, JS, CSS, Angular ...]
    required: true
  },
  bio: {
    type: String
  },
  github: {
    type: String // Github repo to use Github api
  },
  experience: [
    // Array of objects
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        // Checkbox of "current"
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    // Array of objects
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        // Checkbox of "current"
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
