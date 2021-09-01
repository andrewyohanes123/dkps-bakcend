
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { DocumentInstance, DocumentAttributes } from '../models/Document';

const documentsRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<DocumentInstance> = Parser.parseQuery<DocumentInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<DocumentInstance> = await models.Document.findAndCountAll(parsed);
                const body: OkResponse = { data };

                res.json(body);
            },
        ),
    );

    router.get(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const document: DocumentInstance | null = await models.Document.findByPk(id);
                if (!document) throw new NotFoundError('Document tidak ditemukan');
                const body: OkResponse = { data: document };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: DocumentAttributes = req.body;
                const document: DocumentInstance = await models.Document.create(attributes);
                const body: OkResponse = { data: document };

                res.json(body);
            },
        ),
    );

    router.put(
        '/:id',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const attributes: DocumentAttributes = req.body;
                const document: DocumentInstance | null = await models.Document.findByPk(id);
                if (!document) throw new NotFoundError('Document tidak ditemukan');
                const updatedDocument: DocumentInstance = await document.update(attributes);
                const body: OkResponse = { data: updatedDocument };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const document: DocumentInstance | null = await models.Document.findByPk(id);
                if (!document) throw new NotFoundError('Document tidak ditemukan');
                await document.destroy();
                const body: OkResponse = { data: document };

                res.json(body);
            },
        ),
    );

    return router;
};

export default documentsRoutes;
    