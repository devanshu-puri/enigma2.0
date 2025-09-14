const blogData = [
  {
    id: 1,
    title: "Innovation in the Digital Age",
    excerpt: "Exploring how cutting-edge technology is reshaping industries and creating new opportunities for growth and development.",
    date: "March 15, 2024",
    author: "Tech Team",
    category: "Technology"
  },
  {
    id: 2,
    title: "The Art of Creative Problem Solving",
    excerpt: "Discover innovative approaches to tackling complex challenges and finding solutions that make a real impact.",
    date: "March 10, 2024",
    author: "Design Team",
    category: "Design"
  },
  {
    id: 3,
    title: "Building Community Through Innovation",
    excerpt: "How collaborative innovation brings people together and creates lasting positive change in our communities.",
    date: "March 5, 2024",
    author: "Community Team",
    category: "Community"
  },
  {
    id: 4,
    title: "Sustainable Tech for the Future",
    excerpt: "Exploring environmentally conscious technology solutions that benefit both business growth and our planet's wellbeing.",
    date: "Feb 28, 2024",
    author: "Green Tech Team",
    category: "Sustainability"
  }
]

let currentPage = 1
const postsPerPage = 2

const blogContainer = document.getElementById("blogContainer")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const pageNumbers = document.getElementById("pageNumbers")

function renderBlogs() {
  blogContainer.innerHTML = ""
  const start = (currentPage - 1) * postsPerPage
  const end = start + postsPerPage
  const blogs = blogData.slice(start, end)

  blogs.forEach(post => {
    const card = document.createElement("div")
    card.classList.add("blog-card")
    card.innerHTML = `
      <span class="blog-category">${post.category}</span>
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      <div class="blog-meta">By ${post.author} • ${post.date}</div>
      <a href="#" class="read-more">Read More →</a>
    `
    blogContainer.appendChild(card)
  })

  renderPagination()
}

function renderPagination() {
  pageNumbers.innerHTML = ""
  const totalPages = Math.ceil(blogData.length / postsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button")
    btn.innerText = i
    if (i === currentPage) btn.classList.add("active")
    btn.addEventListener("click", () => {
      currentPage = i
      renderBlogs()
    })
    pageNumbers.appendChild(btn)
  }

  prevBtn.disabled = currentPage === 1
  nextBtn.disabled = currentPage === totalPages
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--
    renderBlogs()
  }
})

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(blogData.length / postsPerPage)
  if (currentPage < totalPages) {
    currentPage++
    renderBlogs()
  }
})

renderBlogs()
