

const datosPropiedades = [
    {
        imgPropiedad: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        tituloPropiedad: "Apartamento de lujo en zona exclusiva",
        tipPropiedad: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccionPropiedad: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitacionesPropiedad: 4,
        baniosPropiedad: 2,
        precioPropiedad: 20000000,
        fumar: false,
        mascota: false,
        modalidadPropiedad: "Venta"
    },
    {
        imgPropiedad: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        tituloPropiedad: "Apartamento acogedor en la montaña",
        tipPropiedad: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccionPropiedad: "789 Mountain Road, Summit Peaks, CA 23456",
        habitacionesPropiedad: 3,
        baniosPropiedad: 2,
        precioPropiedad: 450000,
        fumar: true,
        mascota: false,
        modalidadPropiedad: "Venta"
    },
    {
        imgPropiedad: "https://static.anuevayork.com/wp-content/uploads/2020/07/12174254/Que-ver-en-Brooklyn-El-barrio-de-Crown-Heights.jpg.webp",
        tituloPropiedad: "Penthouse de lujo con terraza panorámica",
        tipPropiedad: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccionPropiedad: "Fresno, Pine st, 456, usa",
        habitacionesPropiedad: 5,
        baniosPropiedad: 3,
        precioPropiedad: 80000000,
        fumar: true,
        mascota: true,
        modalidadPropiedad: "Venta"
    },
    {
        imgPropiedad: "https://static.anuevayork.com/wp-content/uploads/2015/02/14112113/Alquilar-un-apartamento-en-Nueva-York-con-Airbnb-Mejores-zonas-y-consejos-1500.jpg.webp",
        tituloPropiedad: "Apartamento en el centro de la ciudad",
        tipPropiedad: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccionPropiedad: "123 Main Street, Anytown, CA 91234",
        habitacionesPropiedad: 2,
        baniosPropiedad: 1,
        precioPropiedad: 300000,
        fumar: false,
        mascota: true,
        modalidadPropiedad: "Alquiler"
    },
    {
        imgPropiedad: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WSc-M5iGpwEhO-9uHh0q3UaVEHjDCMmXF5zibwV4g7MqWAT0hTVnyq_8LBKga40SnkU&usqp=CAU",
        tituloPropiedad: "Hermoso Departamento cercano a todo lo que buscas",
        tipPropiedad: "Un lugar increible, areas verdes, gimnasio, quincho, terraza. Con gran conectividad y a pasos del Mall Central",
        direccionPropiedad: "Estación Alameda 365, Santiago Centro, Chile",
        habitacionesPropiedad: 2,
        baniosPropiedad: 2,
        precioPropiedad: 500000,
        fumar: true,
        mascota: true,
        modalidadPropiedad: "Alquiler"
    },
    {
        imgPropiedad: "https://static.anuevayork.com/wp-content/uploads/2015/02/14113033/Las-mejores-zonas-para-alquilar-un-apartamento-en-Nueva-York.jpg.webp",
        tituloPropiedad: "Finalmente, la oportunidad que buscabas",
        tipPropiedad: "Cercano a aeropuerto, a cincominutos del metro, en pleno centro de Providencia",
        direccionPropiedad: "Pedro de Valdivia 3892",
        habitacionesPropiedad: 2,
        baniosPropiedad: 1,
        precioPropiedad: 480000,
        fumar: false,
        mascota: true,
        modalidadPropiedad: "Venta"
    },
    {
        imgPropiedad: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tituloPropiedad: "Apartamento en el centro de la ciudad",
        tipPropiedad: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        direccionPropiedad: "123 Main Street, Anytown, CA 91234",
        habitacionesPropiedad: 2,
        baniosPropiedad: 1,
        precioPropiedad: 300000,
        fumar: false,
        mascota: true,
        modalidadPropiedad: "Alquiler"
    },
    {
        imgPropiedad: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        tituloPropiedad: "Hermoso Departamento cercano a todo lo que buscas",
        tipPropiedad: "Un lugar increible, areas verdes, gimnasio, quincho, terraza. Con una conectividad y a pasos del Mall Central",
        direccionPropiedad: "Estación Alameda 365, Santiago Centro, Chile",
        habitacionesPropiedad: 2,
        baniosPropiedad: 2,
        precioPropiedad: 500000,
        fumar: true,
        mascota: true,
        modalidadPropiedad: "Alquiler"
    }
];



