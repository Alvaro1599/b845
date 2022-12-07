"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const review_1 = require("../../modules/review/entities/review");
exports.default = (0, typeorm_extension_1.setSeederFactory)(review_1.Review, (faker) => {
    const entity = new review_1.Review();
    entity.createdAt = faker.date.past();
    entity.description = faker.lorem.sentences(2);
    entity.rating = Math.floor(Math.random() * 4.9);
    entity.title = faker.lorem.sentence(3);
    return entity;
});
//# sourceMappingURL=review.js.map