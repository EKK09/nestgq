{
  users {
    name
    uid
  }
}

mutation {
  createUser(createUserInput: { name: "David" }) {
    uid
    name
  }
}

subscription {
  messageAdded {
    content
  }
}
