import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnToName1739833539867 implements MigrationInterface {
    name = 'AddColumnToName1739833539867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" RENAME COLUMN "nickname" TO "middle_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" RENAME COLUMN "middle_name" TO "nickname"`);
    }

}
