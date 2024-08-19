import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1723901628535 implements MigrationInterface {
    name = 'Migration1723901628535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`beers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(200) NOT NULL, \`premium\` tinyint NOT NULL DEFAULT 0, \`price\` float NOT NULL DEFAULT '0', \`crated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`category_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`beers\` ADD CONSTRAINT \`FK_937eb769b7d75e5c6d4c3edc267\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`beers\` DROP FOREIGN KEY \`FK_937eb769b7d75e5c6d4c3edc267\``);
        await queryRunner.query(`DROP TABLE \`beers\``);
    }

}
