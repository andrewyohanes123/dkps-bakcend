import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface StudyProgramScoreAttributes {
	id?: number;
	study_program_id?: number;
  diploma_three: number;
  diploma_four: number;
	score_type: '3.a.1' | '3.a.1.1' | '3.a.1.2';
	created_at?: Date;
	updated_at?: Date;
}

export interface StudyProgramScoreInstance extends Sequelize.Instance<StudyProgramScoreAttributes>, StudyProgramScoreAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const StudyProgramScoreFactory: Factory<StudyProgramScoreInstance, StudyProgramScoreAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<StudyProgramScoreInstance, StudyProgramScoreAttributes> => {
	const attributes: SequelizeAttributes<StudyProgramScoreAttributes> = {
		diploma_four: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
		diploma_three: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
		score_type: {
			type: DataTypes.ENUM(['3.a.1', '3.a.1.1', '3.a.1.2']),
			allowNull: false,
			defaultValue: '3.a.1'
		}
	};
	const StudyProgramScore: Sequelize.Model<StudyProgramScoreInstance, StudyProgramScoreAttributes> = sequelize.define<
		StudyProgramScoreInstance,
		StudyProgramScoreAttributes
	>('study_program_score', attributes, { underscored: true });

	StudyProgramScore.associate = (models: ModelFactoryInterface): void => {
		StudyProgramScore.belongsTo(models.StudyProgram, { onDelete: 'cascade' });
		// StudyProgramScore.hasMany(models.Token, { onDelete: 'cascade' });
	};

	return StudyProgramScore;
};
