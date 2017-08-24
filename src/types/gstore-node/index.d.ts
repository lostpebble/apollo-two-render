import {DatastoreEntityKey, SchemaDefinition, SchemaPropertyDefinition} from "pebblebed";

module "gstore-node" {
    const model: (entityName: string, schema: Schema<T>) => DatastoreModel<T>;
    const connect: (datastore: object) => void;
    const transaction: () => DatastoreTransaction;
    const save: (entity: DatastoreEntity|DatastoreEntity[], transaction?: DatastoreTransaction) => Promise<void>;

    export interface DatastoreTransaction {
        run(): Promise<any[]|void>;
        commit(): Promise<any[]|void>;
        rollback(): Promise<void>;
        get(keys: []): Promise<any>;
        save(entities: DatastoreSaveEntity|DatastoreSaveEntity[]): void;
    }

    export interface DatastoreSaveEntity {
        key: DatastoreEntityKey;
        data: object;
    }

    export class Schema<T> {
        constructor<T>(schema: SchemaDefinition);

        public path(property: string): SchemaPropertyDefinition;
        public path(property: string, definition: SchemaPropertyDefinition): void;
        public virtual(property: string): VirtualProperty<T>;
    }

    export interface VirtualProperty<T> {
        get(getter: (this: T) => any): void;
        set(setter: (this: T, value: any) => any): void;
    }

    export interface DatastoreModel<T> {
        entityKind: string;
        new(data: T, id?: string|number, ancestors?: [string|number], namespace?: string): DatastoreEntity<T>;
        get(id: string|number, ancestors?: [string|number], namespace?: string): DatastoreEntity<T>;
        query(namespace?: string, transaction?: object): DatastoreQuery<T>;
        key(id: string|number, ancestors?: [string|number], namespace?: string): DatastoreEntityKey;
    }

    export interface EntityData {
        "Symbol(KEY)": DatastoreEntityKey;
    }

    export interface DatastoreEntity<T> {
        entityData: EntityData<T>;
        entityKey: DatastoreEntityKey;
        excludeFromIndexes: string[];
        save(transaction?: object, options?: object): DatastoreEntity<T>;
        plain(options?: {
            readAll?: boolean;
            virtuals?: boolean;
            showKey?: boolean;
        }): T;
    }

// type EntityPropertyType = "string"|"int"|"double"|"boolean"|"datetime"|"array"|"object"|"geoPoint"|"buffer";
}
