let menu = [
    {
        id: 1,
        title: "butter pancakes",
        category: "lunch",
        price: "$15.99",
        img:"pancakes.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eveniet ut asperiores quod commodi illo ducimus aliquam soluta? Optio, deserunt.'
    },
    {
        id: 2,
        title: "vanilla ice cream",
        category: "breakfast",
        price: "$10.99",
        img: "vanilla-ice-cream.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quam quas? Repellat praesentium asperiores veniam soluta labore minus, tenetur accusamus.'

    },
    
    {
        id: 3,
        title: "chocolate ice cream",
        category: "lunch",
        price: "$7.99",
        img: "chocolate-ice-cream.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quam quas? Repellat praesentium asperiores veniam soluta labore minus, tenetur accusamus.'

    },
    {
        id: 4,
        title: "toast",
        category: "lunch",
        price: "$3.99",
        img: "toast.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quam quas? Repellat praesentium asperiores veniam soluta labore minus, tenetur accusamus.'

    },
    {
        id: 5,
        title: "milk shake",
        category: "shakes",
        price: "$7.99",
        img: "milk-shake.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, doloremque modi ducimus iste perspiciatis mollitia? Ut at atque itaque recusandae.'

    },
    {
        id: 6,
        title: "princess sharwama",
        category: "breakfast",
        price: "$10.00",
        img: "shawarma.jpg",
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque distinctio beatae quae, tempora dolorum suscipit rem accusantium nulla pariatur velit!'

    },
    {
        id: 7,
        title: "hedge burger",
        category: "lunch",
        price: "$15.99",
        img: "burger.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fugiat eligendi unde inventore aspernatur ducimus dolorem autem cum vero facere.'

    },
    {
        id: 8,
        title: "chocolate cake",
        category: "breakfast",
        price: "$10.99",
        img: "chocolate-cake.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel optio quisquam dolor illum itaque sed vitae delectus quo dolores earum!'

    },
    {
        id: 9,
        title: "red velvet cake",
        category: "breakfast",
        price: "$7.99",
        img: "red-velvet.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est labore voluptas error adipisci et autem consequuntur amet blanditiis asperiores!'

    },
    {
        id: 10,
        title: "hot dog",
        category: "dinner",
        price: "$3.99",
        img: "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est labore voluptas error adipisci et autem consequuntur amet blanditiis asperiores!'

    }
]

const sectionCenter = document.querySelector('.section-center');
let container = document.querySelector('.filter-btns')
document.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)
    displayMenuBtns()   
})
function displayMenuItems(menuItems) {
    const displayItems = menuItems.map(function(item) {
        return `<article class= "section-center">
        <div class="menu-head"> 
        <div class="img">
            <img src=${item.img} alt="${item.title}">
        </div>
        </div>
        <div class="all-texts">
            <div class="flex">
                <div class="title-menu">
                    <h3>${item.title}</h3>
                </div>
                <div class="price">
                    <h3>${item.price}</h3>
                </div>
            </div>
            <hr>
            <div class="description">
                
                <p>${item.desc}</p>
            </div>
        </div>
    </article>`;
    })
    displayItems.join("");
    sectionCenter.innerHTML = displayItems;
}
function displayMenuBtns() {
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ["all"])
    const categoryBtn = categories.map(function(category) {
        return `<button class="filter-btn" data-category="${category}" type="button">${category}
        </button>`
    }).join("")
    container.innerHTML = categoryBtn
    const filterBtns = container.querySelectorAll(".filter-btn");
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.category
            const categoryItems = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }
            })
            if (category === "all") {
                displayMenuItems(menu)
            }else{
               displayMenuItems(categoryItems) 
            }
        })
    })
    
}
