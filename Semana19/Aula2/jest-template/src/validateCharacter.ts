import {character} from './Entities/Types'

export const validateCharacter = (character: character):boolean => {
    if(!character.name || !character.life || !character.defense || !character.strength){
        return false
    }

    if(character.life <= 0 || character.defense <= 0 || character.strength <= 0){
        return false
    }
    return true

}