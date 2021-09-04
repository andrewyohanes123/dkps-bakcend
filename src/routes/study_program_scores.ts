
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { StudyProgramScoreInstance, StudyProgramScoreAttributes } from '../models/StudyProgramScore';

const studyprogramscoresRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<StudyProgramScoreInstance> = Parser.parseQuery<StudyProgramScoreInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<StudyProgramScoreInstance> = await models.StudyProgramScore.findAndCountAll(parsed);
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
                const studyprogramscore: StudyProgramScoreInstance | null = await models.StudyProgramScore.findByPk(id);
                if (!studyprogramscore) throw new NotFoundError('StudyProgramScore tidak ditemukan');
                const body: OkResponse = { data: studyprogramscore };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: StudyProgramScoreAttributes = req.body;
                const studyprogramscore: StudyProgramScoreInstance = await models.StudyProgramScore.create(attributes);
                const body: OkResponse = { data: studyprogramscore };

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
                const attributes: StudyProgramScoreAttributes = req.body;
                const studyprogramscore: StudyProgramScoreInstance | null = await models.StudyProgramScore.findByPk(id);
                if (!studyprogramscore) throw new NotFoundError('StudyProgramScore tidak ditemukan');
                const updatedStudyProgramScore: StudyProgramScoreInstance = await studyprogramscore.update(attributes);
                const body: OkResponse = { data: updatedStudyProgramScore };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const studyprogramscore: StudyProgramScoreInstance | null = await models.StudyProgramScore.findByPk(id);
                if (!studyprogramscore) throw new NotFoundError('StudyProgramScore tidak ditemukan');
                await studyprogramscore.destroy();
                const body: OkResponse = { data: studyprogramscore };

                res.json(body);
            },
        ),
    );

    return router;
};

export default studyprogramscoresRoutes;
    