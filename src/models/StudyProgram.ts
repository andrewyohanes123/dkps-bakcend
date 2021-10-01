import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface StudyProgramAttributes {
	id?: number;
	name: string;
	type: 'technology' | 'humaniora';
	diploma: 3 | 4;
	department_id?: number;
	created_at?: Date;
	updated_at?: Date;
}

export interface StudyProgramInstance extends Sequelize.Instance<StudyProgramAttributes>, StudyProgramAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const StudyProgramFactory: Factory<StudyProgramInstance, StudyProgramAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<StudyProgramInstance, StudyProgramAttributes> => {
	const attributes: SequelizeAttributes<StudyProgramAttributes> = {
		name: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		type: {
			type: DataTypes.ENUM(['technology', 'humaniora']),
			allowNull: false
		},
		diploma: {
			type: DataTypes.ENUM(['3', '4']),
			allowNull: false
		},
	};
	const StudyProgram: Sequelize.Model<StudyProgramInstance, StudyProgramAttributes> = sequelize.define<
		StudyProgramInstance,
		StudyProgramAttributes
	>('study_program', attributes, { underscored: true });

	StudyProgram.associate = (models: ModelFactoryInterface): void => {
		StudyProgram.hasMany(models.StudyProgramScore, { onDelete: 'cascade' });
		StudyProgram.belongsTo(models.Department, { onDelete: 'cascade' });
	};

	return StudyProgram;
};
