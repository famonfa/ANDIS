



let localidades = [
    {id:'0', nombre:'Avellaneda', link:"../pages/buenosaires/avellaneda.html"},
    {id:'1', nombre:'Villa Gessel', link:"../pages/buenosaires/villagessel.html"},
    {id:'2', nombre:'Roque Perez', link:"../pages/buenosaires/roqueperez.html" },
    {id:'3', nombre:'Mar del Plata', link:"../pages/buenosaires/mardelplata.html"},
    {id:'4', nombre:'Chascomús', link:"../pages/buenosaires/chascomus.html"},
    {id:'5', nombre:'San Vicente', link:"../pages/buenosaires/sanvicente.html"},
    {id:'6', nombre:'Castelli', link:"../pages/buenosaires/castelli.html"},
    {id:'7', nombre:'Villa 31', link:"../pages/buenosaires/villa31.html"},
    {id:'8', nombre:'Mercedes', link:"../pages/buenosaires/mercedes.html"},
    {id:'9', nombre:'Bahía Blanca', link:"../pages/buenosaires/bahiablanca.html"},
    {id:'9', nombre:'Almirante Brown', link:"../pages/buenosaires/almirantebrown.html"},
    {id:'10', nombre:'Villa Cildañez', link:"../pages/buenosaires/villacildañez.html"},
    {id:'10', nombre:'Berazategui', link:"../pages/buenosaires/berazategui.html"},
   
    

    
];

const cajaBsas = document.getElementById('card-bsas');

for (const localidad of localidades) {
    const divLocalidad = document.createElement('div');
    const linkLocalidad = document.createElement('a');
    const nombreLocalidad = document.createElement('h2');

    linkLocalidad.setAttribute('href', localidad.link)
    divLocalidad.className = 'card-loc';
    linkLocalidad.className = 'link-a';
    nombreLocalidad.className = 'nombre-localidad';
    
   
  
    nombreLocalidad.append(localidad.nombre);
    linkLocalidad.append(nombreLocalidad)
    divLocalidad.append(linkLocalidad);
    cajaBsas.append(divLocalidad)

  
}



