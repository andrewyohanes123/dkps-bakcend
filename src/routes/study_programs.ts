
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { StudyProgramInstance, StudyProgramAttributes } from '../models/StudyProgram';

const studyprogramsRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<StudyProgramInstance> = Parser.parseQuery<StudyProgramInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<StudyProgramInstance> = await models.StudyProgram.findAndCountAll(parsed);
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
                const studyprogram: StudyProgramInstance | null = await models.StudyProgram.findByPk(id);
                if (!studyprogram) throw new NotFoundError('StudyProgram tidak ditemukan');
                const body: OkResponse = { data: studyprogram };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: StudyProgramAttributes = req.body;
                const studyprogram: StudyProgramInstance = await models.StudyProgram.create(attributes);
                const body: OkResponse = { data: studyprogram };

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
                const attributes: StudyProgramAttributes = req.body;
                const studyprogram: StudyProgramInstance | null = await models.StudyProgram.findByPk(id);
                if (!studyprogram) throw new NotFoundError('StudyProgram tidak ditemukan');
                const updatedStudyProgram: StudyProgramInstance = await studyprogram.update(attributes);
                const body: OkResponse = { data: updatedStudyProgram };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const studyprogram: StudyProgramInstance | null = await models.StudyProgram.findByPk(id);
                if (!studyprogram) throw new NotFoundError('StudyProgram tidak ditemukan');
                await studyprogram.destroy();
                const body: OkResponse = { data: studyprogram };

                res.json(body);
            },
        ),
    );

    return router;
};

export default studyprogramsRoutes;
    