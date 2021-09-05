
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { SimulationScoreInstance, SimulationScoreAttributes } from '../models/SimulationScore';

const simulationscoresRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<SimulationScoreInstance> = Parser.parseQuery<SimulationScoreInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<SimulationScoreInstance> = await models.SimulationScore.findAndCountAll(parsed);
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
                const simulationscore: SimulationScoreInstance | null = await models.SimulationScore.findByPk(id);
                if (!simulationscore) throw new NotFoundError('SimulationScore tidak ditemukan');
                const body: OkResponse = { data: simulationscore };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: SimulationScoreAttributes = req.body;
                const simulationscore: SimulationScoreInstance = await models.SimulationScore.create(attributes);
                const body: OkResponse = { data: simulationscore };

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
                const attributes: SimulationScoreAttributes = req.body;
                const simulationscore: SimulationScoreInstance | null = await models.SimulationScore.findByPk(id);
                if (!simulationscore) throw new NotFoundError('SimulationScore tidak ditemukan');
                const updatedSimulationScore: SimulationScoreInstance = await simulationscore.update(attributes);
                const body: OkResponse = { data: updatedSimulationScore };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const simulationscore: SimulationScoreInstance | null = await models.SimulationScore.findByPk(id);
                if (!simulationscore) throw new NotFoundError('SimulationScore tidak ditemukan');
                await simulationscore.destroy();
                const body: OkResponse = { data: simulationscore };

                res.json(body);
            },
        ),
    );

    return router;
};

export default simulationscoresRoutes;
    