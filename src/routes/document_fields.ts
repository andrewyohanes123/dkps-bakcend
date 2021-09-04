
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { DocumentFieldInstance, DocumentFieldAttributes } from '../models/DocumentField';

const documentfieldsRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<DocumentFieldInstance> = Parser.parseQuery<DocumentFieldInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<DocumentFieldInstance> = await models.DocumentField.findAndCountAll(parsed);
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
                const documentfield: DocumentFieldInstance | null = await models.DocumentField.findByPk(id);
                if (!documentfield) throw new NotFoundError('DocumentField tidak ditemukan');
                const body: OkResponse = { data: documentfield };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: DocumentFieldAttributes = req.body;
                const documentfield: DocumentFieldInstance = await models.DocumentField.create(attributes);
                const body: OkResponse = { data: documentfield };

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
                const attributes: DocumentFieldAttributes = req.body;
                const documentfield: DocumentFieldInstance | null = await models.DocumentField.findByPk(id);
                if (!documentfield) throw new NotFoundError('DocumentField tidak ditemukan');
                const updatedDocumentField: DocumentFieldInstance = await documentfield.update(attributes);
                const body: OkResponse = { data: updatedDocumentField };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const documentfield: DocumentFieldInstance | null = await models.DocumentField.findByPk(id);
                if (!documentfield) throw new NotFoundError('DocumentField tidak ditemukan');
                await documentfield.destroy();
                const body: OkResponse = { data: documentfield };

                res.json(body);
            },
        ),
    );

    return router;
};

export default documentfieldsRoutes;
    