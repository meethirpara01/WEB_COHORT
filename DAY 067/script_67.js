// Fetch
// Github Api
// api.github.com/users/asynchronousjavascriptor
// Fetch Always make a Promise




let username = document.querySelector('#text');
let btn = document.querySelector('#btn');
let pic = document.querySelector('#img');
let Sname = document.querySelector('#Sname');
let Susername = document.querySelector('#Susername');
let Sboi = document.querySelector('#Sboi');
let SFollowers = document.querySelector('#SFollowers');
let SFollowing = document.querySelector('#SFollowing');
let sectionv = document.querySelector('#sectionv');
sectionv.style.display = 'none';

btn.addEventListener('click', function ()
{
    let user = username.value;
    fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((data) => 
    {
        console.log(data);
        sectionv.style.display = 'flex';
        let propic = data.avatar_url;
        pic.src = propic;
        Sname.textContent = data.name;
        Susername.textContent = user;
        Sboi.textContent = data.bio;
        SFollowers.textContent = `Followers ${data.followers}`;
        SFollowing.textContent = `Following ${data.following}`;
    })
});




// {login: 'meethirpara01', id: 193013973, node_id: 'U_kgDOC4Eo1Q', avatar_url: 'https://avatars.githubusercontent.com/u/193013973?v=4', gravatar_id: '', …}
// avatar_url
// : 
// "https://avatars.githubusercontent.com/u/193013973?v=4"
// bio
// : 
// "Devloper"
// blog
// : 
// ""
// company
// : 
// null
// created_at
// : 
// "2024-12-27T20:08:03Z"
// email
// : 
// null
// events_url
// : 
// "https://api.github.com/users/meethirpara01/events{/privacy}"
// followers
// : 
// 0
// followers_url
// : 
// "https://api.github.com/users/meethirpara01/followers"
// following
// : 
// 1
// following_url
// : 
// "https://api.github.com/users/meethirpara01/following{/other_user}"
// gists_url
// : 
// "https://api.github.com/users/meethirpara01/gists{/gist_id}"
// gravatar_id
// : 
// ""
// hireable
// : 
// null
// html_url
// : 
// "https://github.com/meethirpara01"
// id
// : 
// 193013973
// location
// : 
// "surat"
// login
// : 
// "meethirpara01"
// name
// : 
// "Meet Hirpara"
// node_id
// : 
// "U_kgDOC4Eo1Q"
// organizations_url
// : 
// "https://api.github.com/users/meethirpara01/orgs"
// public_gists
// : 
// 0
// public_repos
// : 
// 2
// received_events_url
// : 
// "https://api.github.com/users/meethirpara01/received_events"
// repos_url
// : 
// "https://api.github.com/users/meethirpara01/repos"
// site_admin
// : 
// false
// starred_url
// : 
// "https://api.github.com/users/meethirpara01/starred{/owner}{/repo}"
// subscriptions_url
// : 
// "https://api.github.com/users/meethirpara01/subscriptions"
// twitter_username
// : 
// null
// type
// : 
// "User"
// updated_at
// : 
// "2025-05-16T13:59:05Z"
// url
// : 
// "https://api.github.com/users/meethirpara01"
// user_view_type
// : 
// "public"