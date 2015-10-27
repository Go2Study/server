/**
 * Created by cinjo on 10/26/2015.
 */
var User = {
    "name": {
        "type": "String",
        "optional": false,
        "description": "the name of the database table"
    },
    "idFieldName": {
        "type": "String",
        "optional": true,
        "default": "id",
        "description": "the name of the primary id column"
    },
    "versionFieldName": {
        "type": "String",
        "optional": true,
        "default": "version",
        "description": "optimistic lock version"
    },
    "createdFieldName": {
        "type": "String",
        "optional": true,
        "default": "date_created",
        "description": "creation time of the row"
    },
    "updatedFieldName": {
        "type": "String",
        "optional": true,
        "default": "last_updated",
        "description": "last update time of the row"
    },
    "rowClass": {
        "type": "Row class",
        "optional": false,
        "description": "the Row class of this table"
    },
    "db": {
        "type": "DB class instance",
        "optional": false,
        "description": "the DB instance that the table belongs to"
    }
}