/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let listOfFriends = document.createElement('ul');
  friends.forEach(function(friend) {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName} ${friend.lastName}`;
    listOfFriends.append(li);
  });
  document.documentElement.append(listOfFriends);
  return listOfFriends;
}
