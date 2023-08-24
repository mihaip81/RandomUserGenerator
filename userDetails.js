const url = new URL(window.location.href);
const user = JSON.parse(url.searchParams.get("user"));

console.log(user);

document.getElementById("user-details-hi").innerHTML = "Hi, my name is"
document.getElementById("user-details-image").src = user.picture.thumbnail;
document.getElementById("user-details-name").innerHTML = `${user.name.first} ${user.name.last}`;
document.getElementById("user-details-location").innerHTML = `I'm currently living in ${user.location.city}, ${user.location.state}, ${user.location.country}.`
document.getElementById("user-details-email").innerHTML = `My e-mail address is: "${user.email}".`
