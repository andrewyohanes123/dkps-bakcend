
import express from 'express';
import ModelFactoryInterface from '../models/typings/ModelFactoryInterface';
import { Routes } from './typings/RouteInterface';
import a from '../middlewares/wrapper/a';
import { OkResponse } from './typings/BodyBuilderInterface';
import { PaginatedResult } from './typings/QueryInterface';
import sequelize from 'sequelize';
import { Parser } from '../helpers/Parser';
import NotFoundError from '../classes/NotFoundError';
import { DepartmentInstance, DepartmentAttributes } from '../models/Department';

const departmentsRoutes: Routes = (
    app: express.Application,
    models: ModelFactoryInterface,
): express.Router => {
    const router: express.Router = express.Router();

    router.get(
        '/',
        Parser.validateQ(),
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const parsed: sequelize.FindOptions<DepartmentInstance> = Parser.parseQuery<DepartmentInstance>(
                    `${req.query.q}`,
                    models,
                );
                const data: PaginatedResult<DepartmentInstance> = await models.Department.findAndCountAll(parsed);
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
                const department: DepartmentInstance | null = await models.Department.findByPk(id);
                if (!department) throw new NotFoundError('Department tidak ditemukan');
                const body: OkResponse = { data: department };

                res.json(body);
            },
        ),
    );

    router.post(
        '/',
        // validation,
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const attributes: DepartmentAttributes = req.body;
                const department: DepartmentInstance = await models.Department.create(attributes);
                const body: OkResponse = { data: department };

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
                const attributes: DepartmentAttributes = req.body;
                const department: DepartmentInstance | null = await models.Department.findByPk(id);
                if (!department) throw new NotFoundError('Department tidak ditemukan');
                const updatedDepartment: DepartmentInstance = await department.update(attributes);
                const body: OkResponse = { data: updatedDepartment };

                res.json(body);
            },
        ),
    );

    router.delete(
        '/:id',
        a(
            async (req: express.Request, res: express.Response): Promise<void> => {
                const { id }: any = req.params;
                const department: DepartmentInstance | null = await models.Department.findByPk(id);
                if (!department) throw new NotFoundError('Department tidak ditemukan');
                await department.destroy();
                const body: OkResponse = { data: department };

                res.json(body);
            },
        ),
    );

    return router;
};

export default departmentsRoutes;
    