const products = [
    {
        id: "Grt223",
        name: "Jugo Grande",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: ["/img/jugo-g.png", "/img/jugo-m.png", "/img/jugo-ch.png"],
        category: "jugos"
    },
    {
        id: "Grt224",
        name: "Jugo Mediano",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/jugo-m.png",
        category: "jugos"
    },
    {
        id: "Grt225",
        name: "Jugo Chico",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/jugo-ch.png",
        category: "jugos"
    },
    {
        id: "Grt226",
        name: "Gorra Mr. Jugo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/gorramrjugo.png",
        category: "merch"
    },
    {
        id: "Grt227",
        name: "Sudadera Mr. Jugo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/sudaderamrjugo.png",
        category: "merch"
    },
    {
        id: "Grt228",
        name: "Playera Mr. Jugo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/playeramrjugo.png",
        category: "merch"
    },
    {
        id: "Grt229",
        name: "Sandwich Serraniense",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/sandwichserrano.png",
        category: "comida"
    },
    {
        id: "Grt230",
        name: "Atún Especial",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae laborum laudantium beatae illo odit id alias consequuntur voluptas natus ex itaque animi eum voluptatibus reiciendis recusandae, ad dolorum, veritatis iste? Harum, sequi quia enim fugiat excepturi temporibus error? Laboriosam corporis nesciunt sunt et dignissimos excepturi, in ex explicabo suscipit.",
        price: 400,
        stock: 10,
        image: "/img/atunespecial.png",
        category: "comida"
    },

]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        //simulamos un retreaso de red de 2 seg
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}