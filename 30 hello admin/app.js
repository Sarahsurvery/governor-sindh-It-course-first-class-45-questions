var users = ['faizan', 'hira', 'bilal', 'admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("hello admin, would u like to apple?");
    }
    else {
        console.log("hello ".concat(user, ",'thank u so much'"));
    }
}
