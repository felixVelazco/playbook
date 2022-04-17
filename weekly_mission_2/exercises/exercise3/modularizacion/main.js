import User from "./user.js";
import Biography from "./biography.js";
import Post from "./post.js";

const userFelix = new User('Jose Felix', "Felix", "jose@correo.com");
console.log(userFelix);
console.log(userFelix.getNameAndNickname());



const biographyFelix = new Biography('Jose Felix', "Felix");
console.log(biographyFelix);
console.log("El perfil es público?");
console.log(biographyFelix.getIsProfilePublic());



const postFelix = new Post("Felix Velazco", "Me voy a casar!");
console.log(postFelix);
console.log("Reacciones: ");
console.log(postFelix.getReactions());
console.log("Total: "+postFelix.getTotalReactions());
