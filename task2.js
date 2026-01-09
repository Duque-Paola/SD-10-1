export class FriendNames {
  name1;
  name2;
  name3;

    constructor(name1,name2,name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3;
    }
}
    const amigos = new FriendNames("Amelie", "Jenna", "Roberta");
    console.log(amigos.name1);
    console.log(amigos.name2);
    console.log(amigos.name3);