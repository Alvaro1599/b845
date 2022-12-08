"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations1670513421410 = void 0;
class migrations1670513421410 {
    constructor() {
        this.name = 'migrations1670513421410';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`reviewsQuantity\` float NOT NULL, \`address\` varchar(255) NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`banned\` tinyint NOT NULL DEFAULT 0, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`reviews\` (\`id\` varchar(36) NOT NULL, \`description\` varchar(255) NULL, \`rating\` decimal NOT NULL, \`title\` varchar(255) NULL, \`experienceDate\` date NULL, \`createdAt\` timestamp NULL DEFAULT '2022-12-08 15:30:25', \`userId\` varchar(36) NULL, \`companyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`companies\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NULL, \`name\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`description\` varchar(255) NULL, \`reviewsQuantity\` float NOT NULL, \`address\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`banned\` tinyint NOT NULL DEFAULT 0, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`website\` varchar(255) NOT NULL, \`workEmail\` varchar(255) NULL, \`ratingGeneral\` float NOT NULL DEFAULT '0', \`password\` varchar(255) NULL, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_3e7b86aa8b4ffe84947ff29c0b\` (\`website\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7ed5659e7139fc8bc039198cc1f\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_e2769e29b8dd0ac1b578fa02679\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_5d841d757dd7d85f84ed67377ab\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_5d841d757dd7d85f84ed67377ab\``);
            yield queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_e2769e29b8dd0ac1b578fa02679\``);
            yield queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7ed5659e7139fc8bc039198cc1f\``);
            yield queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``);
            yield queryRunner.query(`DROP INDEX \`IDX_3e7b86aa8b4ffe84947ff29c0b\` ON \`companies\``);
            yield queryRunner.query(`DROP TABLE \`companies\``);
            yield queryRunner.query(`DROP TABLE \`reviews\``);
            yield queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
            yield queryRunner.query(`DROP TABLE \`users\``);
            yield queryRunner.query(`DROP TABLE \`roles\``);
        });
    }
}
exports.migrations1670513421410 = migrations1670513421410;
//# sourceMappingURL=1670513421410-migrations.js.map