import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTableCategory1681305374983 implements MigrationInterface {
    name = 'AddTableCategory1681305374983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."category_active_enum" AS ENUM('вкл', 'выкл')`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "slug" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying, "created_date" TIMESTAMP NOT NULL DEFAULT now(), "active" "public"."category_active_enum" NOT NULL, CONSTRAINT "UQ_cb73208f151aa71cdd78f662d70" UNIQUE ("slug"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TYPE "public"."category_active_enum"`);
    }

}
