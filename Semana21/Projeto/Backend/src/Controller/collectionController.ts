import { Request, Response } from 'express'
import { triggerAsyncId } from 'node:async_hooks';
import { CollectionBusiness } from '../Business/collectionBusiness';
import { BaseDatabase } from '../Data/BaseDatabase';
import { CollectionDatabase } from '../Data/CollectionDatabase';
import { CollectionInput, CollectionRelationInput } from '../Entities/Collection';
import { IdGenerator } from '../Services/IdGenerator';
import { TokenManager } from '../Services/TokenManager';


export class CollectionController {

    async insertCollection(req: Request, res: Response) {
        try {
            const input: CollectionInput = {
                title: req.body.title,
                subtitle: req.body.subtitle,                
                token: req.params.token
            }

            const collectionBusiness = new CollectionBusiness(
                new CollectionDatabase,
                new IdGenerator,
                new TokenManager
            )

            await collectionBusiness.insertCollection(input)

            res.status(201).send("Inserted Successfully")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async insertCollectionRelation(req: Request, res: Response) {
        try {
            const input: CollectionRelationInput = {
                id_collection: req.body.id_collection,
                id_image: req.body.id_image
            }

            const collectionBusiness = new CollectionBusiness(
                new CollectionDatabase,
                new IdGenerator,
                new TokenManager
            )

            await collectionBusiness.insertCollectionRelation(input)

            res.status(201).send("Inserted Relation Successfully")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

}