function newLinkSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_LINK");
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: payload => {
    return payload;
  },
};

function newVoteSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator("New_Vote");
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => payload
};



module.exports = {
  newLink,
  newVote
};