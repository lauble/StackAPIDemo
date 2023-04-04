async function getStackExchangeUsers() {
    const apiUrl = "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow";

    // Make the API call
    const response = await fetch(apiUrl);

    // Parse the response into JavaScript objects
    const data = await response.json();
    const usersResponse = data.items.map(item => ({
        accountId: item.account_id,
        displayName: item.display_name,
        profileImage: item.profile_image,
        reputation: item.reputation
    }));

    // Output the first user's display name and reputation
    const firstUser = usersResponse[0];
    document.getElementById('userName').textContent = firstUser.displayName;
    document.getElementById('userRep').textContent = firstUser.reputation;
    console.log(`User: ${firstUser.displayName}, Reputation: ${firstUser.reputation}`);
}

getStackExchangeUsers();
