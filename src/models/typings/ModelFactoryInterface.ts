import Sequelize from 'sequelize';
import { UserInstance, UserAttributes } from '../User';
import { TokenInstance, TokenAttributes } from '../Token';
import { StudyProgramAttributes, StudyProgramInstance } from '../StudyProgram';
import { DocumentAttributes, DocumentInstance } from '../Document';
import { StudyProgramScoreAttributes, StudyProgramScoreInstance } from '../StudyProgramScore';
import { DepartmentAttributes, DepartmentInstance } from '../Department';
import { DocumentFieldAttributes, DocumentFieldInstance } from '../DocumentField';
import { FieldValueAttributes, FieldValueInstance } from '../FieldValue';
import { SimulationScoreAttributes, SimulationScoreInstance } from '../SimulationScore';
interface Obj {
	[s: string]: any;
}

export default interface ModelFactoryInterface extends Obj {
	sequelize: Sequelize.Sequelize;
	Sequelize: Sequelize.SequelizeStatic;
	User: Sequelize.Model<UserInstance, UserAttributes>;
	Token: Sequelize.Model<TokenInstance, TokenAttributes>;
	StudyProgram: Sequelize.Model<StudyProgramInstance, StudyProgramAttributes>;
	Document: Sequelize.Model<DocumentInstance, DocumentAttributes>;
	StudyProgramScore: Sequelize.Model<StudyProgramScoreInstance, StudyProgramScoreAttributes>;
	Department: Sequelize.Model<DepartmentInstance, DepartmentAttributes>;
	DocumentField: Sequelize.Model<DocumentFieldInstance, DocumentFieldAttributes>;
	FieldValue: Sequelize.Model<FieldValueInstance, FieldValueAttributes>;
	SimulationScore: Sequelize.Model<SimulationScoreInstance, SimulationScoreAttributes>;
}
