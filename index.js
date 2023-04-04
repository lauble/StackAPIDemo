async function getStackExchangeUsers() {
  const apiUrl =
    'https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow';

  // Make the API call
  const response = await fetch(apiUrl);

  // Parse the response into JavaScript objects
  const data = await response.json();
  const usersResponse = data.items.map((item) => ({
    accountId: item.account_id,
    displayName: item.display_name,
    profileImage: item.profile_image,
    reputation: item.reputation,
  }));
  showTable(usersResponse);
}

getStackExchangeUsers();

const showTable = (data) => {
  let table = `<tr>
    <th>account id</th>
    <th>display name</th>
    <th>profile image</th>
    <th>reputation</th>
    </tr>`;

  // Loop to access all rows
  for (let item of data) {
    table += `<tr> 
        <td>${item.accountId} </td>
        <td>${item.displayName}</td>
        <td><image width="200px" height="auto" src=${item.profileImage} /></td> 
        <td>${item.reputation}</td>          
        </tr>`;
  }
  document.getElementById('users').innerHTML = table;
};
