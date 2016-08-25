module.exports = [
  {
    "method": "post",
    "url": "/auth/login",
    "delay": 1000,
    "response": function(){
      var username = this.request.body.username;

      if (username === 'NULL') {
        this.response.status = 404;
        return {message: 'user not found'}
      }

      var role = username === "admin" ? "ADMIN" : "USER";

      return {
        "username": username,
        "token": "THIS_IS_A_FAKE_TOKEN",
        "role": role
      }
    }
  },
  {
    "method": "delete",
    "url": "/auth/logout",
    "response": function(){
      this.response.status = 204;
    }
  }
];


