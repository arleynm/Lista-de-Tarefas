const validarFieldTitle = (request, response, next) =>{
    const {body} =request;

    if(body.title == undefined){
        return response.status(400).json({message:"O campo title é obrigatorio na requisição"});
    }
    if(body.title == ''){
        return response.status(400).json({message:"Titulo nao pode ser vazio"});
    }

    next();
}

const validarFieldStatus = (request, response, next) =>{
    const {body} =request;

    if(body.status == undefined){
        return response.status(400).json({message:"O campo status é obrigatorio na requisição"});
    }
    if(body.status == ''){
        return response.status(400).json({message:"Status nao pode ser vazio"});
    }

    next();
}

module.exports = {
    validarFieldTitle,
    validarFieldStatus
}