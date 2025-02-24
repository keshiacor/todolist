import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnToName1739833581773 implements MigrationInterface {
    name = 'AddColumnToName1739833581773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "middle_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" ADD "middle_name" character varying`);
    }

}
