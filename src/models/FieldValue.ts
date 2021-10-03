import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface FieldValueAttributes {
	id?: number;
	value: {[any: string]: string | number};
	created_at?: Date;
	updated_at?: Date;
}

export interface FieldValueInstance extends Sequelize.Instance<FieldValueAttributes>, FieldValueAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const FieldValueFactory: Factory<FieldValueInstance, FieldValueAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<FieldValueInstance, FieldValueAttributes> => {
	const attributes: SequelizeAttributes<FieldValueAttributes> = {
		value: {
			type: DataTypes.JSONB,
			allowNull: false,
		}
	};
	const FieldValue: Sequelize.Model<FieldValueInstance, FieldValueAttributes> = sequelize.define<
		FieldValueInstance,
		FieldValueAttributes
	>('field_value', attributes, { underscored: true });

	FieldValue.associate = (models: ModelFactoryInterface): void => {
		FieldValue.belongsTo(models.DocumentField, { onDelete: 'cascade' });
	};

	return FieldValue;
};
