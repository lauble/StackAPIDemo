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
    badgeCounts: {
      gold: item.badge_counts.gold,
      silver: item.badge_counts.silver,
      bronze: item.badge_counts.bronze,
    },
    location: item.location,
  }));
  showTable(usersResponse);
}

getStackExchangeUsers();

const showTable = (data) => {
  let table = `<tr>
    <th colspan=7>User Data</th>
  </tr>
  <tr>
    <th>account id</th>
    <th>display name</th>
    <th>profile image</th>
    <th>reputation</th>
    <th>badge counts</th>
    <th>location</th>
    </tr>`;

  // Loop to access all rows
  for (let item of data) {
    table += `<tr> 
        <td>${item.accountId} </td>
        <td>${item.displayName}</td>
        <td><image width="200px" height="auto" src=${item.profileImage} /></td> 
        <td>${item.reputation}</td>
        <td><b>gold:</b> ${item.badgeCounts.gold} <br/> silver: ${item.badgeCounts.silver} <br/> bronze: ${item.badgeCounts.bronze}</td>
        <td>${item.location}</td>
        </tr>`;
  }
  document.getElementById('users').innerHTML = table;
};
