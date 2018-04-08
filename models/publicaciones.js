let Publicacion = function (sequelize, Sequelize) {
    let modelo = sequelize.define(
        "Publicaciones",
        {
            "idPublicacion": {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            "fechaPublicacion": {
                notEmpty: true,
                type: Sequelize.DATE
            },
            "tituloPublicacion": {
                notEmpty: true,
                type: Sequelize.STRING
            },
            "imagenPublicacion": {
                notEmpty: true,
                type: Sequelize.STRING
            },
            "textoPublicacion": {
                notEmpty: true,
                type: Sequelize.STRING
            },
            "idSemillero": {
                type: Sequelize.INTEGER,
                references: {
                    // This is a reference to another model
                    model: "Semilleros",
                    // This is the column name of the referenced model
                    key: 'idSemillero',
                    // This declares when to check the foreign key constraint. PostgreSQL only.
                    deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );

    return modelo;
};

module.exports = Publicacion;