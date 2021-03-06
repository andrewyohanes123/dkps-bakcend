import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface UserAttributes {
	id?: number;
	name: string;
	type: 'program_chief' | 'chief' | 'vice_director' | 'director' | 'head_team' | 'program_team' | 'administrator';
	username: string;
	password: string;
	department_id?: number;
	study_program_id?: number;
	created_at?: Date;
	updated_at?: Date;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const UserFactory: Factory<UserInstance, UserAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<UserInstance, UserAttributes> => {
	const attributes: SequelizeAttributes<UserAttributes> = {
		name: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
		type: {
			type: DataTypes.ENUM(['program_chief', 'chief', 'vice_director', 'director', 'head_team', 'program_team', 'administrator']),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(191),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
	};
	const User: Sequelize.Model<UserInstance, UserAttributes> = sequelize.define<
		UserInstance,
		UserAttributes
	>('user', attributes, { underscored: true });

	User.associate = (models: ModelFactoryInterface): void => {
		User.hasMany(models.Token, { onDelete: 'cascade' });
		User.belongsTo(models.Department, { onDelete: 'cascade' });
		User.belongsTo(models.StudyProgram, { onDelete: 'cascade' });
	};

	return User;
};