function cardVentas() {
    //alert("creando ventas....");
    const propVentas = document.getElementById("cardVentas");
    let textoPropiedades = "";
    let countVentas = 0;

    for (const propiedad of datosPropiedades) {

        if (propiedad.modalidadPropiedad === "Venta" && countVentas < 3) {

            //alert(countVentas);

            textoPropiedades += `
                    <div class="col-md-4 mb-4">

                        <div class="card">
                            <img src= ${propiedad.imgPropiedad} class="card-img-top" alt="Imagen del departamento"/>

                            <div class="card-body">
                                <h5 class="card-title"> ${propiedad.tituloPropiedad} </h5>
                                <p class="card-text"> ${propiedad.tipPropiedad} </p>
                                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccionPropiedad} </p>
                                
                                <p>
                                    <i class="fas fa-bed"></i> ${propiedad.habitacionesPropiedad} Habitaciones |
                                    <i class="fas fa-bath"></i> ${propiedad.baniosPropiedad} Baños
                                </p>

                                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precioPropiedad} </p>`

            if (propiedad.fumar === false) {
                //alert("no fumar!!!")
                textoPropiedades += `<p class="text-danger"> <i class="fas fa-smoking-ban"> </i> No se permite fumar </p>`
            } else if (propiedad.fumar === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>`
            }

            if (propiedad.mascota === false) {
                textoPropiedades += `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p>`
            } else if (propiedad.mascota === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas </p>`
            }

            textoPropiedades += `</div>`
            textoPropiedades += `</div>`
            textoPropiedades += `</div>
            `;
            countVentas += 1;
        }
    propVentas.innerHTML = textoPropiedades;
    }    
}

function cardAlquiler() {
    //alert("creando alquileres....");
    const propAlquiler = document.getElementById("cardAlquiler");
    let textoPropiedades = "";
    let countAlquiler = 0;

    for (const propiedad of datosPropiedades) {

        if (propiedad.modalidadPropiedad === "Alquiler" && countAlquiler < 3) {
            //alert(countAlquiler);
            textoPropiedades += `
                    <div class="col-md-4 mb-4">

                        <div class="card">
                            <img src= ${propiedad.imgPropiedad} class="card-img-top" alt="Imagen del departamento"/>

                            <div class="card-body">
                                <h5 class="card-title"> ${propiedad.tituloPropiedad} </h5>
                                <p class="card-text"> ${propiedad.tipPropiedad} </p>
                                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccionPropiedad} </p>
                                
                                <p>
                                    <i class="fas fa-bed"></i> ${propiedad.habitacionesPropiedad} Habitaciones |
                                    <i class="fas fa-bath"></i> ${propiedad.baniosPropiedad} Baños
                                </p>

                                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precioPropiedad} </p>`

            if (propiedad.fumar === false) {
                //alert("no fumar!!!")
                textoPropiedades += `<p class="text-danger"> <i class="fas fa-smoking-ban"> </i> No se permite fumar </p>`
            } else if (propiedad.fumar === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>`
            }

            if (propiedad.mascota === false) {
                textoPropiedades += `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p>`
            } else if (propiedad.mascota === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas </p>`
            }

            textoPropiedades += `</div>`
            textoPropiedades += `</div>`
            textoPropiedades += `</div>
            `;

            countAlquiler += 1;

        }
    propAlquiler.innerHTML = textoPropiedades;
    }
}


function cardPropiedades() {
    alert("creando full ventas....");
    const propVentas = document.getElementById("propVentas");
    let textoPropiedades = "";

    for (const propiedad of datosPropiedades) {

        if (propiedad.modalidadPropiedad === "Venta") {

            alert("hay una venta...");

            textoPropiedades += `
                    <div class="col-md-4 mb-4">

                        <div class="card">
                            <img src= ${propiedad.imgPropiedad} class="card-img-top" alt="Imagen del departamento"/>

                            <div class="card-body">
                                <h5 class="card-title"> ${propiedad.tituloPropiedad} </h5>
                                <p class="card-text"> ${propiedad.tipPropiedad} </p>
                                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccionPropiedad} </p>
                                
                                <p>
                                    <i class="fas fa-bed"></i> ${propiedad.habitacionesPropiedad} Habitaciones |
                                    <i class="fas fa-bath"></i> ${propiedad.baniosPropiedad} Baños
                                </p>

                                <p><i class="fas fa-dollar-sign"></i> ${propiedad.precioPropiedad} </p>`

            if (propiedad.fumar === false) {
                //alert("no fumar!!!")
                textoPropiedades += `<p class="text-danger"> <i class="fas fa-smoking-ban"> </i> No se permite fumar </p>`
            } else if (propiedad.fumar === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>`
            }

            if (propiedad.mascota === false) {
                textoPropiedades += `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas </p>`
            } else if (propiedad.mascota === true) {
                textoPropiedades += `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas </p>`
            }

            textoPropiedades += `</div>`
            textoPropiedades += `</div>`
            textoPropiedades += `</div>
            `;
        }
    propVentas.innerHTML = textoPropiedades;
    }    
}