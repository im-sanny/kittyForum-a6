// post section
const allPost = async (searchText = '') => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await response.json();

  const postData = data.posts;
  const allPostContainer = document.getElementById("discuss-card");
  allPostContainer.textContent = '';
  
  postData.forEach((items) => {

    const div = document.createElement("div");
    div.innerHTML = `
    <div  class="lg:flex mt-5 justify-between gap-5">
    <div class="hero shadow-xl lg:w-4/6 rounded-lg  bg-[#797DFC1A]">
        <div class="hero-content px-5 lg:flex-row">
        
        <div class="avatar -mt-44 indicator">
                <span class="indicator-item badge ${items.isActive?"bg-red-600":"bg-green-400"}"></span>
                <div class="w-10 h-10 rounded-lg">
                    <img alt="Tailwind CSS examples"
                        src="${items.image}" />
                </div>
            </div>
            <div class="card-actions py-10">
                <div class="flex gap-14">
                    <p>#${items.category}</p>
                    <p>Author: ${items.author.name}</p>
                </div>
                <div>
                    <h3 class="text-1xl font-bold">${items.title}</h3>
                    <p>${items.description}</p>
                    <hr class="my-5 border-dashed ">
                    <div class="flex justify-between">
                        <div class="flex gap-10">
                            <p><i class="fa-regular fa-message"></i> ${items.comment_count}</p>
                            <p><i class="fa-regular fa-eye"></i> ${items.view_count}</p>
                            <p><i class="fa-regular fa-clock"></i> ${items.posted_time} min</p>
                        </div>
                        <div class="-mt-1 w-2/6 lg:w-96 flex justify-end">
                            <button class="btn bg-[#10B981] btn-sm btn-circle"><i class="fa-regular fa-envelope-open"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card mt-5 lg:mt-0 lg:w-2/6 bg-[#12132D0D] shadow-xl">
        <div class="p-4 ">
            <div class="flex justify-between my-2">
                <p>Title</p>
                <p><i class="fa-solid fa-check-double text-green-400"></i> Mark as read (<span>4</span>)</p>
            </div>
            <div class="bg-[#FFFF] p-2 gap-2 rounded-lg flex ">
            <p>10 Kids Unaware of Their Halloween Costume</p>
            <div class="flex w-20 justify-between">
                <p class="w-20"><i class="fa-regular fa-eye"></i> 1,568</p>
            </div>
        </div>
    </div>
</div>
    `;
    allPostContainer.appendChild(div);
  });
};

// latest post section
const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();

  const latestPosts = data;

  const latestContainer = document.getElementById("post-card");

  latestPosts.forEach((latestItem) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card lg:h-[500px] bg-base-100 shadow-xl">
          <figure class="px-5 pt-5">
              <img src="${latestItem.cover_image}" alt="Shoes"
                  class="rounded-xl bg-[#12132D0D" />
          </figure>
          <div class="card-body ">
              <h2 class="card-title"><i class="fa-regular fa-calendar-check"></i> ${latestItem.author.posted_date}</h2>
              <p class="text-1xl font-bold">${latestItem.title}</p>
              <p>${latestItem.description}</p>
              <div class="card-actions">
                  <div><img class="w-10 h-10" src="${latestItem.profile_image
                  }" alt=""></div>
                  <div>
                      <p class="text-1xl font-bold">${latestItem.author.name}</p>
                      <p class="">${latestItem.author.designation || "Unknown"}</p>
                  </div>
              </div>
          </div>
      </div>
      `;
    latestContainer.appendChild(div);
  });
};


// handle search
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    allPost(searchText);
}

latestPost();
allPost();
