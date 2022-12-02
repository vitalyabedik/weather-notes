import moment from "moment";

const rules = {
  required: (message = "This field") => ({
    required: true,
    message: `${message} is required `,
  }),
  whitespace: {
    whitespace: true,
  },
  isDateAfter: (message) => () => ({
    validator(_, value) {
      if (value.isSameOrAfter(moment())) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};

export default rules;
