export const BASE_URL = "http://localhost:8081/api/"

export const converPlates = async (datos = []) => {
    
    const data = datos.map( item => {return {
        id : item.platoId,
        name: item.nombre,
        urlPhoto : item.urlFoto,
        
        description : item.descripcion,
        price : item.precio,
        categoryMenu : {
            id: item.platoCategoria.platoCategoriaId,
            name: item.platoCategoria.nombre
        },
        to : item.platoId,
        estado: item.estado
    }}) ;

    return data;

}

export const DefaultCategoryPlateAll = { id:0, name: "Todos", urlPhoto: "/images/tipoMenu/0.png",  description: "Todos los platos"}

export const converCategoriesPlate = (datos = []) => {

    const data =  datos.map( item => {return {
        id : item.platoCategoriaId,
        name: item.nombre,
        urlPhoto : item.urlFoto,
        description : item.descripcion,
    }})   

    return [DefaultCategoryPlateAll, ...data];
}

