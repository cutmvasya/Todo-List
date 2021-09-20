'use strict';


const tableName = "Tasks";

const fkName = "userId_on_tasks_fk";

module.exports = {
  up: (queryInterFace, sequelize) => queryInterFace.addConstraint(tableName, {
    fields: ["userId"],
    type: 'foreign key',
    name: fkName,
    references: {
      table: 'Users',
      field: 'id'
    },
    onDelete: 'cascade',
    onUpdate: 'cascade'
  }),

  down: (queryInterFace, sequelize) => queryInterFace.removeConstraint(tableName, fkName)
}