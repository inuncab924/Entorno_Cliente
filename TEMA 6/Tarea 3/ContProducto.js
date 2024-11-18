class ContProductos{
        

}
var productos = [
    {
        id: '1',
        nombre: 'zanahoria',
        precio: 15.99,
        imagen: "https://cdn.pixabay.com/photo/2016/07/29/12/50/vegetable-1553195_1280.jpg"
    },
    {
        id: '3',
        nombre: 'Melón',
        precio: 60.00,
        imagen: "https://cdn.pixabay.com/photo/2023/09/27/02/39/pumpkin-8278499_1280.jpg"
    },
    {
        id: '4',
        nombre: 'Melocotones',
        precio: 12.50,
        imagen: "https://cdn.pixabay.com/photo/2019/07/31/16/44/peaches-4375600_960_720.jpg"
    },
    {
        id: '5',
        nombre: 'Naranjas',
        precio: 20.00,
        imagen: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg"
    },
    {
        id: '6',
        nombre: 'Mango',
        precio: 85.00,
        imagen: "https://media.istockphoto.com/id/686104710/es/foto/mango-fruta-y-rebanadas-de-mango.jpg?s=2048x2048&w=is&k=20&c=mva961qSVAkWu6IsZ8ss8gJXuQU56ZCF8TYGZVhC57E="
    },
    {
        id: '7',
        nombre: 'Manzana',
        precio: 45.00,
        imagen: "https://cdn.pixabay.com/photo/2016/07/21/09/04/apple-1532055_1280.jpg"
    }
];
    
  

    window.onload=()=>new ContProductos(productos);