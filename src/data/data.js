const products = [
    {
        id: "Grt223",
        name: "Jugo Grande",
        description: "Lorem ipsum",
        price: 400,
        stock: 10,
        image: "/img/jugo-g.png",
        category: "jugos"
    },
    {
        id: "Grt224",
        name: "Jugo Mediano",
        description: "Lorem ipsum",
        price: 400,
        stock: 10,
        image: "/img/jugo-m.png",
        category: "jugos"
    },
    {
        id: "Grt225",
        name: "Jugo Chico",
        description: "Lorem ipsum",
        price: 400,
        stock: 10,
        image: "/img/jugo-ch.png",
        category: "jugos"
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