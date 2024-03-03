// post section
const allPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();

  const allPost = data.posts;
  const allPostContainer = document.getElementById("discuss-card");
  allPost.forEach((items) => {
    // console.log(items);
    const div = document.createElement("div");
    div.innerHTML = `
    <div  class="lg:flex mt-5 justify-between gap-5">
    <div class="hero shadow-xl lg:w-4/6 rounded-lg  bg-[#797DFC1A]">
        <div class="hero-content px-5 lg:flex-row">
        
        <div class="avatar -mt-44 indicator">
                <span class="indicator-item badge bg-green-500"></span>
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

allPost();
