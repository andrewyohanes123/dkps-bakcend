import Sequelize from 'sequelize';
import { SequelizeAttributes } from './typings/SequelizeAttributes';
import { Factory } from './typings/ModelInterface';
import ModelFactoryInterface from './typings/ModelFactoryInterface';

export interface DocumentFieldAttributes {
	id?: number;
	name: string;
  field_type: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface DocumentFieldInstance extends Sequelize.Instance<DocumentFieldAttributes>, DocumentFieldAttributes {
}

export interface Associate {
	(models: ModelFactoryInterface): void;
}

export const DocumentFieldFactory: Factory<DocumentFieldInstance, DocumentFieldAttributes> = (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes,
): Sequelize.Model<DocumentFieldInstance, DocumentFieldAttributes> => {
	const attributes: SequelizeAttributes<DocumentFieldAttributes> = {
		name: {
			type: DataTypes.STRING(191),
			allowNull: false,
		},
    field_type: {
      type: DataTypes.STRING(191),
      allowNull: false
    }
	};
	const DocumentField: Sequelize.Model<DocumentFieldInstance, DocumentFieldAttributes> = sequelize.define<
		DocumentFieldInstance,
		DocumentFieldAttributes
	>('document_field', attributes, { underscored: true });

	DocumentField.associate = (models: ModelFactoryInterface): void => {
		DocumentField.belongsTo(models.Document, { onDelete: 'cascade' });
		DocumentField.hasMany(models.FieldValue, { onDelete: 'cascade' });
	};

	return DocumentField;
};
