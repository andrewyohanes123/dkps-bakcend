import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface SimulationScoreAttributes {
	id?: number;
	study_program_id?: number;
  department_id?: number;
  capacity: number;
  registrant: number;
  selection_passed: number;
  new_reguler_student: number;
  new_transfer_student: number;
  reguler_student: number;
  transfer_student: number;
	created_at?: Date;
	updated_at?: Date;
}

export interface SimulationScoreInstance extends Sequelize.Instance<SimulationScoreAttributes>, SimulationScoreAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const SimulationScoreFactory: Factory<SimulationScoreInstance, SimulationScoreAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<SimulationScoreInstance, SimulationScoreAttributes> => {
	const attributes: SequelizeAttributes<SimulationScoreAttributes> = {
    capacity: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    new_reguler_student: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    new_transfer_student: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    registrant: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    reguler_student: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    selection_passed: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    },
    transfer_student: {
      type: DataTypes.INTEGER(32),
      allowNull: false
    }
	};
	const SimulationScore: Sequelize.Model<SimulationScoreInstance, SimulationScoreAttributes> = sequelize.define<
		SimulationScoreInstance,
		SimulationScoreAttributes
	>('simulation_score', attributes, { underscored: true });

	SimulationScore.associate = (models: ModelFactoryInterface): void => {
		SimulationScore.belongsTo(models.StudyProgram, { onDelete: 'cascade' });
		SimulationScore.belongsTo(models.Department, { onDelete: 'cascade' });
		// SimulationScore.hasMany(models.Token, { onDelete: 'cascade' });
	};

	return SimulationScore;
};
