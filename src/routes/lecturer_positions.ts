
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { LecturerPositionInstance, LecturerPositionAttributes } from '../models/LecturerPosition';

const lecturerpositionsRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<LecturerPositionInstance> = Parser.parseQuery<LecturerPositionInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<LecturerPositionInstance> = await models.LecturerPosition.findAndCountAll(parsed);
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
                const lecturerposition: LecturerPositionInstance | null = await models.LecturerPosition.findByPk(id);
                if (!lecturerposition) throw new NotFoundError('LecturerPosition tidak ditemukan');
                const body: OkResponse = { data: lecturerposition };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: LecturerPositionAttributes = req.body;
                const lecturerposition: LecturerPositionInstance = await models.LecturerPosition.create(attributes);
                const body: OkResponse = { data: lecturerposition };

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
                const attributes: LecturerPositionAttributes = req.body;
                const lecturerposition: LecturerPositionInstance | null = await models.LecturerPosition.findByPk(id);
                if (!lecturerposition) throw new NotFoundError('LecturerPosition tidak ditemukan');
                const updatedLecturerPosition: LecturerPositionInstance = await lecturerposition.update(attributes);
                const body: OkResponse = { data: updatedLecturerPosition };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const lecturerposition: LecturerPositionInstance | null = await models.LecturerPosition.findByPk(id);
                if (!lecturerposition) throw new NotFoundError('LecturerPosition tidak ditemukan');
                await lecturerposition.destroy();
                const body: OkResponse = { data: lecturerposition };

                res.json(body);
            },
        ),
    );

    return router;
};

export default lecturerpositionsRoutes;
    