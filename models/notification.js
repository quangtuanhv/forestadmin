// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v5/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Notification = sequelize.define('notification', {
    createdAt: {
      type: DataTypes.BIGINT,
    },
    updatedAt: {
      type: DataTypes.BIGINT,
    },
    data: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    isRead: {
      type: DataTypes.INTEGER,
    },
    owner: {
      type: DataTypes.INTEGER,
    },
    relatedUser: {
      type: DataTypes.INTEGER,
    },
    book: {
      type: DataTypes.INTEGER,
    },
    transaction: {
      type: DataTypes.INTEGER,
    },
    conversation: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'notification',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v5/reference-guide/relationships#adding-relationships.
  Notification.associate = (models) => {
  };

  return Notification;
};
