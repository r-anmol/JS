const accountId = 14322
let accountEmail = "yo123@gmail.com"
var accountPassword = "1221"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "907867"
accountCity = "Delhi"
let accountState;

console.log(accountId);

// Prefer not to use var cuz of issue in block and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

