function isOccupied(room) {
  return !(room == "");
}

function roomMates(rooms, floor) {
  let building = {};
  let floorNumber = 1;
  const numberOfRoomsPerFloor = 6;
  let roomCount = 1;
  for (let room of rooms) {
    if (!building[floorNumber]) {
      building[floorNumber] = [];
    }
    building[floorNumber] = [...building[floorNumber], room];
    if (roomCount > numberOfRoomsPerFloor) {
      floorNumber++;
      roomCount = 1;
    } else {
      roomCount++;
    }
  }

  const roomsOnTheFloor = building[floor] || [];

  const occupants = roomsOnTheFloor.filter(isOccupied);
  return occupants;
}

let rooms = [
  "Jill",
  "Jackson",
  "Jan",
  "Eve",
  "",
  "John",
  "Jimmy",
  "Tom",
  "",
  "Duke",
];

roomMates(rooms, 1);
roomMates(rooms, 2);

var a = ["foo", "bar", "foobar", "barfoo", "foofoo", "barbar"];
roomMates(a, 2);
