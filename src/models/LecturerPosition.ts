import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface LecturerPositionAttributes {
	id?: number;
	study_program_id?: number;
  lecturer: number;
  chief_lecturer: number;
  professor: number;
	created_at?: Date;
	updated_at?: Date;
}

export interface LecturerPositionInstance extends Sequelize.Instance<LecturerPositionAttributes>, LecturerPositionAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const LecturerPositionFactory: Factory<LecturerPositionInstance, LecturerPositionAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<LecturerPositionInstance, LecturerPositionAttributes> => {
	const attributes: SequelizeAttributes<LecturerPositionAttributes> = {
		lecturer: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
    },
		chief_lecturer: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
    },
		professor: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
    },
	};
	const LecturerPosition: Sequelize.Model<LecturerPositionInstance, LecturerPositionAttributes> = sequelize.define<
		LecturerPositionInstance,
		LecturerPositionAttributes
	>('lecturer_position', attributes, { underscored: true });

	LecturerPosition.associate = (models: ModelFactoryInterface): void => {
		LecturerPosition.belongsTo(models.StudyProgram, { onDelete: 'cascade' });
		// LecturerPosition.hasMany(models.Token, { onDelete: 'cascade' });
	};

	return LecturerPosition;
};
