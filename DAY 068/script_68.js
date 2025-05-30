
// torvalds
// gaearo
// sindresorhus
// tj
// yyx990803
// defunkt
// getify
// mojombo
// bchiang7
// octocat 

// const { use } = require("react");

function getProfileData(username)
{
    return fetch(`https://api.github.com/users/${username}`).then((res) => {
        if (!res.ok) throw new Error('User Not Found!');
        return res.json();
    });
}

function getRepos(username) 
{
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((res) => {
        if (!res.ok) throw new Error('User Not Found!');
        return res.json();
    });
}

function decorateProfileData(details)
{
    console.log(details);
    let data = `<div class="flex items-center space-x-6">
                        <img src="https://avatars.githubusercontent.com/u/86501479?v=4" alt="Profile Picture"
                            class="w-24 h-24 rounded-full border border-gray-300 shadow-md" />
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-900">Meet Hirapara</h2>
                            <p class="text-gray-600">@meethirpara01</p>
                            <p class="mt-2 text-sm text-gray-500">Web Developer | Passionate about building modern web
                                experiences</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 gap-4 text-center mt-6">
                        <div>
                            <p class="text-lg font-bold text-gray-900">42</p>
                            <p class="text-sm text-gray-600">Repositories</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-gray-900">128</p>
                            <p class="text-sm text-gray-600">Followers</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-gray-900">89</p>
                            <p class="text-sm text-gray-600">Following</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <a href="https://github.com/meethirpara01" target="_blank"
                            class="text-blue-600 hover:underline text-sm">View Full Profile</a>
                    </div>
                </div>`;

    card.innerHTML = data;
};

// getProfileData('meethirpara01').then(function(data)
// {
//     console.log(data);
// });


// getRepos('meethirpara01').then(function(data)
// {
//     console.log(data);
// });


let search = document.querySelector('.search');
let usernameinp = document.querySelector('.usernameinp');
let card = document.querySelector('.card');
search.addEventListener('click' , function()
{
    let username = usernameinp.value.trim();
    if (username.length > 0) 
    {
        getProfileData(username).then((data) =>
        {
            // console.log(data);
            decorateProfileData(data)
        })
    }
    else
    {
        alert();
    }

    
});

