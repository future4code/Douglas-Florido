export class Band{
    constructor(
    private id: string,
    private name: string,
    private genre: string,
    private responsible: string,
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getGenre(){
        return this.genre;
    }

    getResponsible(){
        return this.responsible;
    }   

   

}

export interface BandInputDTO{
    name: string,
    music_genre: string,
    responsible: string,
    token: string
}

// O nosso sistema deve deixar registrado todas as bandas que participarão
// dos três dias de shows. Para uma banda ser criada, precisamos das
// informações: nome, gênero musical principal a qual ela se identifica e o
// nome de um responsável (que pode ser qualquer membro dela). Não podem
// existir duas bandas com o mesmo nome. Somente administradores podem
// registrar bandas. Faça ao menos dois testes para checar se os dados estão
// corretos, sendo um em caso de erro e outro em caso de acerto.