const { Book, index, User } = require('../models');

const resolvers = {
  Query: {

    me: async (_, args, context) => {
        
    }
    // tech: async () => {
    //   return Tech.find({});
    // },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },


    //  async deleteBook({ user, params }, res) {
  //   const updatedUser = await User.findOneAndUpdate(
  //     { _id: user._id },
  //     { $pull: { savedBooks: { bookId: params.bookId } } },
  //     { new: true }
  //   );
  //   if (!updatedUser) {
  //     return res.status(404).json({ message: "Couldn't find user with this id!" });
  //   }
  //   return res.json(updatedUser);
  // },
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
  },
};

// Define the query and mutation functionality to work with the Mongoose models.

module.exports = resolvers;
