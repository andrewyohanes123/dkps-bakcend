import Sequelize from 'sequelize';
import ModelFactoryInterface from './typings/ModelFactoryInterface';
import { UserFactory } from './User';
import { TokenFactory } from './Token';
import { DocumentFactory } from './Document';
import { StudyProgramFactory } from './StudyProgram';
import { StudyProgramScoreFactory } from './StudyProgramScore';
import { DepartmentFactory } from './Department';
import { FieldValueFactory } from './FieldValue';
import { DocumentFieldFactory } from './DocumentField';
import { SimulationScoreFactory } from './SimulationScore';
import { LecturerPositionFactory } from './LecturerPosition';

const createModels: Function = (): ModelFactoryInterface => {
	const {
		DB_HOST,
		DB_DIALECT,
		DB_DATABASE = 'sirius',
		DB_USER = 'sirius',
		DB_PASS = 'sirius',
	}: NodeJS.ProcessEnv = process.env;
	const sequelize: Sequelize.Sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
		host: DB_HOST,
		dialect: DB_DIALECT,
		dialectOptions: {
			useUTC: true,
		},
		timezone: '+08:00',
		operatorsAliases: true,
		logging: process.env.SYSTEM_LOGGING === 'true' ? console.log : (msg: string) => { },
	});
	const db: ModelFactoryInterface = {
		sequelize,
		Sequelize,
		User: UserFactory(sequelize, Sequelize),
		Token: TokenFactory(sequelize, Sequelize),
		StudyProgram: StudyProgramFactory(sequelize, Sequelize),
		Document: DocumentFactory(sequelize, Sequelize),
		StudyProgramScore: StudyProgramScoreFactory(sequelize, Sequelize),
		Department: DepartmentFactory(sequelize, Sequelize),
		FieldValue: FieldValueFactory(sequelize, Sequelize),
		DocumentField: DocumentFieldFactory(sequelize, Sequelize),
		SimulationScore: SimulationScoreFactory(sequelize, Sequelize),
		LecturerPosition: LecturerPositionFactory(sequelize, Sequelize)
	};

	Object.keys(db).forEach(
		(model: string): void => {
			if (db[model].associate) {
				db[model].associate(db);
			}
		},
	);

	return db;
};

export default createModels;
